import { Injectable, signal, effect, WritableSignal } from '@angular/core';

export type Language = 'en' | 'ar';

// Define translation keys as a type
export type TranslationKey =
  | 'hero.badge'
  | 'hero.title'
  | 'hero.title.highlight'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'hero.explore'
  | 'hero.trusted'
  | 'search.title'
  | 'search.destination'
  | 'search.destination.placeholder'
  | 'search.checkin'
  | 'search.checkout'
  | 'search.travel'
  | 'search.leisure'
  | 'search.business'
  | 'search.adventure'
  | 'search.luxury'
  | 'search.family'
  | 'search.button'
  | 'stats.travelers'
  | 'stats.destinations'
  | 'stats.rating'
  | 'stats.satisfaction'
  | 'features.title'
  | 'features.highlight'
  | 'features.subtitle'
  | 'feature.hotels'
  | 'feature.hotels.desc'
  | 'feature.flights'
  | 'feature.flights.desc'
  | 'feature.experiences'
  | 'feature.experiences.desc'
  | 'feature.support'
  | 'feature.support.desc'
  | 'destinations.title'
  | 'destinations.subtitle'
  | 'destinations.view'
  | 'destination.popular'
  | 'destination.adventure'
  | 'destination.city'
  | 'destination.luxury'
  | 'destination.relax'
  | 'destination.romance'
  | 'how.title'
  | 'how.step1'
  | 'how.step1.desc'
  | 'how.step2'
  | 'how.step2.desc'
  | 'how.step3'
  | 'how.step3.desc'
  | 'testimonials.title'
  | 'cta.title'
  | 'cta.subtitle'
  | 'cta.button'
  | 'cta.learn'
  | 'footer.tagline'
  | 'footer.quick'
  | 'footer.about'
  | 'footer.packages'
  | 'footer.services'
  | 'footer.support'
  | 'footer.help'
  | 'footer.privacy'
  | 'footer.terms'
  | 'footer.connect'
  | 'footer.copyright'
  | 'nav.home'
  | 'nav.dashboard'
  | 'nav.bookings'
  | 'nav.package'
  | 'nav.about'
  | 'nav.services'
  | 'nav.admin'
  | 'nav.profile'
  | 'nav.settings'
  | 'nav.logout'
  | 'nav.login'
  | 'nav.register';

interface Translations {
  en: Record<TranslationKey, string>;
  ar: Record<TranslationKey, string>;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = signal<Language>('en');

  constructor() {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'ar')) {
      this.currentLang.set(saved);
    }
    this.applyDirection();
  }

  getLanguage() {
    return this.currentLang.asReadonly();
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    localStorage.setItem('language', lang);
    this.applyDirection();
  }

  toggleLanguage(): void {
    const newLang = this.currentLang() === 'en' ? 'ar' : 'en';
    this.setLanguage(newLang);
  }

  private applyDirection(): void {
    const dir = this.currentLang() === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = this.currentLang();
  }

  translate(key: TranslationKey): string {
    const lang = this.currentLang();
    return translations[lang]?.[key] || key;
  }
}

