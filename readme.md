# ShopEase

![ShopEase Logo](images/amazon-logo.png)

## 📋 Overview

ShopEase is a modern, fully responsive e-commerce web application that provides users with a seamless shopping experience. This project showcases advanced web development skills, including front-end design, state management, and responsive UI implementation to create an intuitive online shopping platform.

## ✨ Features

### User Interface
- **Responsive Design:** Optimized for all device sizes from mobile to desktop
- **Dynamic Product Grid:** Automatically adjusts based on screen size for optimal viewing
- **Interactive Header:** Fixed navigation with search functionality and cart integration

### Shopping Experience
- **Product Browsing:** Browse through a comprehensive catalog of products with detailed information
- **Search & Filter:** Find products easily using the search functionality
- **Shopping Cart:** Add/remove items with real-time cart updates
- **Quantity Selection:** Choose product quantities before adding to cart

### Checkout System
- **Order Review:** Clear summary of selected items before purchase
- **Price Calculation:** Automatic calculation of subtotal, shipping, tax, and order total
- **Shipping Options:** Multiple shipping options with different delivery timeframes
- **Order Placement:** Streamlined checkout process

### Order Management
- **Order Tracking:** Visualize delivery progress with an intuitive tracking interface
- **Order History:** View past orders with complete details
- **Reordering:** Quick "Buy Again" option for previously purchased items

## 🛠️ Technology Stack

- **Front-End:**
  - HTML5
  - CSS3 (with responsive design principles)
  - JavaScript (ES6+)
  
- **State Management:**
  - LocalStorage for persistent cart data
  
- **Data Storage:**
  - JSON data structures

- **External Libraries:**
  - Day.js for date handling

- **Design Patterns:**
  - Module pattern for code organization
  - Event-driven architecture for user interactions

## 🗂️ Project Structure

```
ShopEase/
├── backend/
│   └── products.json        # Product catalog data
├── data/
│   ├── cart.js              # Cart management functionality
│   ├── deliveryOption.js    # Shipping options configuration
│   └── products.js          # Product data management
├── images/
│   ├── icons/               # UI icons
│   └── products/            # Product images
├── javascript/
│   └── index.js             # Main JavaScript for product listing
├── styles/
│   ├── pages/               # Page-specific styles
│   │   ├── amazon.css       # Main product listing styles
│   │   ├── checkout/        # Checkout page styles
│   │   ├── orders.css       # Order history page styles
│   │   └── tracking.css     # Order tracking page styles
│   └── shared/              # Common styles
│       ├── amazon-header.css # Header component styles
│       └── general.css      # Global styles and utilities
├── utils/
│   └── utils.js             # Utility functions
├── amazon.html              # Main product listing page
├── checkout.html            # Checkout page
├── checkout.js              # Checkout functionality
├── orders.html              # Order history page
├── paymentSummary.js        # Payment calculation logic
├── readme.md                # Project documentation
└── tracking.html            # Order tracking page
```

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ShopEase.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd ShopEase
   ```

3. **Open with a live server:**
   - Use a live server extension in your IDE (like Live Server for VS Code)
   - Or use Python's built-in HTTP server:
     ```bash
     python -m http.server
     ```

4. **Access the application:**
   - Open your browser and navigate to `http://localhost:8000/amazon.html`

## 🖥️ Usage

### Product Listing
- Browse through products on the main page
- Use the search bar to find specific items
- Select quantity and click "Add to Cart"

### Shopping Cart
- View items in cart by clicking the cart icon
- See real-time updates of cart quantity
- Proceed to checkout when ready

### Checkout
- Review items and select shipping options
- View breakdown of costs including shipping and tax
- Place order with the "Place your order" button

### Order Management
- Track packages with the tracking interface
- View order history
- Easily reorder items with "Buy it again" button

## 📊 Data Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Product Data │────▶│  User Cart  │────▶│   Payment   │
└─────────────┘     └─────────────┘     └─────────────┘
       │                   │                   │
       ▼                   ▼                   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Product   │     │  Checkout   │     │    Order    │
│   Display   │────▶│   Process   │────▶│   Summary   │
└─────────────┘     └─────────────┘     └─────────────┘
                                              │
                                              ▼
                                        ┌─────────────┐
                                        │   Order     │
                                        │  Tracking   │
                                        └─────────────┘
```

## 📱 Responsive Design

ShopEase implements a fully responsive design using CSS Grid and media queries:

- **Desktop:** 8-column product grid with full features
- **Tablet:** 4-6 column grid with adapted layout
- **Mobile:** 1-2 column grid with simplified navigation

Media breakpoints are implemented at:
- 2000px, 1600px, 1300px, 1000px, 800px, 575px, and 450px

## 🔄 State Management

The application uses browser localStorage to maintain cart state between sessions:

```javascript
// Save cart to localStorage
function saveToStorage() {
  localStorage.setItem("myCart", JSON.stringify(cart));
}

// Load cart from localStorage
export let cart = JSON.parse(localStorage.getItem("myCart"));
if (!cart) {
  cart = [];
}
```

## 🧪 Key JavaScript Modules

### Cart Management (data/cart.js)
Handles all cart operations including adding items, removing items, and calculating quantities.

### Payment Calculation (paymentSummary.js)
Responsible for all price calculations including:
- Item subtotals
- Shipping costs (free for orders over $25)
- Tax calculation (10%)
- Order total

### Product Display (javascript/index.js)
Renders the product grid and handles user interactions with products.

### Checkout Process (checkout.js)
Manages the checkout experience including order review and shipping selection.

## 🛣️ Future Enhancements

- **User Authentication:** Implement account creation and login functionality
- **Payment Processing:** Add support for credit card and digital payment methods
- **Wishlist Feature:** Allow users to save items for future purchase
- **Reviews System:** Enable customers to leave product reviews
- **Recommendation Engine:** Suggest products based on browsing history
- **Admin Dashboard:** Create backend interface for inventory management

## 👥 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

Please ensure your code follows the existing style conventions and includes appropriate comments.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or feedback about ShopEase, please contact:
- Email: [aimable.mugwaneza@gmail.com](mailto:aimable.mugwaneza@gmail.com)
- GitHub: [github.com/yourusername](https://github.com/yourusername)

---

© 2025 ShopEase. All rights reserved.
