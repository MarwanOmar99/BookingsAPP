import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {
    services = [
    { icon: '✈️', title: 'Flight Booking', description: 'Best deals on international and domestic flights.' },
    { icon: '🏨', title: 'Hotel Reservations', description: 'Luxury and boutique hotels worldwide.' },
    { icon: '🚗', title: 'Transportation', description: 'Private transfers, car rentals, and chauffeur services.' },
    { icon: '🎫', title: 'Tour Packages', description: 'Curated tours and experiences at your destination.' },
    { icon: '🛡️', title: 'Travel Insurance', description: 'Comprehensive coverage for peace of mind.' },
    { icon: '📱', title: '24/7 Support', description: 'Dedicated support team available around the clock.' }
  ];
}
