import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class Carousel  {
  slides = [
    { id: 1, img: 'https://cancerresearchforum.com/wp-content/uploads/2024/08/revenge-shopping.jpg', title: 'Fashion is what you buy, style is what you do with it.' },
    { id: 2, img: 'https://img.freepik.com/free-photo/young-beautiful-blonde-woman-jacket-blue-wall-with-mobile-phone-doing-online-shopping_496169-1447.jpg', title: 'New Arrivals' },
    { id: 3, img: 'https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg', title: 'Best Deals' }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
