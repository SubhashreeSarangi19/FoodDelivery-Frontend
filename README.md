# Swiggy

SwiggyClone is a food delivery web application built using Angular. The application allows users to view restaurants, browse menus, add items to a cart, and proceed with checkout. This project simulates key functionalities of a real-world food delivery service.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Components](#components)
- [Services](#services)
- [Wishlist Feature](#wishlist-feature)
- [Cart and Checkout](#cart-and-checkout)
- [Development Server](#development-server)
- [Contributing](#contributing)

---

## Features

- **Restaurant Browsing:** Display list of restaurants available for delivery.
- **Menu Display:** View menu items for each restaurant.
- **Cart Management:** Add items to the cart, adjust quantities, view total cost.
- **Wishlist:** Add restaurants to the wishlist for easy access.
- **Real-Time Price Calculation:** Cart totals are automatically updated as items are added or removed.
- **Checkout:** Clear the cart upon completion.

---
## Components
- **app-root** - The main root component that loads the application.
- **RestaurantComponent** - Displays a list of restaurants with a grid layout and allows toggling items in the wishlist.
- **MenuComponent** - Shows menu items for a selected restaurant.
- **CartComponent** -Displays items added to the cart, quantity controls, and the total cost. Contains a checkout button to submit the order to the API.

## Services

**CartServiceService** -
Manages cart state, including items, quantities, and total count. It also handles checkout by sending data to the mock API and clearing the cart after a successful order.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Usage

- **Restaurant Browsing** -
Restaurants are displayed in a grid layout.
Users can click on a restaurant to view its menu.
The toggleWishlist feature allows adding/removing restaurants from the wishlist.
- **Adding Items to Cart** -
Users can add menu items to the cart with a single click.
Quantities can be adjusted in the cart view.
Real-time price calculation reflects total cost instantly as items are updated.
- **Checkout** -
Clicking the Checkout button submits the order to a mock API endpoint.
Cart is cleared after successful submission.

## Wishlist Feature
Restaurants can be added to a wishlist by clicking the wishlist icon. The toggleWishlist method manages the addition and removal of items from the wishlist.
**Wishlist Logic (In RestaurantComponent)** 
The toggleWishlist function adds a restaurant to the wishlist or removes it if already added. This is controlled by toggling the isFavorite boolean.

## Cart and Checkout
**Cart Logic (In CartServiceService)** - 
The CartServiceService is responsible for:
- Adding items to the cart.
- Updating quantities of items.
- Calculating and broadcasting cart count and total.
**Real-Time Price Update** -
In CartComponent, the cartItems$ observable tracks items in the cart, and the total is recalculated whenever the cart contents are updated.

**Checkout**
The checkout function in CartComponent sends the order details (name, quantity, and price) to Mock API and clears the cart upon completion.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Contributing
If you'd like to contribute to this project:

- Fork the repository.
- Create a new feature branch (git checkout -b feature-name).
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature-name).
- Create a pull request.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
