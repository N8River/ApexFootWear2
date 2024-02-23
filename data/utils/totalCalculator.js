import { cart } from "../cart.js";
import { products } from "../products.js";

export function calculateSubTotal() {
  let productPrice = 0;

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingItem;
    products.forEach((product) => {
      if (productId === product.id) {
        matchingItem = product;
      }
    });
    productPrice += matchingItem.priceCents * cartItem.quantity;
  });

  return productPrice;
}
