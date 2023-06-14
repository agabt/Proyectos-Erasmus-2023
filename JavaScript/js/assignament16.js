let nameAnthony = document.createElement("label");
let buttonDetails = document.createElement("button");
let textDetails = document.createElement("p");

buttonDetails.id = "details";
nameAnthony.setAttribute("for", "details");

nameAnthony.style.marginRight = "5px";
nameAnthony.style.fontWeight = 700;

window.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(nameAnthony);
    nameAnthony.innerHTML = "Anthony";
    document.body.appendChild(buttonDetails);
    buttonDetails.innerHTML = "Show Details";
    document.body.appendChild(textDetails);
});

let activeOrNot = false;

buttonDetails.addEventListener("click", () => {
    if (activeOrNot) {
        buttonDetails.innerHTML = "Show Details";
        textDetails.innerHTML = "";
        activeOrNot = false;
    } else {
        buttonDetails.innerHTML = "Hide Details";
        textDetails.innerHTML = "Nacido el: 28-01-2005. Vive en Consell."
        activeOrNot = true;
    }
});