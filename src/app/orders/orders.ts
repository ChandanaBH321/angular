import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrls: ['./orders.css']
})
export class Orders {
  orders = [
    {
      orderId: 'ORD-1001',
      date: '2025-09-12',
      items: [
        { name: 'Men T-Shirt', price: 499, qty: 1 },
        { name: 'Women Dress', price: 899, qty: 1 }
      ],
      total: 1398,
      status: 'Delivered'
    },
    {
      orderId: 'ORD-1002',
      date: '2025-09-10',
      items: [
        { name: 'Kids Shoes', price: 699, qty: 2 }
      ],
      total: 1398,
      status: 'Shipped'
    }
  ];
}
