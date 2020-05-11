const form = document.querySelector(".form-group");
const subtotal = document.querySelector("#subtotal");

form.addEventListener("submit", e => {
    e.preventDefault();
    subtotal.value = subtotal.value.toUpperCase();
});