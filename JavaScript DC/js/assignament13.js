document.write(`<div id="div1" style="background-color: blue; width: 300px; height: 300px; margin: 3px;">Hello World</div>`);
document.write(`<div id="div2" style="background-color: blue; width: 300px; height: 300px; margin: 3px;">Hello World</div>`);
document.write(`<div id="div3" style="background-color: blue; width: 300px; height: 300px; margin: 3px;">Hello World</div>`);
document.write(`<div id="div4" style="background-color: blue; width: 300px; height: 300px; margin: 3px;">Hello World</div>`);
document.write(`<div id="div5" style="background-color: blue; width: 300px; height: 300px; margin: 3px;">Hello World</div>`);


let divisors = [document.getElementById("div1"), document.getElementById("div2"), document.getElementById("div3"), document.getElementById("div4"), document.getElementById("div5")];

for (let i = 0; i < divisors.length; i++) {
    divisors[i].addEventListener("click", function() {
        this.style.fontWeight = 700;

        if (event.shiftKey) {
            this.style.fontWeight = 300;
        }
    })
};
