import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class Payment {
  paymentMethod: string = 'card';

 pay() {
  alert(`Payment successful via ${this.paymentMethod.toUpperCase()}! 🎉`);
  // Redirect to Success Page
  window.location.href = '/success';
}

}
