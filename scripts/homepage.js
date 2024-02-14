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

// window.addEventListener("scroll", function () {
//   var header = document.querySelector(".brand-header");
//   // var announcementBarHeight =
//   //   document.querySelector(".announcement-bar").offsetHeight;
//   if (window.scrollY > 5) {
//     header.classList.add("fixed-header");
//   } else {
//     header.classList.remove("fixed-header");
//   }
// });

// document.querySelector(".about-us-text").innerHTML = `
// At ApexFootWear, we stride forward with a passion for crafting footwear that not only complements your style but also enhances your comfort and performance. With a rich legacy spanning generations, we pride ourselves on being a trusted companion in every step of your journey.

// For Men:
// Discover the epitome of style and functionality with our meticulously designed men's footwear collection. From rugged outdoor adventures to sophisticated urban settings, our shoes blend durability with timeless elegance, ensuring you step out in confidence, no matter the occasion.

// For Women:
// Elevate your fashion game with ApexFootWear's exquisite range of women's shoes. Whether you're conquering the boardroom or embracing the weekend getaway, our footwear seamlessly integrates fashion-forward designs with superior comfort, empowering you to make a statement with every step.

// For Children:
// At ApexFootWear, we understand the importance of nurturing young feet with the utmost care and support. Our children's footwear collection combines playful designs with uncompromising quality, providing the perfect balance of style and functionality for your little ones' active lifestyles.

// From the playground to the classroom, ApexFootWear accompanies you and your family on every adventure, ensuring that every step is a stride towards comfort, confidence, and style.
// `;
