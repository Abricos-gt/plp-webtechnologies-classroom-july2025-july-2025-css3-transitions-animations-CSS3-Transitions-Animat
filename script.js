/* -------------------------
   Part 2: Functions & Scope
------------------------- */

// Global cart array
let cart = [];

// Function with parameters & return value
function addToCart(productName, price) {
  let item = { name: productName, price: price };
  cart.push(item);

  // Update summary with function reuse
  updateCartSummary();
  return cart.length; // return number of items in cart
}

// Function to update summary (DOM manipulation)
function updateCartSummary() {
  let output = document.getElementById("cart-output");

  if (cart.length === 0) {
    output.innerText = "Your cart is empty.";
  } else {
    output.innerText = `You have ${cart.length} item(s) in your cart.`;
  }
}

/* -------------------------
   Part 3: JS + CSS Integration
------------------------- */
function togglePopup() {
  let popup = document.getElementById("popup");
  let popupList = document.getElementById("popup-list");
  let popupTotal = document.getElementById("popup-total");

  popup.classList.toggle("active");

  // Build cart items dynamically
  popupList.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    popupList.appendChild(li);
    total += item.price;
  });

  popupTotal.innerText = total;
}
