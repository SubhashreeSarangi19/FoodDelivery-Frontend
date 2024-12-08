import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  private cartCount = new BehaviorSubject<number>(0);

  cartItems$ = this.cartItems.asObservable();
  cartCount$ = this.cartCount.asObservable();
  
  addItem(item: CartItem) {
    let items = this.cartItems.value;
    const existingItem = items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items = [...items, { ...item, quantity: 1 }];
    }
    this.cartItems.next(items);
    this.updateCartCount();
  }

  updateCartItem(updatedItem: CartItem) {
    const items = this.cartItems.value.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    this.cartItems.next(items);
    this.updateCartCount();
  }

  removeItem(itemId: number) {
    const items = this.cartItems.value.filter(item => item.id !== itemId);
    this.cartItems.next(items);
    this.updateCartCount();
  }

  private updateCartCount() {
    const count = this.cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCount.next(count);
  }

}
