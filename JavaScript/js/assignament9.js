let names = ["Zoe", "Bram", "Clarissa", "Isa", "Gerrie"];

// Display with a for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Display with a while loop
let i = 0;

while (i < names.length) {
    console.log(names[i])
    i++;
}

// Display all the array
console.log(names);

// Display the length of the array
console.log(names.length);

// Add my name to the array and display it
names.push("Anthony");

console.log(names);

// Sort the array alphabetically and display it
names.sort();

console.log(names);