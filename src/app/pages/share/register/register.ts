import { LanguageService , TranslationKey } from './../../../services/language';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private languageService = inject(LanguageService);
  private router = inject(Router);

  currentLang = this.languageService.getLanguage();
  currentYear = new Date().getFullYear();

  t(key: TranslationKey): string {
    return this.languageService.translate(key);
  }

  form = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  agreeTerms = false;
  showPassword = false;
  showConfirmPassword = false;
  isSubmitting = false;
  errorMessage = '';

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(): void {
    if (!this.form.fullName || !this.form.email || !this.form.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }
    if (this.form.password !== this.form.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }
    if (!this.agreeTerms) {
      this.errorMessage = 'Please agree to the Terms of Service to continue.';
      return;
    }

    this.errorMessage = '';
    this.isSubmitting = true;

    // TODO: replace with real registration call
    console.log('Registering:', this.form);
    setTimeout(() => {
      this.isSubmitting = false;
      this.router.navigate(['/home']);
    }, 800);
  }

  onGoogleSignUp(): void {
    // TODO: wire up real Google OAuth (e.g. Firebase Auth, Angular OAuth, or your backend's /auth/google endpoint)
    console.log('Continue with Google clicked');
  }

  isArabic(): boolean {
    return this.currentLang() === 'ar';
  }
}
