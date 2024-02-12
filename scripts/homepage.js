import { products } from "../data/products.js";
const announcements = [
  "25% OFF ON ALL PRODUCTS | USE CODE: RN25",
  "BUY 1 PAIR OF SHOES AND GET 1 PAIR OF SOCKS FOR FREE | USE CODE: FG25",
];
let currentIndex = 0;
let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
  <div class="product-container block rounded-lg p-4 shadow-sm shadow-indigo-100">
    <div class="product-image-container">
      <img
        alt=""
        src="${product.image}"
        class="product-image h-56 w-full rounded-md object-cover"
      />
    </div>
    <div class="mt-2">
      <dl>
        <div>
          <dt class="sr-only">Price</dt>

          <dd class="text-sm text-gray-500">$${(
            product.priceCents / 100
          ).toFixed(2)}</dd>
        </div>

        <div>
          <dt class="sr-only">Product Name</dt>

          <dd class="font-medium">${product.name}</dd>
        </div>
      </dl>
    </div>
  </div>`;
});

document.querySelector(".product-grid").innerHTML = productsHTML;

setInterval(() => {
  document.querySelector(".announcement-bar").innerHTML =
    announcements[currentIndex];

  currentIndex = (currentIndex + 1) % announcements.length;
}, 5000);
