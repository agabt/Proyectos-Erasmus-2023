document.write(`<button id="button">Click me</button>`);

function showname () {
    console.log("Anthony");
}

document.getElementById("button").onclick=showname;