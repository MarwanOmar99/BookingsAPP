import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
    menuItems = [
    { path: '/admin', icon: '📊', label: 'Dashboard' },
    { path: '/admin/packages', icon: '📦', label: 'Packages' },
    { path: '/admin/bookings', icon: '📋', label: 'Bookings' },
    { path: '/admin/users', icon: '👥', label: 'Users' },
    { path: '/admin/categories', icon: '🏷️', label: 'Categories' },
    { path: '/admin/hotels', icon: '🏨', label: 'Hotels' }
  ];
}
