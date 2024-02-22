import { products } from "../data/products.js";

const forDropdownBtn = document.getElementById("forDropdownBtn");
const forDropdown = document.getElementById("forDropdown");
drawerButtonHandler(forDropdownBtn, forDropdown);

const styleDropdownBtn = document.getElementById("styleDropdownBtn");
const styleDropdown = document.getElementById("styleDropdown");
drawerButtonHandler(styleDropdownBtn, styleDropdown);

const priceDropdownBtn = document.getElementById("priceDropdownBtn");
const priceDropdown = document.getElementById("priceDropdown");
drawerButtonHandler(priceDropdownBtn, priceDropdown);

const colorDropdownBtn = document.getElementById("colorDropdownBtn");
const colorDropdown = document.getElementById("colorDropdown");
drawerButtonHandler(colorDropdownBtn, colorDropdown);

function drawerButtonHandler(button, drawer, arrowLink) {
  button.addEventListener("click", () => {
    drawer.classList.toggle("open");

    // const menArrowContainer = document.querySelector(".arrow-down-men");
    // menArrowContainer.classList.toggle("open");

    if (drawer.classList.contains("open")) {
      drawer.style.display = "block";
      setTimeout(() => {
        drawer.style.opacity = "1";
      }, 10);
    } else {
      drawer.style.opacity = "0";
      setTimeout(() => {
        drawer.style.display = "none";
      }, 100);
    }
  });
}

renderProductsCollection(products);
function renderProductsCollection(products) {
  let productsHTML = "";

  products.forEach((product) => {
    productsHTML += `
    <div class="product-container collection-product-container">
      <div class="product-image-container">
        <img
          src="../${product.image}"
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

  document.querySelector(".products-display").innerHTML = productsHTML;
}
