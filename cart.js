let cart = [];

function addToCart(id, title, price) {
  cart.push({ id, title, price });
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

/* Rest operator example */
function calculateTotal(...items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}