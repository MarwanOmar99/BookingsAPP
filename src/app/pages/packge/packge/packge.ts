import { Component } from '@angular/core';

export interface TourPackage {
  id: number;
  title: string;
  destination: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  included: string[];
  available: boolean;
  category: string;
}

@Component({
  selector: 'app-packge',
  standalone: false,
  templateUrl: './packge.html',
  styleUrl: './packge.css',
})
export class Packge {
  selectedCategory: string = 'all';
  sortBy: string = 'popular';

  packages: TourPackage[] = [
    {
      id: 1,
      title: 'Maldives Beach Paradise',
      destination: 'Maldives',
      duration: '5 Days / 4 Nights',
      price: 1299,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=1000&fit=crop',
      description: 'Experience luxury in the Maldives with overwater villas, crystal clear waters, and world-class dining.',
      included: ['Flight', 'Hotel', 'Meals', 'Water Sports', 'Spa Treatment'],
      available: true,
      category: 'beach'
    },
    {
      id: 2,
      title: 'Swiss Alps Adventure',
      destination: 'Switzerland',
      duration: '7 Days / 6 Nights',
      price: 1899,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=1000&fit=crop',
      description: 'Explore the majestic Swiss Alps with guided hikes, cable car rides, and cozy mountain lodges.',
      included: ['Flight', 'Hotel', 'Meals', 'Guided Tours', 'Cable Car Pass'],
      available: true,
      category: 'mountain'
    },
    {
      id: 3,
      title: 'Tokyo City Explorer',
      destination: 'Japan',
      duration: '4 Days / 3 Nights',
      price: 1099,
      rating: 4.7,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=1000&fit=crop',
      description: 'Discover the vibrant city of Tokyo with cultural experiences, shopping, and amazing cuisine.',
      included: ['Flight', 'Hotel', 'Breakfast', 'City Tours', 'Train Pass'],
      available: true,
      category: 'city'
    },
    {
      id: 4,
      title: 'Dubai Luxury Escape',
      destination: 'UAE',
      duration: '6 Days / 5 Nights',
      price: 2499,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=1000&fit=crop',
      description: 'Indulge in luxury in Dubai with 5-star hotels, desert safaris, and world-class shopping.',
      included: ['Flight', '5-Star Hotel', 'Meals', 'Desert Safari', 'Burj Khalifa'],
      available: true,
      category: 'luxury'
    },
    {
      id: 5,
      title: 'Bali Tropical Retreat',
      destination: 'Indonesia',
      duration: '6 Days / 5 Nights',
      price: 899,
      rating: 4.6,
      reviews: 278,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=1000&fit=crop',
      description: 'Relax in Bali\'s tropical paradise with rice terraces, temples, and beautiful beaches.',
      included: ['Flight', 'Hotel', 'Breakfast', 'Temple Tours', 'Spa'],
      available: true,
      category: 'beach'
    },
    {
      id: 6,
      title: 'Safari Adventure',
      destination: 'Kenya',
      duration: '8 Days / 7 Nights',
      price: 2199,
      rating: 4.9,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&h=1000&fit=crop',
      description: 'Experience the wild with safari tours in Kenya\'s national parks and reserves.',
      included: ['Flight', 'Lodge', 'Meals', 'Game Drives', 'Guided Tours'],
      available: true,
      category: 'adventure'
    },
    {
      id: 7,
      title: 'Paris Romantic Getaway',
      destination: 'France',
      duration: '4 Days / 3 Nights',
      price: 999,
      rating: 4.8,
      reviews: 423,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=1000&fit=crop',
      description: 'Fall in love with Paris - the city of lights, romance, and world-class art.',
      included: ['Flight', 'Hotel', 'Breakfast', 'Eiffel Tower', 'Museum Pass'],
      available: false,
      category: 'city'
    },
    {
      id: 8,
      title: 'Iceland Northern Lights',
      destination: 'Iceland',
      duration: '5 Days / 4 Nights',
      price: 1699,
      rating: 4.7,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&h=1000&fit=crop',
      description: 'Witness the breathtaking Northern Lights and explore Iceland\'s natural wonders.',
      included: ['Flight', 'Hotel', 'Meals', 'Northern Lights Tour', 'Golden Circle'],
      available: true,
      category: 'adventure'
    }
  ];

  // Material Symbols names — rendered via <span class="material-symbols-outlined">
  categories = [
    { value: 'all', label: 'All Packages', icon: 'apps' },
    { value: 'beach', label: 'Beach', icon: 'beach_access' },
    { value: 'mountain', label: 'Mountain', icon: 'landscape' },
    { value: 'city', label: 'City', icon: 'location_city' },
    { value: 'adventure', label: 'Adventure', icon: 'hiking' },
    { value: 'luxury', label: 'Luxury', icon: 'diamond' }
  ];

  sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  get filteredPackages(): TourPackage[] {
    let filtered = this.packages;

    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    switch (this.sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  resetFilters(): void {
    this.selectedCategory = 'all';
    this.sortBy = 'popular';
  }

  bookPackage(pkg: TourPackage): void {
    alert(`Booking "${pkg.title}" - Price: $${pkg.price}`);
  }

  viewDetails(pkg: TourPackage): void {
    console.log('Viewing:', pkg.title);
  }
}
