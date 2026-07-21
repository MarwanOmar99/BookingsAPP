import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  PLATFORM_ID,
  inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    FB?: {
      init: (opts: { xfbml: boolean; version: string; appId?: string }) => void;
      XFBML: { parse: (node?: HTMLElement) => void };
    };
    fbAsyncInit?: () => void;
  }
}

@Component({
  selector: 'app-facebook-reviews',
  standalone: false,
  templateUrl: './facebookreviws.html',
  styleUrl: './facebookreviws.css',
})
export class FacebookReviews implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  /**
   * IMPORTANT: use the canonical numeric-ID URL, not the /people/Name/ID/ format —
   * the Page Plugin doesn't reliably resolve that profile-style URL.
   */
  @Input() pageUrl = 'https://www.facebook.com/100064835522089';

  /**
   * IMPORTANT: these must be the *resolved* permalinks (facebook.com/Page/posts/...),
   * not facebook.com/share/p/... short links — the Post Plugin can't embed those.
   * Open each share link once, copy the URL it redirects to, and use that instead.
   */
  @Input() reviewUrls: string[] = [
    'https://www.facebook.com/story.php?story_fbid=24211401961843630&id=100002014915725&rdid=XEnYFKkqaTee2geV#',
    'https://www.facebook.com/story.php?story_fbid=24211401961843630&id=100002014915725&rdid=XEnYFKkqaTee2geV#'
  ];

  /**
   * Optional but recommended: a Facebook App ID from developers.facebook.com.
   * Facebook's own Page/Post Plugin embed-code generator includes one —
   * without it, plugins can silently fail to render on some domains.
   */
  @Input() appId?: string;

  get reviewsPageUrl(): string {
    return `${this.pageUrl.replace(/\/$/, '')}/reviews/`;
  }

  private parseRetryTimer?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return; // skip on SSR — the FB SDK needs a real DOM/window
    }
    this.loadFacebookSdk();
  }

  ngOnDestroy(): void {
    if (this.parseRetryTimer) {
      clearTimeout(this.parseRetryTimer);
    }
  }

  private loadFacebookSdk(): void {
    if (window.FB) {
      // SDK already present (e.g. navigated back to this page) — just re-parse.
      this.parseWhenReady();
      return;
    }

    if (document.getElementById('facebook-jssdk')) {
      // Script tag already injected by a previous instance; wait for it to finish.
      this.parseWhenReady();
      return;
    }

    window.fbAsyncInit = () => {
      window.FB?.init({
        xfbml: true,
        version: 'v19.0',
        ...(this.appId ? { appId: this.appId } : {})
      });
      this.parseWhenReady();
    };

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    const appIdParam = this.appId ? `&appId=${encodeURIComponent(this.appId)}` : '';
    script.src = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0${appIdParam}`;
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.onerror = () => {
      console.error(
        '[FacebookReviews] Failed to load connect.facebook.net/en_US/sdk.js — ' +
        'check the Network tab for this exact request. If it shows as blocked/failed, ' +
        'an ad blocker or privacy extension is preventing it (very common). ' +
        'Try an incognito window with extensions disabled to confirm.'
      );
    };
    document.body.appendChild(script);
  }

  /** FB.XFBML.parse() only works once the SDK has finished loading, so retry briefly. */
  private parseWhenReady(attempt = 0): void {
    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }
    if (attempt > 20) {
      console.warn(
        '[FacebookReviews] The Facebook SDK never became available after ~4s. ' +
        'Check the Network tab for a blocked/failed request to connect.facebook.net.'
      );
      return;
    }
    this.parseRetryTimer = setTimeout(() => this.parseWhenReady(attempt + 1), 200);
  }
}
