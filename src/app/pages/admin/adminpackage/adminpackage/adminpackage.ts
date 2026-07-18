import { Component } from '@angular/core';
interface Package {
  id: number;
  title: string;
  destination: string;
  price: number;
  duration: string;
  category: string;
  status: 'Active' | 'Inactive';
  image: string;
}
@Component({
  selector: 'app-adminpackage',
  standalone: false,
  templateUrl: './adminpackage.html',
  styleUrl: './adminpackage.css',
})
export class Adminpackage {
    packages: Package[] = [
    { id: 1, title: 'Maldives Beach Paradise', destination: 'Maldives', price: 1299, duration: '5 Days', category: 'Beach', status: 'Active', image: '🏖️' },
    { id: 2, title: 'Swiss Alps Adventure', destination: 'Switzerland', price: 1899, duration: '7 Days', category: 'Mountain', status: 'Active', image: '🏔️' },
    { id: 3, title: 'Tokyo City Explorer', destination: 'Japan', price: 1099, duration: '4 Days', category: 'City', status: 'Inactive', image: '🏙️' }
  ];

  showModal = false;
  editingPackage: Package | null = null;

  newPackage: Package = {
    id: 0,
    title: '',
    destination: '',
    price: 0,
    duration: '',
    category: '',
    status: 'Active',
    image: ''
  };

  categories = ['Beach', 'Mountain', 'City', 'Adventure', 'Luxury'];

  addPackage(): void {
    this.showModal = true;
    this.editingPackage = null;
    this.newPackage = { id: this.packages.length + 1, title: '', destination: '', price: 0, duration: '', category: '', status: 'Active', image: '' };
  }

  editPackage(pkg: Package): void {
    this.showModal = true;
    this.editingPackage = pkg;
    this.newPackage = { ...pkg };
  }

  deletePackage(id: number): void {
    if (confirm('Are you sure you want to delete this package?')) {
      this.packages = this.packages.filter(p => p.id !== id);
    }
  }

  savePackage(): void {
    if (this.editingPackage) {
      const index = this.packages.findIndex(p => p.id === this.editingPackage!.id);
      this.packages[index] = { ...this.newPackage };
    } else {
      this.packages.push({ ...this.newPackage, id: this.packages.length + 1 });
    }
    this.showModal = false;
  }

  closeModal(): void {
    this.showModal = false;
  }

  getStatusColor(status: string): string {
    return status === 'Active' ? 'green' : 'red';
  }
}
