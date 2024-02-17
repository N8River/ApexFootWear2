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
let cartFooterHTML = "";

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
            <div class="add-remove-cart-item">
              <div class="remove-cart-item">
                -
              </div>              
              <div class="cart-product-quantity">
              ${cartItem.quantity}
              </div>
              <div class="add-cart-item">
                +
              </div>
            </div>
            <div class="cart-product-price">Rs. ${matchingItem.priceCents}</div>
          </div>

        </div>
      </div>

      
    </div>
  `;
});

// cart.forEach((cartItem) => {
//   const productID = cartItem.productID;
//   let matchingItem;

//   products.forEach((product) => {
//     if (product.id === productID) {
//       matchingItem = product;
//     }
//   });

//   cartFooterHTML += `
//     SUBTOTAL
//   `;
// });

cartFooterHTML += `
    <div class="subtotal-container">
      <div class="subtotal-text">
        <div class="subtotal-heading">SUBTOTAL</div>
        <div class="subtotal-calculated">Rs. 1299</div>
      </div>
      <div class="subtotal-description">Shipping, taxes, and discount codes calculated at checkout.</div>
      <button class="checkout-btn">
        <div class="checkout-text">
         PROCEED TO CHECKOUT
        </div>
        <div class="checkout-description">
         UPI / COD / CREDIT CARD / DEBIT CART
        </div>   
      </button>
    </div>
  `;

document.querySelector(".cart-product-container").innerHTML = cartContainerHTML;
document.querySelector(".cart-footer").innerHTML = cartFooterHTML;

// Get cart button and cart container elements
const cartBtn = document.querySelector(".cart-btn");
const cartContainer = document.querySelector(".cart-container");
const body = document.querySelector("body");
const closeCartBtn = document.querySelector(".close-cart-btn");

closeCartBtn.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
});

// Add click event listener to cart button
cartBtn.addEventListener("click", () => {
  // Toggle 'active' class to show/hide cart container
  cartContainer.classList.toggle("active");

  // Toggle 'blur' class to blur/de-blur the body
  // body.classList.toggle("blur");
});
