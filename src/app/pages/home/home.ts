import { Component, HostListener, inject, OnInit } from '@angular/core';
import { LanguageService, TranslationKey } from '../../services/language';

interface Destination {
  id: number;
  name: string;
  image: string;
  location: string;
  price: string;
  description: string;
  rating: number;
  tag: TranslationKey;
  featured?: boolean;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  location: string;
}

interface Feature {
  icon: string;
  title: TranslationKey;
  description: TranslationKey;
  image?: string;
}

interface Stat {
  number: string;
  label: TranslationKey;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  private languageService = inject(LanguageService);

  currentLang = this.languageService.getLanguage();

  t(key: TranslationKey): string {
    return this.languageService.translate(key);
  }

  heroImage = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&h=1200&fit=crop';

  searchData = {
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    travelType: 'leisure'
  };

  email = '';
  currentYear = new Date().getFullYear();
  isScrolled = false;

  // Material Symbols names — rendered via <span class="material-symbols-outlined">
  features: Feature[] = [
    {
      icon: 'flight_takeoff',
      title: 'feature.flights',
      description: 'feature.flights.desc',
      image: 'https://images.unsplash.com/photo-1540339832862-474599807836?w=900&h=600&fit=crop'
    },
    {
      icon: 'support_agent',
      title: 'feature.support',
      description: 'feature.support.desc'
    },
    {
      icon: 'hotel',
      title: 'feature.hotels',
      description: 'feature.hotels.desc'
    },
    {
      icon: 'confirmation_number',
      title: 'feature.experiences',
      description: 'feature.experiences.desc'
    }
  ];

  destinations: Destination[] = [
    {
      id: 1,
      name: 'Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=1000&fit=crop',
      location: 'Indian Ocean',
      price: '$1,299',
      description: 'Crystal clear waters & overwater villas',
      rating: 4.9,
      tag: 'destination.popular',
      featured: true
    },
    {
      id: 2,
      name: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=1000&fit=crop',
      location: 'Switzerland',
      price: '$1,899',
      description: 'Majestic mountains & cozy chalets',
      rating: 4.8,
      tag: 'destination.adventure'
    },
    {
      id: 3,
      name: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=1000&fit=crop',
      location: 'Japan',
      price: '$1,099',
      description: 'Vibrant city & rich culture',
      rating: 4.7,
      tag: 'destination.city'
    },
    {
      id: 4,
      name: 'Dubai',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=1000&fit=crop',
      location: 'UAE',
      price: '$2,499',
      description: 'Luxury shopping & desert safaris',
      rating: 4.9,
      tag: 'destination.luxury',
      featured: true
    },
    {
      id: 5,
      name: 'Bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=1000&fit=crop',
      location: 'Indonesia',
      price: '$899',
      description: 'Tropical paradise & spiritual retreats',
      rating: 4.6,
      tag: 'destination.relax'
    },
    {
      id: 6,
      name: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=1000&fit=crop',
      location: 'France',
      price: '$999',
      description: 'City of love & art',
      rating: 4.8,
      tag: 'destination.romance'
    }
  ];

  stats: Stat[] = [
    { number: '12K+', label: 'stats.travelers', icon: 'group' },
    { number: '150+', label: 'stats.destinations', icon: 'public' },
    { number: '4.9', label: 'stats.rating', icon: 'star' },
    { number: '98%', label: 'stats.satisfaction', icon: 'workspace_premium' }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Business Traveler',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Re7laTours transformed my business travel experience. The platform is intuitive and the support team is incredible!',
      rating: 5,
      location: 'New York, USA'
    },
    {
      name: 'Michael Chen',
      role: 'Family Vacationer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Found the perfect resort for our family. The booking process was seamless and stress-free.',
      rating: 5,
      location: 'Singapore'
    },
    {
      name: 'Emma Wilson',
      role: 'Adventure Seeker',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'The curated experiences helped me discover hidden gems. Absolutely love it!',
      rating: 5,
      location: 'London, UK'
    }
  ];

  travelTypes = [
    { value: 'leisure', label: 'search.leisure' as TranslationKey, icon: 'beach_access' },
    { value: 'business', label: 'search.business' as TranslationKey, icon: 'work' },
    { value: 'adventure', label: 'search.adventure' as TranslationKey, icon: 'hiking' }
  ];

  currentTestimonial = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    }, 5000);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  onSearch(): void {
    console.log('Searching:', this.searchData);
  }

  onSubscribe(): void {
    console.log('Subscribed:', this.email);
    this.email = '';
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }

  setTestimonial(index: number): void {
    this.currentTestimonial = index;
  }

  isArabic(): boolean {
    return this.currentLang() === 'ar';
  }
}
