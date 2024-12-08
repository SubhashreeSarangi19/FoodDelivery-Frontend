import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, NgModel } from '@angular/forms';
import { WishlistedRestaurantsComponent } from './wishlisted-restaurants/wishlisted-restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,
    RouterOutlet,HeaderComponent,CuisinesComponent,
    RouterLink,RestaurantsComponent,FooterComponent,
    SignupComponent,LoginComponent,FormsModule,
    WishlistedRestaurantsComponent,MenuComponent,
    CartComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'swiggy';
  showCuisinesAndRestaurants = false;
  hideHeader = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateVisibility(this.router.url);
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd) // Narrow the event type
    ).subscribe((event: NavigationEnd) => {
      this.updateVisibility(event.url);
    });
  }
  private updateVisibility(url: string) {
    this.showCuisinesAndRestaurants = url === '/' || url === '/home';
    this.hideHeader = url === '/login' || url === '/register' || url === '/admin-login' || url === '/admin-dashboard' || url === '/admin-dashboard/orders' || url === '/admin-dashboard/add-restaurants-dishes' || url === '/admin-dashboard/delivery-agents' || url === '/admin-dashboard/customer-feedbacks' || url === '/admin-dashboard/add-menu';
  }
}
