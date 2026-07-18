import { LanguageService } from './../../../services/language';
import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private languageService = inject(LanguageService);

  currentLang = this.languageService.getLanguage();

  menuOpen = false;
  mobileMenuOpen = false;

  constructor(private router: Router) {}

  get isArabic(): boolean {
    return this.currentLang() === 'ar';
  }

  toggleLanguage(): void {
    const next = this.isArabic ? 'en' : 'ar';
    this.languageService.setLanguage(next);

    // Flip the whole document direction so every page mirrors left↔right,
    // not just the navbar. Also updates the lang attribute for a11y/SEO.
    document.documentElement.setAttribute('lang', next);
    document.documentElement.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr');
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  logout(): void {
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu')) {
      this.menuOpen = false;
    }
  }
}

