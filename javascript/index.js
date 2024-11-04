import { cart, getCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { addToCart } from "../data/cart.js";
import { formatCurrency } from "../utils/utils.js";

let productHTML = "";

const productsElement = document.querySelector(".js-productHTML");
const cartQuantityElement = document.querySelector(".js-cart-quantity");

updateCart();
products.forEach((product) => {
  productHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
          $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-addToCart" data-product-Id = '${
            product.id
          }'>
            Add to Cart
          </button>
        </div>`;
});

productsElement.innerHTML = productHTML;

const addToCartBtns = document.querySelectorAll(".js-addToCart");

addToCartBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCart();
  });
});

function updateCart() {
  let quantity = 0;

  cart.forEach((cartItem) => {
    quantity += cartItem.quantity;
  });
  cartQuantityElement.innerHTML = quantity;
}
