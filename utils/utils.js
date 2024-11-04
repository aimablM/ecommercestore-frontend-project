import { products } from "../data/products.js";
import { cart } from "../data/cart.js";
export function formatCurrency(priceInCents) {
  return (priceInCents / 100).toFixed(2);
}

export function getProductItem(productID) {
  let matchingItem;

  products.forEach((element) => {
    if (productID === element.id) {
      matchingItem = element;
    }
  });
  return matchingItem;
}

export function getCartItem(productID) {
  let matchingItem;

  cart.forEach((element) => {
    if (productID === element.productId) {
      matchingItem = element;
    }
  });
  return matchingItem;
}
