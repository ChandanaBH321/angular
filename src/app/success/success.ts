import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './success.html',
  styleUrls: ['./success.css']
})
export class Success {
  orderId: string = '';

  ngOnInit() {
    // Generate a random order ID
    this.orderId = 'ORD-' + Math.floor(Math.random() * 1000000);
  }
}