export const translations: Translations = {
  en: {
    // Hero
    'hero.badge': '🌟 Premium Travel Platform',
    'hero.title': 'Discover Your',
    'hero.title.highlight': 'Dream Journey',
    'hero.subtitle': 'Experience luxury travel with Re7laTours. We curate exclusive packages, premium accommodations, and unforgettable experiences tailored just for you.',
    'hero.cta': 'Start Your Journey',
    'hero.explore': 'Explore Packages',
    'hero.trusted': 'Trusted by 50,000+ travelers',

    // Search Form
    'search.title': '✈️ Plan Your Trip',
    'search.destination': '📍 Where to?',
    'search.destination.placeholder': 'Search destinations...',
    'search.checkin': '📅 Check-in',
    'search.checkout': '📅 Check-out',
    'search.travel': '👥 Travel Type',
    'search.leisure': 'Leisure',
    'search.business': 'Business',
    'search.adventure': 'Adventure',
    'search.luxury': 'Luxury',
    'search.family': 'Family',
    'search.button': '🔍 Search Now',

    // Stats
    'stats.travelers': 'Happy Travelers',
    'stats.destinations': 'Destinations',
    'stats.rating': 'Average Rating',
    'stats.satisfaction': 'Satisfaction Rate',

    // Features
    'features.title': 'Why Choose Us',
    'features.highlight': 'Travel Experience',
    'features.subtitle': 'We make luxury travel accessible and effortless for everyone',
    'feature.hotels': 'Luxury Hotels',
    'feature.hotels.desc': 'Handpicked 5-star hotels with exceptional service and amenities.',
    'feature.flights': 'Best Flight Deals',
    'feature.flights.desc': 'Exclusive discounts on flights with partner airlines worldwide.',
    'feature.experiences': 'Unique Experiences',
    'feature.experiences.desc': 'Curated tours that create unforgettable memories.',
    'feature.support': '24/7 Concierge',
    'feature.support.desc': 'Dedicated support team available anytime, anywhere.',

    // Destinations
    'destinations.title': 'Popular Destinations',
    'destinations.subtitle': 'Explore the most booked destinations by our travelers',
    'destinations.view': 'View All Destinations',
    'destination.popular': 'Popular',
    'destination.adventure': 'Adventure',
    'destination.city': 'City',
    'destination.luxury': 'Luxury',
    'destination.relax': 'Relax',
    'destination.romance': 'Romance',

    // How It Works
    'how.title': 'How It Works',
    'how.step1': 'Choose Your Package',
    'how.step1.desc': 'Browse our curated selection of luxury travel packages',
    'how.step2': 'Book Instantly',
    'how.step2.desc': 'Secure your booking with our easy checkout process',
    'how.step3': 'Travel & Enjoy',
    'how.step3.desc': 'Experience your dream journey with 24/7 support',

    // Testimonials
    'testimonials.title': 'What Our Travelers Say',

    // CTA
    'cta.title': 'Ready to Start Your Journey?',
    'cta.subtitle': 'Join thousands of happy travelers who have booked their dream trips with us',
    'cta.button': 'Explore Packages',
    'cta.learn': 'Learn More',

    // Footer
    'footer.tagline': 'Premium luxury booking platform for discerning travelers.',
    'footer.quick': 'Quick Links',
    'footer.about': 'About Us',
    'footer.packages': 'Packages',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.connect': 'Connect',
    'footer.copyright': 'All rights reserved. Made with ❤️ for travelers.',

    // Navbar
    'nav.home': 'Home',
    'nav.dashboard': 'Dashboard',
    'nav.bookings': 'Bookings',
    'nav.package': 'Package',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.admin': 'Admin',
    'nav.profile': 'Profile',
    'nav.settings': 'Settings',
    'nav.logout': 'Logout',
    'nav.login': 'Login',
    'nav.register': 'Register'
  },
  ar: {
    // Hero
    'hero.badge': '🌟 منصة سفر فاخرة',
    'hero.title': 'اكتشف',
    'hero.title.highlight': 'رحلتك المثالية',
    'hero.subtitle': 'استمتع بتجربة سفر فاخرة مع رحلات تورز. نقدم لك باقات حصرية، إقامات فاخرة، وتجارب لا تُنسى مصممة خصيصاً لك.',
    'hero.cta': 'ابدأ رحلتك',
    'hero.explore': 'استكشف الباقات',
    'hero.trusted': 'موثوق من قبل أكثر من ٥٠,٠٠٠ مسافر',

    // Search Form
    'search.title': '✈️ خطط لرحلتك',
    'search.destination': '📍 إلى أين؟',
    'search.destination.placeholder': 'ابحث عن وجهات...',
    'search.checkin': '📅 تاريخ الوصول',
    'search.checkout': '📅 تاريخ المغادرة',
    'search.travel': '👥 نوع السفر',
    'search.leisure': 'ترفيهي',
    'search.business': 'عملي',
    'search.adventure': 'مغامرة',
    'search.luxury': 'فاخر',
    'search.family': 'عائلي',
    'search.button': '🔍 ابحث الآن',

    // Stats
    'stats.travelers': 'مسافر سعيد',
    'stats.destinations': 'وجهة',
    'stats.rating': 'متوسط التقييم',
    'stats.satisfaction': 'نسبة الرضا',

    // Features
    'features.title': 'لماذا تختارنا',
    'features.highlight': 'تجربة سفر',
    'features.subtitle': 'نجعل السفر الفاخر متاحاً وسهلاً للجميع',
    'feature.hotels': 'فنادق فاخرة',
    'feature.hotels.desc': 'فنادق ٥ نجوم مختارة بعناية مع خدمات واستثنائية.',
    'feature.flights': 'أفضل عروض الطيران',
    'feature.flights.desc': 'خصومات حصرية على الرحلات مع شركات الطيران الشريكة حول العالم.',
    'feature.experiences': 'تجارب فريدة',
    'feature.experiences.desc': 'جولات منسقة تخلق ذكريات لا تُنسى.',
    'feature.support': 'خدمة عملاء ٢٤/٧',
    'feature.support.desc': 'فريق دعم متخصص متاح في أي وقت وفي أي مكان.',

    // Destinations
    'destinations.title': 'وجهات شهيرة',
    'destinations.subtitle': 'استكشف أكثر الوجهات حجزاً من قبل مسافرينا',
    'destinations.view': 'عرض جميع الوجهات',
    'destination.popular': 'شائع',
    'destination.adventure': 'مغامرة',
    'destination.city': 'مدينة',
    'destination.luxury': 'فاخر',
    'destination.relax': 'استرخاء',
    'destination.romance': 'رومانسية',

    // How It Works
    'how.title': 'كيف يعمل',
    'how.step1': 'اختر باقاتك',
    'how.step1.desc': 'تصفح مجموعتنا المختارة من باقات السفر الفاخرة',
    'how.step2': 'احجز فوراً',
    'how.step2.desc': 'أكد حجزك من خلال عملية الدفع السهلة',
    'how.step3': 'سافر واستمتع',
    'how.step3.desc': 'عش رحلتك المثالية مع دعم ٢٤/٧',

    // Testimonials
    'testimonials.title': 'ماذا يقول مسافرونا',

    // CTA
    'cta.title': 'هل أنت مستعد لبدء رحلتك؟',
    'cta.subtitle': 'انضم إلى آلاف المسافرين السعداء الذين حجزوا رحلات أحلامهم معنا',
    'cta.button': 'استكشف الباقات',
    'cta.learn': 'اعرف المزيد',

    // Footer
    'footer.tagline': 'منصة حجز فاخرة للمسافرين المميزين.',
    'footer.quick': 'روابط سريعة',
    'footer.about': 'من نحن',
    'footer.packages': 'الباقات',
    'footer.services': 'الخدمات',
    'footer.support': 'الدعم',
    'footer.help': 'مركز المساعدة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.connect': 'تواصل معنا',
    'footer.copyright': 'جميع الحقوق محفوظة. صنع بحب للمسافرين.',

    // Navbar
    'nav.home': 'الرئيسية',
    'nav.dashboard': 'لوحة التحكم',
    'nav.bookings': 'الحجوزات',
    'nav.package': 'الباقات',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.admin': 'المشرف',
    'nav.profile': 'الملف الشخصي',
    'nav.settings': 'الإعدادات',
    'nav.logout': 'تسجيل الخروج',
    'nav.login': 'تسجيل الدخول',
    'nav.register': 'إنشاء حساب'
  }
};
