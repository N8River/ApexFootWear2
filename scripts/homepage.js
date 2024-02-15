import { products } from "../data/products.js";
const announcements = [
  "25% OFF ON ALL PRODUCTS | USE CODE: RN25",
  "BUY 1 PAIR OF SHOES AND GET 1 PAIR OF SOCKS FOR FREE | USE CODE: FG25",
];
let currentIndex = 0;
let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
  <div class="product-container">
    <div class="product-image-container">
      <img
        src="${product.image}"
        class="product-image"
      />
    </div>
    <div class="product-name">
      ${product.name}
    </div>
    <div class="product-price">
      <span class="price-original">      
        Rs.${product.priceCents}
      </span>
      <span class="price-discounted">
        Rs.${(product.priceCents * 0.9).toFixed(0)}
      </span>
      <span class="discount">
        Save 10%
      </span>
    </div>
    <div class="size-options">
      <div class="size-variants"> 41 </div>
      <div class="size-variants"> 42 </div>
      <div class="size-variants"> 43 </div>
      <div class="size-variants"> 44 </div>
      <div class="size-variants"> 45 </div>
    </div>
  </div>`;
});

document.querySelector(".product-grid").innerHTML = productsHTML;

setInterval(() => {
  document.querySelector(".announcement-bar").innerHTML =
    announcements[currentIndex];

  currentIndex = (currentIndex + 1) % announcements.length;
}, 5000);
