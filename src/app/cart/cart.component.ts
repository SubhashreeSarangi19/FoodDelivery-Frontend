import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './cart-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartItem } from '../cart-item.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems: CartItem[] = [];

  constructor(private cartService: CartServiceService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items: CartItem[]) => {
      this.cartItems = items;
    });
  }

  increaseQuantity(item: CartItem) {
    item.quantity += 1;
    this.cartService.updateCartItem(item); // Use a method in CartService to update
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) { // Ensure quantity doesn’t go below 1
      item.quantity -= 1;
      this.cartService.updateCartItem(item); // Update the cart item in CartService
    } else {
      this.removeItem(item.id); // Optionally, remove item if quantity reaches 0
    }
  }

  removeItem(itemId: number) {
    this.cartService.removeItem(itemId);
  }

  get total() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
  
}
