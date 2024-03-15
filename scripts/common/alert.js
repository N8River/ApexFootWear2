export function alertCart() {
  document.querySelector(".cart-alert-wrap").classList.add("active");
  setTimeout(() => {
    document.querySelector(".cart-alert-wrap").classList.remove("active");
  }, 3500);
}
