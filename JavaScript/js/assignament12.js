document.write(`<div id="div" style="background-color: blue; width: 300px; height: 300px;"></div>`)

let divisor = document.getElementById("div")

divisor.addEventListener("mouseover", function() {
    document.getElementById("div").innerHTML = "Hello World!";
})

divisor.addEventListener("mouseout", function() {
    document.getElementById("div").innerHTML = "";
})

divisor.addEventListener("click", function() {
    if (this.innerHTML.match("Hello World!")) {
        document.getElementById("div").innerHTML = "Hola Mundo!";
        this.style.fontStyle = "italic";
    } else {
        document.getElementById("div").innerHTML = "Hello World!"
        this.style.fontStyle = "normal";
    }
})