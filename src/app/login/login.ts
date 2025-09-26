import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        alert('Login successful!');
        localStorage.setItem('user', JSON.stringify(res.user)); // store logged user
        this.router.navigate(['/']); // redirect to home
      },
      error: (err) => {
        this.error = err.error?.error || 'Login failed!';
      }
    });
  }
}
