import { cart, getCartQuantity } from "./data/cart.js";
import { products } from "./data/products.js";

let tempItem;

export function totalPrice() {
  let sum = 0;

  cart.forEach((cartItem) => {
    const productID = cartItem.productId;

    products.forEach((productItem) => {
      if (productID === productItem.id) {
        tempItem = productItem;
      }
    });
    sum += tempItem.priceCents * cartItem.quantity;
  });

  return sum;
}

export function shippingAndHandling() {
  if (totalPrice() < 2500 && getCartQuantity() > 0) {
    return 499;
  } else {
    return 0;
  }
}

export function tax() {
  return (totalPrice() + shippingAndHandling()) * 0.1;
}

export function orderTotal() {
  return totalPrice() + shippingAndHandling() + tax();
}
