import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  isLoginMode = true;
  email = '';
  password = '';

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitForm() {
    if (this.isLoginMode) {
      console.log('Logging in with:', this.email, this.password);
    } else {
      console.log('Signing up with:', this.email, this.password);
    }
    localStorage.setItem('user', this.email);
    this.close.emit();
  }
}
