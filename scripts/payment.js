import { calculateSubTotal } from "../data/utils/totalCalculator.js";

const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});

const checkoutBtn = document.querySelector(".checkout-btn");
const paymentContainer = document.querySelector(".payment-container");
const closeCheckoutBtn = document.querySelector(".close-checkout-btn");

checkoutBtn.addEventListener("click", () => {
  paymentContainer.classList.toggle("hide");

  setTimeout(() => {
    paymentContainer.style.opacity = 1;
  }, 0);
});

closeCheckoutBtn.addEventListener("click", () => {
  setTimeout(() => {
    paymentContainer.style.opacity = 0;
    setTimeout(() => {
      paymentContainer.classList.toggle("hide");
    }, 250);
  }, 0);
});

document.querySelector(".subtotal-rupees").innerHTML = calculateSubTotal();
document.querySelector(".grand-total-rupees").innerHTML = calculateSubTotal();
