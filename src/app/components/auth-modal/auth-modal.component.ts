import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  authForm: FormGroup;
  isLoginMode = true;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitForm() {
    if (this.authForm.invalid) {
      return;
    }

    if (this.isLoginMode) {
      console.log('Logging in with:', this.authForm.value);
    } else {
      console.log('Signing up with:', this.authForm.value);
    }
    localStorage.setItem('user', this.authForm.value);
    this.close.emit();
  }
}
