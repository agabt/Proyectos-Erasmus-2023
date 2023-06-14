let div = document.createElement("div");
div.id = "mouse-pos";

window.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(div);
});

let mousePosText = document.getElementById("mouse-pos");
let mousePosX = undefined;
let mousePosY = undefined;

window.addEventListener("mousemove", () => {
    mousePosX = event.clientX;
    mousePosY = event.clientY;

    div.innerHTML = mousePosX + ", " + mousePosY;
});