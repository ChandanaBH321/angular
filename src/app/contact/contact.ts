import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  name = '';
  email = '';
  message = '';
  success = '';

  submitForm() {
    // For now, just simulate form submission
    if (this.name && this.email && this.message) {
      this.success = 'Thank you for contacting us! We will get back to you soon.';
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      this.success = 'Please fill in all fields!';
    }
  }
}
