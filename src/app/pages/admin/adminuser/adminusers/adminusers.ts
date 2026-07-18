import { Component } from '@angular/core';
interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Manager';
  status: 'Active' | 'Inactive';
  joinDate: string;
  bookings: number;
}
@Component({
  selector: 'app-adminusers',
  standalone: false,
  templateUrl: './adminusers.html',
  styleUrl: './adminusers.css',
})
export class Adminusers {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2024-01-15', bookings: 12 },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', role: 'User', status: 'Active', joinDate: '2024-02-20', bookings: 8 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager', status: 'Inactive', joinDate: '2024-03-10', bookings: 5 }
  ];

  searchTerm = '';

  get filteredUsers(): User[] {
    if (!this.searchTerm) return this.users;
    return this.users.filter(u =>
      u.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getStatusColor(status: string): string {
    return status === 'Active' ? 'green' : 'red';
  }

  getRoleColor(role: string): string {
    const colors = {
      'Admin': 'purple',
      'Manager': 'blue',
      'User': 'gray'
    };
    return colors[role as keyof typeof colors] || 'gray';
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(u => u.id !== id);
    }
  }

  toggleStatus(user: User): void {
    user.status = user.status === 'Active' ? 'Inactive' : 'Active';
  }
}
