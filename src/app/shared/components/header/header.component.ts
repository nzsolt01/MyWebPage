import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthModalComponent } from '../../../components/auth-modal/auth-modal.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, AuthModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  userName: string | null = null;
  isModalOpen = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.updateAuthStatus();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.login();
  }

  login() {
    this.authService.login();
    this.updateAuthStatus();
  }

  logout() {
    this.authService.logout();
    this.updateAuthStatus();
  }

  updateAuthStatus() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.userName = this.authService.getUser();
  }
}
