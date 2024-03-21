export function alertCart() {
  document.querySelector(".cart-alert-wrap").classList.add("active");
  setTimeout(() => {
    document.querySelector(".cart-alert-wrap").classList.remove("active");
  }, 3500);
}

let lastScrollTop = 0;
const rewardsPopUp = document.querySelector(".mobile-user");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down

    this.setTimeout(() => {
      rewardsPopUp.style.display = "flex";
    }, 1500);
  } else {
    // Scrolling up

    this.setTimeout(() => {
      rewardsPopUp.style.display = "flex";
    }, 1500);
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
