let textToSearch = "0023 0240 2302 4002 0240";
const par = document.createElement("p");

window.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(par);
    par.innerHTML = textToSearch;
});

// Regular Expressions

const NUMBERSRE = /[0-4]{4}/g;

console.log(textToSearch.search(NUMBERSRE));