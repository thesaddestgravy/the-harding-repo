document.querySelector("button").addEventListener("click", calculateTip);

function calculateTip() {
    var subtotal = document.querySelector("input").value;
    var tip = document.querySelectorAll("input")[1].value;
    alert("The tip percent is " + (tip / subtotal) * 100 + "%");
}