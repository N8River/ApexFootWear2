export function alertCart() {
  document.querySelector(".cart-alert-wrap").classList.add("active");
  setTimeout(() => {
    document.querySelector(".cart-alert-wrap").classList.remove("active");
  }, 3500);
}

// let lastScrollTop = 0;
// const rewardsPopUp = document.querySelector(".mobile-user");

// window.addEventListener("scroll", function () {
//   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//   if (window.innerWidth <= 475) {}
//   if (currentScroll > lastScrollTop) {
//     this.setTimeout(() => {
//       rewardsPopUp.style.display = "flex";
//     }, 1500);
//   } else {
//     this.setTimeout(() => {
//       rewardsPopUp.style.display = "flex";
//     }, 1500);
//   }

//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// });
