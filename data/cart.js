import { products } from "./products.js";

export let cart = [
  {
    productID: "62f8477b-c6d3-48e1-b862-6a84755a3fb4",
    quantity: 3,
  },
  {
    productID: "14fc5f13-9141-4f95-84e7-d68bc15c8c35",
    quantity: 1,
  },
  {
    productID: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    quantity: 2,
  },
];

let cartContainerHTML = "";

cart.forEach((cartItem) => {
  const productID = cartItem.productID;
  let matchingItem;

  products.forEach((product) => {
    if (product.id === productID) {
      matchingItem = product;
    }
  });

  cartContainerHTML += `
    <div class="cart-product-container-child">
      <div class="cart-product-img-container">
        <img class="cart-product-img" src="${matchingItem.image}"/>
      </div>
      <div class="cart-product-info-container">
        <div class="cart-product-info">
          <div class="cart-product-info-title">
            <div class="cart-product-name">${matchingItem.name}</div>
            <div class="cart-product-size">Size: 41</div>
          </div>

          <div class="cart-product-info-sub">
            <div class="cart-product-quantity">${cartItem.quantity}</div>
            <div class="cart-product-price">Rs.${matchingItem.priceCents}</div>
          </div>

        </div>
      </div>

      
    </div>
  `;
});

document.querySelector(".cart-product-container").innerHTML = cartContainerHTML;
