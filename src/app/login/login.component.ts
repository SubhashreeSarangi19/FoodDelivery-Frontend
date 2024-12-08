import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  signupObj = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}
  getData() {
    if (this.signupObj.userName && this.signupObj.email && this.signupObj.password) {
      console.log('Form data:', this.signupObj);
      this.router.navigate(['/']); 
    } else {
      console.log('Please fill in all fields.');
    }
  }
}
