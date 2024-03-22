import { products } from "../data/products.js";
import { cart, saveToStorage } from "../data/cart.js";
import {
  renderCart,
  removeItemsFromCart,
  addItemsToCart,
} from "../data/cart.js";
import { alertCart } from "./common/alert.js";

const tab = document.querySelector(".tab");

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
      <div class="size-variants" data-product-id="${
        product.id
      }" data-product-size="41"> 41 </div>
      <div class="size-variants" data-product-id="${
        product.id
      }" data-product-size="42"> 42 </div>
      <div class="size-variants" data-product-id="${
        product.id
      }" data-product-size="43"> 43 </div>
      <div class="size-variants" data-product-id="${
        product.id
      }" data-product-size="44"> 44 </div>
      <div class="size-variants" data-product-id="${
        product.id
      }" data-product-size="45"> 45 </div>    
    </div>
  </div>`;
  });

  document.querySelector(`${link}`).innerHTML = productsHTML;
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

    const productGrid = document.querySelector(".product-grid");
    productGrid.classList.add("hide-opacity");

    setTimeout(() => {
      productGrid.classList.remove("hide-opacity");
    }, 50);
  });
});

addToCart();
function addToCart() {
  document.querySelector(".product-grid").addEventListener("click", (event) => {
    if (event.target.classList.contains("size-variants")) {
      const productId = event.target.dataset.productId;
      const productSize = event.target.dataset.productSize;

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId && productSize === item.productSize) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          productSize: productSize,
          quantity: 1,
        });
      }

      renderCart(products);
      removeItemsFromCart();
      addItemsToCart();
      alertCart();
    }
  });

  saveToStorage();
}

const wigdetTrending = document.querySelector(".widget-trending");
const newdropsTrending = document.querySelector(".widget-newdrops");

wigdetTrending.addEventListener("click", () => {
  const targetY1 = document.querySelector(".new-releases-btn").offsetTop;

  const trendingBtn = document.querySelector(".trending-btn");
  if (trendingBtn.classList.contains(".selected-btn")) {
  } else {
    trendingBtn.click();
  }

  window.scrollTo({
    top: targetY1 - 30,
    behavior: "smooth",
  });
});

newdropsTrending.addEventListener("click", () => {
  const targetY2 = document.querySelector(".trending-btn").offsetTop;
  window.scrollTo({
    top: targetY2 - 30,
    behavior: "smooth",
  });
});

// window.addEventListener("load", () => {
//   const heroText = document.querySelector(".hero-text");
//   heroText.classList.add("show");
// });
