const form = document.querySelector(".form-group");
const subtotal = document.querySelector("#subtotal");
const tip = document.querySelector("#tip");
const ul = document.querySelector("ul");

form.addEventListener("submit", e => {
    e.preventDefault();
    subtotal.value = subtotal.value.toUpperCase();
    console.log(tip.value);
    const li = document.createElement("li");
    li.textContent = tip.value;
    ul.prepend(li);
});

