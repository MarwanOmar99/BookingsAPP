import { Component } from '@angular/core';

interface Bookings {
  id: number;
  title: string;
  destination: string;
  duration: string;
  price: number;
  status: 'Confirmed' | 'Pending' | 'Planning' | 'Cancelled';
  image: string;
  checkIn: string;
  checkOut: string;
}

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {
  filterStatus: string = 'all';
  sortBy: string = 'date';

  bookings: Bookings[] = [
    {
      id: 1,
      title: 'Beach Paradise - Maldives',
      destination: 'Maldives',
      duration: '5 days / 4 nights',
      price: 1299,
      status: 'Confirmed',
      image: 'beach_access',
      checkIn: 'Dec 15, 2024',
      checkOut: 'Dec 20, 2024'
    },
    {
      id: 2,
      title: 'Mountain Adventure - Swiss Alps',
      destination: 'Switzerland',
      duration: '7 days / 6 nights',
      price: 1899,
      status: 'Pending',
      image: 'landscape',
      checkIn: 'Jan 5, 2025',
      checkOut: 'Jan 12, 2025'
    },
    {
      id: 3,
      title: 'City Explorer - Tokyo',
      destination: 'Japan',
      duration: '4 days / 3 nights',
      price: 1099,
      status: 'Planning',
      image: 'location_city',
      checkIn: 'Feb 10, 2025',
      checkOut: 'Feb 14, 2025'
    }
  ];

  get filteredBookings(): Bookings[] {
    let filtered = this.bookings;

    if (this.filterStatus !== 'all') {
      filtered = filtered.filter(b => b.status.toLowerCase() === this.filterStatus);
    }

    return filtered;
  }

  getStatusColor(status: string): string {
    const colors = {
      'Confirmed': 'green',
      'Pending': 'gold',
      'Planning': 'blue',
      'Cancelled': 'red'
    };
    return colors[status as keyof typeof colors] || 'gray';
  }

  viewDetails(booking: Bookings): void {
    console.log('Viewing:', booking.title);
  }

  cancelBooking(booking: Bookings): void {
    if (confirm(`Are you sure you want to cancel "${booking.title}"?`)) {
      console.log('Cancelled:', booking.title);
    }
  }
}
