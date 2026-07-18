import { Component } from '@angular/core';
interface Booking {
  id: string;
  user: string;
  package: string;
  date: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  amount: number;
  payment: 'Paid' | 'Pending' | 'Refunded';
}
@Component({
  selector: 'app-adminbookings',
  standalone: false,
  templateUrl: './adminbookings.html',
  styleUrl: './adminbookings.css',
})
export class Adminbookings {
 bookings: Booking[] = [
    { id: '#BK-001', user: 'John Doe', package: 'Maldives Paradise', date: '2024-12-15', status: 'Confirmed', amount: 1299, payment: 'Paid' },
    { id: '#BK-002', user: 'Sarah Smith', package: 'Swiss Alps', date: '2024-12-14', status: 'Pending', amount: 1899, payment: 'Pending' },
    { id: '#BK-003', user: 'Mike Johnson', package: 'Tokyo Explorer', date: '2024-12-13', status: 'Completed', amount: 1099, payment: 'Paid' },
    { id: '#BK-004', user: 'Emma Wilson', package: 'Dubai Luxury', date: '2024-12-12', status: 'Cancelled', amount: 2499, payment: 'Refunded' }
  ];

  filterStatus: string = 'all';

  get filteredBookings(): Booking[] {
    if (this.filterStatus === 'all') {
      return this.bookings;
    }
    return this.bookings.filter(b =>
      b.status.toLowerCase() === this.filterStatus?.toLowerCase()
    );
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'Confirmed': 'green',
      'Pending': 'yellow',
      'Completed': 'blue',
      'Cancelled': 'red'
    };
    return colors[status] || 'gray';
  }

  getPaymentColor(payment: string): string {
    const colors: { [key: string]: string } = {
      'Paid': 'green',
      'Pending': 'yellow',
      'Refunded': 'red'
    };
    return colors[payment] || 'gray';
  }

  updateStatus(booking: Booking, newStatus: string): void {
    if (booking) {
      booking.status = newStatus as Booking['status'];
    }
  }
}
