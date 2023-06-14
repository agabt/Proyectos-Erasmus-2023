let div = document.createElement("div");
let namesDisplayed = document.createElement("p");
let names = [];

window.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(div);
    div.innerHTML = "Click here";
    div.appendChild(namesDisplayed);
});

div.addEventListener("click", () => {
    names.push(" " + prompt("Please enter your name"));
    namesDisplayed.innerHTML = names;
});