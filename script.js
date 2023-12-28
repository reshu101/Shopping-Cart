// Sample product data. Replace this with your actual API call.
const productData = {
  vendor: "Marmeto",
  title: "Embrace Sideboard",
  price: 12999,
  compareAtPrice: 19999,
  colors: ["yellow", "green", "blue", "pink"],
  sizes: ["Small", "Medium", "Large", "extra-large", "XXL"],
  description:
    "The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.",
};

document.getElementById("product-vendor").innerText = ` ${productData.vendor}`;
document.getElementById("product-title").innerText = productData.title;

document.getElementById(
  "current-price"
).innerText = `disconted price $${productData.price}`;
document.getElementById(
  "compare-at-price"
).innerText = `price $${productData.compareAtPrice}`;

document.getElementById("description").innerText = productData.description;

function addToCart() {
  const productName = document.getElementById("product-title").innerText;
  const productColor = document.getElementById("color").value;
  const selectedSize = document.querySelector(
    'input[name="size"]:checked'
  ).value;

  const cartMessage = document.getElementById("cart-message");
  cartMessage.innerText = `${productName} with color ${productColor}, Size: ${selectedSize} added to the cart`;
  cartMessage.style.display = "block";

  setTimeout(() => {
    cartMessage.style.display = "none";
  }, 3000);
}
function updateSelectedColor() {
  const colorSelector = document.getElementById("color");
  const selectedColor = colorSelector.value;
  const colorContainer = document.getElementById("selected-color-container");

  colorContainer.style.backgroundColor = selectedColor;
}
function updateSelectedSize(selectedSize) {}

document.addEventListener("DOMContentLoaded", function () {
  const originalPriceElement = document.querySelector(".current-price");
  const discountedPriceElement = document.getElementById("compare-at-price");

  const originalPrice = 19999; // Replace with your actual original price
  const discountPercentage = 35; // Replace with your actual discount percentage

  // Calculate discounted price
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  // Update HTML content
  originalPriceElement.innerText = `  $${originalPrice}`;
  discountedPriceElement.innerText = `$${discountedPrice.toFixed(2)}`;
});
function updateQuantity(change) {
  const quantityInput = document.getElementById('quantity');
  let currentQuantity = parseInt(quantityInput.value) || 0;
  currentQuantity = Math.max(1, currentQuantity + change);
  quantityInput.value = currentQuantity;
}
