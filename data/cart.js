import { products } from "./products.js";
import { calculateSubTotal } from "./utils/totalCalculator.js";

export let cart = [
  {
    productId: "ddc09c63-d682-4b78-bc72-8617cbe42b30",
    productSize: "42",
    quantity: 3,
  },
  {
    productId: "7daacfbf-6a97-468e-b65f-2e70b45116fb",
    productSize: "43",
    quantity: 1,
  },
  {
    productId: "f80d9586-4823-42bb-9387-1606a2829470",
    productSize: "45",
    quantity: 2,
  },
];

renderCart(products);

export function renderCart(products) {
  let cartContainerHTML = "";
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct = products.find((product) => product.id === productId);

    if (matchingProduct) {
      cartContainerHTML += `
      <div class="cart-product-container-child cart-product-container-child-${matchingProduct.id}">
        <div class="cart-product-img-container">
          <img class="cart-product-img" src="${matchingProduct.image}"/>
        </div>
        <div class="cart-product-info-container">
          <div class="cart-product-info">
            <div class="cart-product-info-title">
              <div class="cart-product-name">${matchingProduct.name}</div>
              <div class="cart-product-size">Size: ${cartItem.productSize}</div>
            </div>
    
            <div class="cart-product-info-sub">
              <div class="add-remove-cart-item">
                <div class="remove-cart-item remove-cart-item-btn" data-product-id="${matchingProduct.id}">
                  -
                </div>              
                <div class="cart-product-quantity">
                ${cartItem.quantity}
                </div>
                <div class="add-cart-item add-cart-item-btn">
                  +
                </div>
              </div>
              <div class="cart-product-price">Rs. ${matchingProduct.priceCents}</div>
            </div>
    
          </div>
        </div>   
      </div>
    `;
    }
  });
  document.querySelector(".cart-product-container").innerHTML =
    cartContainerHTML;
  document.querySelector(".order-summary").innerHTML = cartContainerHTML;

  let cartFooterHTML = "";
  cartFooterHTML += `
        <div class="subtotal-container">
          <div class="subtotal-text">
            <div class="subtotal-heading">SUBTOTAL</div>
            <div class="subtotal-calculated">Rs. ${calculateSubTotal()}</div>
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

  document.querySelector(".cart-footer").innerHTML = cartFooterHTML;
}

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

// document.querySelectorAll(".remove-cart-item-btn").forEach((button) => {
//   button.addEventListener("click", () => {
//     const productId = button.dataset.productId;

//     decreaseQuantity(productId);
//     renderCart(products);  Update the cart UI after modifying the quantity
//   });
// });

// export function decreaseQuantity(productId) {
//   const cartItem = cart.find((item) => item.productId === productId);
//   if (cartItem) {
//     if (cartItem.quantity > 1) {
//       cartItem.quantity--;  Decrease the quantity by 1
//     } else {
//        If quantity is already 1, remove the item from the cart
//       removeFromCart(productId);
//     }
//   }
//   console.log(cart);
// }

// export function removeFromCart(productId) {
//   cart = cart.filter((cartItem) => cartItem.productId !== productId);
// }

const removeItemsBtnObject = document.querySelectorAll(".remove-cart-item-btn");
removeItemsFromCart(removeItemsBtnObject);

function removeItemsFromCart() {
  removeItemsBtnObject.forEach((btn) => {
    const productId = btn.dataset.productId;

    let matchingItem;

    cart.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingItem = cartItem;
      }
    });

    btn.addEventListener("click", () => {
      if (matchingItem.quantity > 1) {
        matchingItem.quantity--;
        console.log(cart);
        renderCart(products);
        const removeItemsBtnObject = document.querySelectorAll(
          ".remove-cart-item-btn"
        );
        removeItemsFromCart(removeItemsBtnObject);
      } else {
        removeFromCart(productId);
        console.log(cart);
        renderCart(products);
        const removeItemsBtnObject = document.querySelectorAll(
          ".remove-cart-item-btn"
        );
        removeItemsFromCart(removeItemsBtnObject);
      }
    });
  });
}

export function removeFromCart(productId) {
  cart = cart.filter((cartItem) => cartItem.productId !== productId);
}

// export function decreaseQuantity(productId) {
//   const cartItem = cart.find((item) => item.productId === productId);
//   if (cartItem) {
//     if (cartItem.quantity > 1) {
//       cartItem.quantity--;
//     } else {
//       removeFromCart(productId);
//     }
//   }
//   console.log(cart);
// }
