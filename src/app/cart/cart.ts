import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}
