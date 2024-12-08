import { Component } from '@angular/core';
import { CartServiceService } from '../cart/cart-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems = [
    {
      id: 1,
      name: 'Premium Family Feast for 4 – Chicken',
      price: 982,
      spicy: true,
      rating: 5.0,
      reviews: 5,
      description: 'Kcal: 3321.6 | Carbs: 1228.2 Gms | Sugar: 147.2 Gms | Fat: 141.8 Gms | Saturated fat: 49.1 Gms | Protein: 89.2 Gms | Sodium: 5008.5 Mg Contains: Gluten, ...',
      image: 'assets/menu-pic-1.avif',
      customizable: false
    },
    {
      id: 2,
      name: 'Crispy Veg Burger',
      price: 70,
      bestseller: true,
      rating: 4.3,
      reviews: 714,
      description: 'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 1 | Kcal: 362 | Carbs: 53.4 Gms | Sugar: 6.5 Gms | Fat: 12.8 Gms Satur...',
      image: 'assets/menu-pic-2.avif',
      customizable: true
    },
    {
      id: 3,
      name: 'Crispy Chicken Burger',
      price: 99,
      bestseller: true,
      rating: 4.4,
      reviews: 781,
      description: 'Crispy Chicken Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 1 | Kcal: 359.1 | Carbs: 44.3 Gms | Sugar: 7.5 Gms | Fat: 15.1 Gms Satur...',
      image: 'assets/menu-pic-3.avif',
      customizable: true
    },
    {
      id: 4,
      name: 'Choco Sundae Cup [100ml X 4pcs]',
      price: 599,
      bestseller: true,
      rating: 4.7,
      reviews: 59,
      description: 'Creamy vanilla scoop with swirls of rich chocolate sauce topped with butterscotch crunchies. Kcal/Serving: 116 (6%)',
      image: 'assets/menu-pic-4.jpg',
      customizable: true
    },
    {
      id: 5,
      name: 'Chicken Manchow Soup',
      price: 259,
      bestseller: true,
      rating: 4.2,
      reviews: 28,
      description: 'Hot and Spicy soup, served with succulent chicken and fried noodles. NO MSG.',
      image: 'assets/menu-pic-5.avif',
      customizable: true
    },
    {
      id: 6,
      name: 'Kadai Mushroom',
      price: 315,
      bestseller: true,
      rating: 4.0,
      reviews: 78,
      description: 'Serves 1 | Kadai Mushroom is a flavourful and aromatic North Indian dish where mushrooms are cooked with bell peppers (capsicum), onions, tomatoes, and a blend of spices',
      image: 'assets/menu-pic-6.avif',
      customizable: true
    },
    {
      id: 7,
      name: 'Crispy Chicken Burger',
      price: 199,
      bestseller: true,
      rating: 3.9,
      reviews: 118,
      description: 'Tender pieces of chicken and egg with rice, herbs and spices cooked on firewood.',
      image: 'assets/menu-pic-7.avif',
      customizable: true
    },
    {
      id: 8,
      name: 'Chicken Butter Masala(4Pcs)',
      price: 499,
      bestseller: true,
      rating: 4.9,
      reviews: 681,
      description: 'A flavorful and aromatic chicken dish that tantalizes the taste buds with its rich and savory flavors.',
      image: 'assets/menu-pic-8.avif',
      customizable: true
    }
  ];

  constructor(private cartService: CartServiceService) {}

  // Adds the item to the cart
  addToCart(item: any) {
    this.cartService.addItem(item);
  }
}
