import { products } from "../data/products.js";

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
