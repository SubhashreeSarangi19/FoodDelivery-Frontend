import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

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
