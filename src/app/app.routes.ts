import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { WishlistedRestaurantsComponent } from './wishlisted-restaurants/wishlisted-restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { CustomerFeedbackComponent } from './admin-dashboard/customer-feedbacks/customer-feedbacks.component';
import { AddMenuComponent } from './admin-dashboard/add-menu/add-menu.component';
import { AddRestaurantComponent } from './admin-dashboard/add-restaurant-dish/add-restaurant-dish.component';
import { AssignDeliveryAgentsComponent } from './admin-dashboard/assign-delivery-agent/assign-delivery-agent.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OrdersComponent } from './admin-dashboard/orders/orders.component';


export const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'wishlist',
        component: WishlistedRestaurantsComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'orders', component: OrdersComponent },
      { path: 'add-restaurants-dishes', component: AddRestaurantComponent },
      { path: 'delivery-agents', component: AssignDeliveryAgentsComponent },
      { path: 'customer-feedbacks', component: CustomerFeedbackComponent},
      { path: 'add-menu', component: AddMenuComponent}
    ],
  }
];

