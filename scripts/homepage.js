import { products } from "../data/products.js";
const announcements = [
  "25% OFF ON ALL PRODUCTS | USE CODE: RN25",
  "BUY 1 PAIR OF SHOES AND GET 1 PAIR OF SOCKS FOR FREE | USE CODE: FG25",
];

let currentIndex = 0;
setInterval(() => {
  document.querySelector(".announcement-bar").innerHTML =
    announcements[currentIndex];

  currentIndex = (currentIndex + 1) % announcements.length;
}, 5000);

renderProducts(categorizeProductsTags(products).newRelease, ".product-grid");

function renderProducts(products, link) {
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

  document.querySelector(`link`).innerHTML = productsHTML;
}

function categorizeProductsTags(products) {
  let newReleaseProducts = [];
  let trendingProducts = [];
  products.forEach((product) => {
    if (product.tag === "new-release") {
      newReleaseProducts.push(product);
    } else if (product.tag === "trending") {
      trendingProducts.push(product);
    }
  });

  return {
    newRelease: newReleaseProducts,
    trending: trendingProducts,
  };
}

function renderProductsTab() {}

document.querySelectorAll(".trending-btn, .new-releases-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    btn.classList.toggle("selected-btn");

    document
      .querySelectorAll(".trending-btn, .new-releases-btn")
      .forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove("selected-btn");
        }
      });

    const categorizedProducts = categorizeProductsTags(products);

    if (btn.classList.contains("new-releases-btn")) {
      renderProducts(categorizedProducts.newRelease, ".product-grid");
    } else if (btn.classList.contains("trending-btn")) {
      renderProducts(categorizedProducts.trending, ".product-grid");
    }
  });
});
