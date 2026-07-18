import { Component } from '@angular/core';

@Component({
  selector: 'app-admincategories',
  standalone: false,
  templateUrl: './admincategories.html',
  styleUrl: './admincategories.css',
})
export class Admincategories {
    categories = [
    { id: 1, name: 'Beach', icon: '🏖️', count: 8, status: 'Active' },
    { id: 2, name: 'Mountain', icon: '🏔️', count: 6, status: 'Active' },
    { id: 3, name: 'City', icon: '🏙️', count: 10, status: 'Active' },
    { id: 4, name: 'Adventure', icon: '🧗', count: 5, status: 'Inactive' },
    { id: 5, name: 'Luxury', icon: '💎', count: 7, status: 'Active' }
  ];

  showModal = false;
  editingCategory: any = null;
  newCategory = { name: '', icon: '', status: 'Active' };

  addCategory(): void {
    this.showModal = true;
    this.editingCategory = null;
    this.newCategory = { name: '', icon: '', status: 'Active' };
  }

  editCategory(cat: any): void {
    this.showModal = true;
    this.editingCategory = cat;
    this.newCategory = { ...cat };
  }

  deleteCategory(id: number): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categories = this.categories.filter(c => c.id !== id);
    }
  }

  saveCategory(): void {
    if (this.editingCategory) {
      const index = this.categories.findIndex(c => c.id === this.editingCategory.id);
      this.categories[index] = { ...this.newCategory, id: this.editingCategory.id, count: this.editingCategory.count };
    } else {
      this.categories.push({ ...this.newCategory, id: this.categories.length + 1, count: 0 });
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
