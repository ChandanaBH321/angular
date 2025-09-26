import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class Checkout {
  cartItems: any[] = [];
  total = 0;
  name = '';
  address = '';
  phone = '';

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  placeOrder() {
    if (this.name && this.address && this.phone) {
      // You can also save order details to a service here if needed
      alert('Order placed successfully! Redirecting to payment...');
      this.router.navigate(['/payment']);   // ✅ redirect to payment
    } else {
      alert('Please fill all details before placing the order.');
    }
  }
}
