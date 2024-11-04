import {
  cart,
  getCartQuantity,
  getShipInfo,
  removeFromCart,
} from "./data/cart.js";
import { products } from "./data/products.js";
import { formatCurrency, getProductItem, getCartItem } from "./utils/utils.js";
import * as costs from "./paymentSummary.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

let checkoutHTML = "";
let paymentSummaryHTML = "";
let matchingItem;
//const deliveryDay = dayjs();
//console.log(deliveryDay.add(7, "days"));

function renderCheckout() {
  updatePayment();
  //deliveryDay();

  function deliveryDay() {
    cart.forEach((item) => {
      const productID = item.productId;

      matchingItem = getProductItem(productID);
      const deliveryID = item.delivertOption;
      console.log(item);

      if (item.delivertOption === 1) {
        const dDay = today.add(7, "days").format("dddd, MMMM D");
        console.log(dDay);
      }
    });

    //console.log(today.format("dddd, MMMM YY"));
  }

  cart.forEach((item) => {
    const productID = item.productId;

    /*products.forEach((element) => {
      if (productID === element.id) {
        matchingItem = element;
      }
    });*/

    matchingItem = getProductItem(productID);

    checkoutHTML += `<div class="cart-item-container js-container-id-${
      matchingItem.id
    }">
            <div class="delivery-date">Delivery date: Tuesday, June 21</div>

            <div class="cart-item-details-grid">
              <img
                class="product-image"
                src="${matchingItem.image}"
              />

              <div class="cart-item-details">
                <div class="product-name">
                ${matchingItem.name}
                </div>
                <div class="product-price">$${formatCurrency(
                  matchingItem.priceCents
                )}</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${
                    item.quantity
                  }</span> </span>
                  <span class="update-quantity-link link-primary js-update">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-Id = '${
                    matchingItem.id
                  }'>
                    Delete
                  </span>
                </div>
              </div>

              ${shippingHTML(matchingItem)}

            </div>
          </div>`;
  });

  document.querySelector(".js-checkout-HTML").innerHTML = checkoutHTML;

  document.querySelectorAll(".js-delete-link").forEach((element) => {
    element.addEventListener("click", () => {
      const itemId = element.dataset.productId;
      const elementContainer = document.querySelector(
        ".js-container-id-" + itemId
      );

      removeFromCart(itemId);
      updatePayment();
      elementContainer.remove();
    });
  });

  document.querySelectorAll(".js-update").forEach((element) => {
    element.addEventListener("click", () => {
      const itemId = element.dataset.productId;
    });
  });

  function updatePayment() {
    paymentSummaryHTML = `<div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (${getCartQuantity()}):</div>
            <div class="payment-summary-money">$${formatCurrency(
              costs.totalPrice()
            )}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(
              costs.shippingAndHandling()
            )}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(
              costs.totalPrice() + costs.shippingAndHandling()
            )}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(
              costs.tax()
            )}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(
              costs.orderTotal()
            )}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;

    document.querySelector(".js-payment-summary").innerHTML =
      paymentSummaryHTML;
    document.querySelector(".js-checkout-quantity").innerText =
      getCartQuantity();
  }

  document.querySelectorAll(".js-shipping-input").forEach((option) => {
    option.addEventListener("click", () => {
      const dDay = "";
      const pID = option.dataset.productId;
      let optionId = Number(option.dataset.shippingId);
      console.log(option.dataset.shippingId);

      let cartItem = getCartItem(pID);
      console.log(getShipInfo("e43638ce-6aa0-4b85-b27f-e1d07eb678c6"));

      if (optionId === 1) {
        //cartItem.delivertOption.id = 1;
      } else if (optionId === 2) {
        //cartItem.delivertOption.id = 2;
      } else {
        //cartItem.delivertOption.id = 3;
      }
      console.log(cartItem);
    });
  });

  function shippingHTML(matchingItem) {
    let shippingHTML = "";
    const deliveryDay = dayjs();

    const option1 = deliveryDay.add(7, "days").format("dddd, MMMM D");
    const option2 = deliveryDay.add(5, "days").format("dddd, MMMM D");
    const option3 = deliveryDay.add(3, "days").format("dddd, MMMM D");

    shippingHTML = `<div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    checked
                    class="delivery-option-input js-shipping-input"
                    name="delivery-option-${matchingItem.id}"
                    data-shipping-iD = "1"
                    data-product-id = "${matchingItem.id}"
                  />
                  <div>
                    <div class="delivery-option-date">${option1}</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input js-shipping-input"
                    name="delivery-option-${matchingItem.id}"
                    data-shipping-iD = "2"
                    data-product-id = "${matchingItem.id}"
                  />
                  <div>
                    <div class="delivery-option-date">${option2}</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input js-shipping-input"
                    name="delivery-option-${matchingItem.id}"
                    data-shipping-iD = "3"
                    data-product-id = "${matchingItem.id}"
                  />
                  <div>
                    <div class="delivery-option-date">${option3}</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>`;
    return shippingHTML;
  }
}

renderCheckout();
