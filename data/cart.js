import { deliveryOption } from "./deliveryOption.js";

export let cart = JSON.parse(localStorage.getItem("myCart"));
/*Cart objects are defined as follows:
    {
      productId: "itemId",
      quantity: 1,
    }
*/

if (!cart) {
  cart = [];
}

let cartQuantity;

export function addToCart(itemId) {
  let matchingItem;

  cart.forEach((item) => {
    if (itemId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      productId: itemId,
      quantity: 1,
      deliveryOption: { id: 1 },
    });
  }
  saveToStorage();
}

export function getCartQuantity() {
  let quantity = 0;
  cart.forEach((cartItem) => {
    quantity += cartItem.quantity;
  });
  return quantity;
}

export function getShipInfo(id) {
  //let product;
  cart.forEach((element) => {
    if (element.itemId === id) {
      return element.deliveryOption;
    }
  });
}
export function removeFromCart(itemId) {
  let tempCart = [];

  cart.forEach((item) => {
    if (item.productId != itemId) {
      tempCart.push(item);
    }
  });

  cart = tempCart;
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("myCart", JSON.stringify(cart));
}
