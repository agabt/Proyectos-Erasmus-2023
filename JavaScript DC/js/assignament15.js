let input = document.createElement("input");
let label = document.createElement("label");
let button = document.createElement("button");

button.id = "start";
input.id = "time-seconds";

label.setAttribute("for", "time-seconds");
button.setAttribute("type", "submit");
label.style.marginRight = "5px";
button.style.marginLeft = "5px";

window.addEventListener("DOMContentLoaded", () => {
    label.innerHTML = "Write how many seconds do you want:";
    document.body.appendChild(label);
    document.body.appendChild(input);
    button.innerHTML = "Start the timer";
    document.body.appendChild(button);
});

button.addEventListener("click", () => {
    setTimeout(alert("Timer ended!"), input.value * 1000);
});