import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: string | null = null;

  constructor(private router: Router) {}

  login() {
    // Simulating authentication (replace with real auth logic)
    this.router.navigate(['/']);
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getUser(): string | null {
    return localStorage.getItem('user');
  }
}
