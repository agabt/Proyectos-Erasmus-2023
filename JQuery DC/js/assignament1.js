let textToSearch = "Hola mi nombre es Marc Lorente, mi codigo postal 7831AJ, el número de teléfono en el que me puedes contactar es el 31644780456 mi email es el admin@agabt.com y vivo en Dorpcalle 69, Eslin.";
const par = document.createElement("p");

window.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(par);
    par.innerHTML = textToSearch;
});

// Regular Expressions

const POSTALCODERE = /[1-9]\d{3}[A-Z]{2}/g;
const PHONENUMRE = /31\d{9}/g;
const EMAILRE = /[a-zA-Z0-9]+@[a-zA-Z]+[.](com|es|net)/g;
const DIRECTIONRE = /[a-zA-Z]+ \d*, [a-zA-Z]*/g;
const NAMERE = /[A-Z][a-z]+/g;

console.log(textToSearch.search(POSTALCODERE));
console.log(textToSearch.search(PHONENUMRE));
console.log(textToSearch.search(EMAILRE));
console.log(textToSearch.search(DIRECTIONRE));
console.log(textToSearch.search(NAMERE));