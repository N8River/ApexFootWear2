import { calculateSubTotal } from "../data/utils/totalCalculator.js";

const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});

const checkoutBtn = document.querySelector(".checkout-btn");
const paymentContainer = document.querySelector(".payment-container");
const closeCheckoutBtn = document.querySelector(".close-checkout-btn");

checkoutBtn.addEventListener("click", () => {
  if (paymentContainer.classList.contains("active")) {
    paymentContainer.classList.remove("active");
    paymentContainer.classList.add("hide");
  } else {
    paymentContainer.classList.add("active");
    paymentContainer.classList.remove("hide");
  }
});

closeCheckoutBtn.addEventListener("click", () => {
  paymentContainer.classList.remove("active");
  paymentContainer.classList.add("hide");
});

document.querySelector(".subtotal-rupees").innerHTML = calculateSubTotal();
document.querySelector(".grand-total-rupees").innerHTML = calculateSubTotal();
