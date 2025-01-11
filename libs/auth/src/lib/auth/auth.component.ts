import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'lib-auth',
  imports: [CommonModule, LoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  providers: [AuthService],
})
export class AuthComponent {}
