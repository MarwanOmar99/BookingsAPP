import { LanguageService , TranslationKey } from './../../../services/language';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private languageService = inject(LanguageService);
  private router = inject(Router);

  currentLang = this.languageService.getLanguage();
  currentYear = new Date().getFullYear();

  t(key: TranslationKey): string {
    return this.languageService.translate(key);
  }

  credentials = {
    email: '',
    password: ''
  };

  rememberMe = false;
  showPassword = false;
  isSubmitting = false;
  errorMessage = '';

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (!this.credentials.email || !this.credentials.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    this.errorMessage = '';
    this.isSubmitting = true;

    // TODO: replace with real authentication call
    console.log('Signing in:', this.credentials, 'remember me:', this.rememberMe);
    setTimeout(() => {
      this.isSubmitting = false;
      this.router.navigate(['/home']);
    }, 800);
  }

  onGoogleSignIn(): void {
    // TODO: wire up real Google OAuth (e.g. Firebase Auth, Angular OAuth, or your backend's /auth/google endpoint)
    console.log('Continue with Google clicked');
  }

  isArabic(): boolean {
    return this.currentLang() === 'ar';
  }
}
