const form = document.querySelector(".form-group");
const subtotal = document.querySelector("#subtotal");
const tip = document.querySelector("#tip");
const ul = document.querySelector("ul");

var numDeliveries = 0;


form.addEventListener("submit", e => {
    e.preventDefault();
    numDeliveries++;


    var today = new Date();
    var todayHours = today.getHours();
    var amorpm;
    if (todayHours - 12 > 0) {
        todayHours %= 12;
        amorpm = "pm";
    }
    else {
        amorpm = "am";
    }
    var time = todayHours +  ":" + today.getMinutes() + amorpm;


    subtotal.value = subtotal.value.toUpperCase();
    const li = document.createElement("li");
    const percentTip = Math.round(tip.value/subtotal.value * 100);
    li.textContent = `${numDeliveries}: $${tip.value} tip of $${subtotal.value} (${percentTip}%) at ${time}`;
    ul.prepend(li);
    subtotal.value = null;
    tip.value = null;
});

