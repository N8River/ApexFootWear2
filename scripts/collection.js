import { products } from "../data/products.js";
import {
  cart,
  renderCart,
  removeItemsFromCart,
  addItemsToCart,
  saveToStorage,
} from "../data/cart.js";
import { alertCart } from "./common/alert.js";

renderCollection(products);

function renderCollection(products) {
  let productsHTML = "";
  products.forEach((product) => {
    productsHTML += `
    <div class="product-container product-container__c">
      <div class="product-image-container product-image-container__c">
        <img
          src="${product.image}"
          class="product-image product-image__c"
        />
      </div>
      <div class="product-name product-name__c">
        ${product.name}
      </div>
      <div class="product-price product-price__c">
        <span class="price-original price-original__c">
          Rs.${product.priceCents}
        </span>
        <span class="price-discounted price-discounted__c">
          Rs.${(product.priceCents * 0.9).toFixed(0)}
        </span>
        <span class="discount discount__c">
          Save 10%
        </span>
      </div>
      <div class="size-options size-options__c">
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
    </div>
    `;
  });
  document.querySelector(".product-grid-all").innerHTML = productsHTML;
}

addToCartCollection();
function addToCartCollection() {
  document.querySelectorAll(".size-variants").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const productSize = button.dataset.productSize;

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
    });
  });

  saveToStorage();
}

function productTypeFilter(products, filterFor) {
  let filteredProducts = [];
  products.forEach((product) => {
    if (product.type == filterFor) {
      filteredProducts.push(product);
    }
  });

  return filteredProducts;
}

function productColorFilter(products, filterFor) {
  let filteredProducts = [];
  products.forEach((product) => {
    if (product.color == filterFor) {
      filteredProducts.push(product);
    }
  });

  return filteredProducts;
}

const filterSneakers = document.querySelector(".filter-sneakers");
const filterLoafers = document.querySelector(".filter-loafers");

filterLoafers.addEventListener("click", () => {
  // filterLoafers.classList.toggle("active-filter");
  // filterSneakers.classList.toggle("active-filter");
  renderCollection(productTypeFilter(products, "loafers"));
  addToCartCollection();
});
filterSneakers.addEventListener("click", () => {
  // filterLoafers.classList.toggle("active-filter");
  // filterSneakers.classList.toggle("active-filter");
  renderCollection(productTypeFilter(products, "sneakers"));
  addToCartCollection();
});

const filterWhite = document.querySelector(".filter-white");
const filterBlack = document.querySelector(".filter-black");
const filterGrey = document.querySelector(".filter-grey");
const filterBrown = document.querySelector(".filter-brown");

filterWhite.addEventListener("click", () => {
  renderCollection(productColorFilter(products, "white"));
  addToCartCollection();
});
filterBlack.addEventListener("click", () => {
  renderCollection(productColorFilter(products, "black"));
  addToCartCollection();
});
filterBrown.addEventListener("click", () => {
  renderCollection(productColorFilter(products, "brown"));
  addToCartCollection();
});
filterGrey.addEventListener("click", () => {
  renderCollection(productColorFilter(products, "grey"));
  addToCartCollection();
});

function productPriceFilter(products, ul, ll) {
  let filteredProducts = [];
  products.forEach((product) => {
    if (product.priceCents <= ul && product.priceCents > ll) {
      filteredProducts.push(product);
    }
  });

  return filteredProducts;
}

const under3000 = document.querySelector(".under-3000");
const over3000 = document.querySelector(".over-3000");

under3000.addEventListener("click", () => {
  renderCollection(productPriceFilter(products, 2999, 0));
  addToCartCollection();
});
over3000.addEventListener("click", () => {
  renderCollection(productPriceFilter(products, 9999, 3000));
  addToCartCollection();
});

const searchButton = document.querySelector(".search-input");
const productsObject = document.querySelectorAll(".product-container");
searchButton.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  productsObject.forEach((productObject) => {
    const productName = productObject
      .querySelector(".product-name")
      .innerHTML.toLowerCase();
    const isVisible = productName.includes(value);
    productObject.classList.toggle("hide-for-search", !isVisible);
  });
});
