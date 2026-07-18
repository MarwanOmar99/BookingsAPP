import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  routerLink: string;
}

interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks: FooterLink[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Packages', routerLink: '/package' },
    { label: 'Bookings', routerLink: '/booking' },
    { label: 'About Us', routerLink: '/about' },
    { label: 'Services', routerLink: '/service' }
  ];

  destinationLinks: FooterLink[] = [
    { label: 'Maldives', routerLink: '/package' },
    { label: 'Swiss Alps', routerLink: '/package' },
    { label: 'Tokyo', routerLink: '/package' },
    { label: 'Dubai', routerLink: '/package' },
    { label: 'Bali', routerLink: '/package' }
  ];

  contactInfo = {
    address: '14 Corniche El Nil, Cairo, Egypt',
    phone: '+20 2 1234 5678',
    email: 'hello@re7latours.com',
    hours: 'Mon – Sat, 9:00 – 19:00'
  };

  socialLinks: SocialLink[] = [
    { label: 'Instagram', icon: 'photo_camera', url: '#' },
    { label: 'Facebook', icon: 'thumb_up', url: '#' },
    { label: 'X', icon: 'tag', url: '#' },
    { label: 'YouTube', icon: 'smart_display', url: '#' }
  ];

  email = '';

  onSubscribe(): void {
    console.log('Footer subscribe:', this.email);
    this.email = '';
  }
}
