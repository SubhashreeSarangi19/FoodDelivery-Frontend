import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [RouterLink,CommonModule,NgForOf],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent {
  restaurants: Restaurant[] = [
    { id: 1, name: 'Pizza Hut', rating: 4.5, isFavorite: false, imageUrl: 'assets/pizza-hut.avif' },
    { id: 2, name: 'KFC', rating: 4.2, isFavorite: true, imageUrl: 'assets/kfc.avif' },
    { id: 3, name: "Domino's", rating: 4.0, isFavorite: false, imageUrl: 'assets/dominos.avif' },
    { id: 4, name: "Wow! Momo", rating: 4.6, isFavorite: true, imageUrl: 'assets/wow-momo.avif' },
    { id: 5, name: "Burger King", rating: 4.1, isFavorite: false, imageUrl: 'assets/burger-king.avif' },
    { id: 6, name: "Biryani Box", rating: 3.9, isFavorite: false, imageUrl: 'assets/biryani-box.avif' },
    { id: 7, name: "La Pino'z Pizza", rating: 3.6, isFavorite: false, imageUrl: 'assets/la-pinoz.avif' },
    { id: 8, name: "Kwality Walls Ice Cream", rating: 4.8, isFavorite: false, imageUrl: 'assets/kwality-walls.avif' },
    { id: 9, name: "Rajdhani Fastfood", rating: 3.6, isFavorite: false, imageUrl: 'assets/fast-food.avif' },
    { id: 10, name: "Woodfire Biryani", rating: 3.9, isFavorite: false, imageUrl: 'assets/woodfire-biryani.avif' },
    { id: 11, name: "Mio Amore", rating: 4.8, isFavorite: false, imageUrl: 'assets/mio-amore.avif' },
    { id: 12, name: "The Belgian Waffle Co.", rating: 4.0, isFavorite: false, imageUrl: 'assets/waffle.avif' },
  ] ;

  wishlistedRestaurants: Restaurant[] = [];

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage) { // Check if `window` and `localStorage` exist
      const storedWishlisted = localStorage.getItem('wishlistedRestaurants');
      if (storedWishlisted) {
        this.wishlistedRestaurants = JSON.parse(storedWishlisted);
        this.updateRestaurantFavorites();
      }
    }
  }

// Helper to sync `isFavorite` between restaurants and wishlistedRestaurants
updateRestaurantFavorites(): void {
  this.restaurants.forEach(restaurant => {
    restaurant.isFavorite = this.wishlistedRestaurants.some(
      wishlisted => wishlisted.id === restaurant.id
    );
  });
}

toggleWishlist(restaurantId: number): void {
  const restaurant = this.restaurants.find(r => r.id === restaurantId);
  if (restaurant) {
    restaurant.isFavorite = !restaurant.isFavorite;
    if (restaurant.isFavorite) {
      this.addToWishlist(restaurant);
    } else {
      this.removeFromWishlist(restaurant);
    }
  }
}

addToWishlist(restaurant: Restaurant): void {
  if (!this.wishlistedRestaurants.some(r => r.id === restaurant.id)) {
    this.wishlistedRestaurants.push(restaurant);
    this.updateLocalStorage();
  }
}

removeFromWishlist(restaurant: Restaurant): void {
  this.wishlistedRestaurants = this.wishlistedRestaurants.filter(r => r.id !== restaurant.id);
  this.updateLocalStorage();
}

updateLocalStorage(): void {
  if (typeof window !== 'undefined' && localStorage) {
    localStorage.setItem('wishlistedRestaurants', JSON.stringify(this.wishlistedRestaurants));
  }
}


}
