import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  stats = [
    { label: 'Total Bookings', value: '24', change: '+12%', changeType: 'positive', icon: '📊' },
    { label: 'Active Tours', value: '3', change: 'Ongoing', changeType: 'neutral', icon: '🚀' },
    { label: 'Total Spent', value: '$4,299', change: 'This year', changeType: 'neutral', icon: '💰' },
    { label: 'Upcoming', value: '2', change: 'Next 30 days', changeType: 'neutral', icon: '📅' }
  ];

  recentBookings = [
    { title: 'Beach Paradise - Maldives', date: 'Dec 15 - Dec 20, 2024', status: 'Confirmed', statusColor: 'green' },
    { title: 'Mountain Adventure - Swiss Alps', date: 'Jan 5 - Jan 12, 2025', status: 'Pending', statusColor: 'yellow' },
    { title: 'City Explorer - Tokyo', date: 'Feb 10 - Feb 14, 2025', status: 'Planning', statusColor: 'blue' }
  ];
}
