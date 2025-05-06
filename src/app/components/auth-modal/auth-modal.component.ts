import { Component, Output, EventEmitter, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
  ],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent implements OnInit {
  readonly isOpen = input(false);
  @Output() close = new EventEmitter<void>();

  authForm!: FormGroup;
  isLoginMode = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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
    localStorage.setItem('user', this.email?.value);
    this.close.emit();
  }
}
