const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.textContent = "☰";
}));

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");
    const category = button.dataset.filter;
    document.querySelectorAll(".product").forEach(product => {
      product.hidden = category !== "all" && product.dataset.category !== category;
    });
  });
});

let cart = [];
const cartSummary = document.getElementById("cartSummary");

document.querySelectorAll(".add-button").forEach(button => {
  button.addEventListener("click", () => {
    cart.push({ name: button.dataset.name, price: Number(button.dataset.price) });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartSummary.innerHTML = `${cart.length} item(s) in your demo cart · Total: $${total.toFixed(2)} <span>♡</span>`;
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Replace with your store's official email address.
const storeEmail = "hello@example.com";
document.getElementById("contactLink").href = `mailto:${storeEmail}`;
