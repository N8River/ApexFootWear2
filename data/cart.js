import { products } from "./products.js";

export let cart = [
  {
    productID: "ddc09c63-d682-4b78-bc72-8617cbe42b30",
    quantity: 3,
  },
  {
    productID: "7daacfbf-6a97-468e-b65f-2e70b45116fb",
    quantity: 1,
  },
  {
    productID: "f80d9586-4823-42bb-9387-1606a2829470",
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
