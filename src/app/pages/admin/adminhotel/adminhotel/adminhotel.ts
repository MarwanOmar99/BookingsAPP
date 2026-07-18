import { Component } from '@angular/core';

@Component({
  selector: 'app-adminhotel',
  standalone: false,
  templateUrl: './adminhotel.html',
  styleUrl: './adminhotel.css',
})
export class Adminhotel {
    hotels = [
    { id: 1, name: 'Grand Paradise Resort', location: 'Maldives', stars: 5, rooms: 120, status: 'Active' },
    { id: 2, name: 'Alpine Lodge', location: 'Switzerland', stars: 4, rooms: 45, status: 'Active' },
    { id: 3, name: 'Tokyo Grand Hotel', location: 'Japan', stars: 5, rooms: 200, status: 'Inactive' }
  ];

  showModal = false;
  editingHotel: any = null;
  newHotel = { name: '', location: '', stars: 5, rooms: 0, status: 'Active' };

  addHotel(): void {
    this.showModal = true;
    this.editingHotel = null;
    this.newHotel = { name: '', location: '', stars: 5, rooms: 0, status: 'Active' };
  }

  editHotel(hotel: any): void {
    this.showModal = true;
    this.editingHotel = hotel;
    this.newHotel = { ...hotel };
  }

  deleteHotel(id: number): void {
    if (confirm('Are you sure you want to delete this hotel?')) {
      this.hotels = this.hotels.filter(h => h.id !== id);
    }
  }

  saveHotel(): void {
    if (this.editingHotel) {
      const index = this.hotels.findIndex(h => h.id === this.editingHotel.id);
      this.hotels[index] = { ...this.newHotel, id: this.editingHotel.id };
    } else {
      this.hotels.push({ ...this.newHotel, id: this.hotels.length + 1 });
    }
    this.showModal = false;
  }

  closeModal(): void {
    this.showModal = false;
  }

  getStars(stars: number): string {
    return '★'.repeat(stars);
  }

  getStatusColor(status: string): string {
    return status === 'Active' ? 'green' : 'red';
  }
}
