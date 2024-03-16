const announcements = [
  "25% OFF ON ALL PRODUCTS | USE CODE: RN25",
  "BUY 1 PAIR OF SHOES AND GET 1 PAIR OF SOCKS FOR FREE | USE CODE: FG25",
  "♥ SIGN IN FOR EXCITING UPDATES AND OFFERS ♥",
];

const announcementText = document.querySelector(".announcement-text");

let currentIndex = 1;
setInterval(() => {
  announcementText.style.opacity = "0";

  setTimeout(() => {
    announcementText.textContent = announcements[currentIndex];
    currentIndex < 2 ? currentIndex++ : (currentIndex = 0);
    announcementText.style.opacity = "1";
  }, 250);
}, 7500);

document.querySelector(".brand-header").innerHTML = `
  <div class="brand-header-left">
    <div class="widget-left">
      <div class="widget-home">HOME</div>
      <div class="widget-trending">TRENDING</div>
      <div class="widget-newdrops">NEW DROPS</div>
      <div class="widget-all">
        <a href="collection.html"> ALL </a>
      </div>
    </div>
  </div>
  <div class="brand-header-middle">
    <a href="index.html" class="header-link">
      <img class="brand-logo" src="images/logos/apex-footwear-logo-3.png" />
    </a>
  </div>
  <div class="brand-header-right">
    <div class="tablet-widget-all">
      <a href="collection.html"> ALL </a>
    </div>

    <div class="user-btn">
      <a href="user.html">
        <img class="user-logo" src="images/logos/svg/user.svg" />
      </a>
    </div>

    <div class="cart-btn">
      <img class="cart-logo" src="images/logos/svg/cart.svg" />
    </div>
  </div>
`;
