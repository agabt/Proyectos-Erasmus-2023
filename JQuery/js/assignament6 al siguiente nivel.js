$(document).ready(function () {
    document.body.appendChild(document.createElement("div"));
    $(document.body.getElementsByTagName("div")[0]).css("display", "flex");
    $(document.body.getElementsByTagName("div")[0]).css("flex-direction", "row");

    for (let i = 0; i < 4; i++) {
        divHTML = document.createElement("div");
        $(divHTML).css("width", "100px");
        $(divHTML).css("height", "100px");
        $(divHTML).css("margin", "2px");
        $(divHTML).css("background-color", "blue");
        divHTML.className = "colorChange"
        document.body.getElementsByTagName("div")[0].appendChild(divHTML);
    };

    let div = document.createElement("div");
    let namesDisplayed = document.createElement("p");
    let note1 = document.createElement("p");
    let note2 = document.createElement("p");
    let names = [];

    document.body.appendChild(div);
    div.innerHTML = "Click here to enter the colors you want";
    note1.innerHTML = "NOTE: You have to choose between and only 4 colors, so if you enter another color the first one will be erased and replaced by the new one";
    note2.innerHTML = "Choosen colors:";
    div.appendChild(note1);
    div.appendChild(note2);
    div.appendChild(namesDisplayed);

    $(div).click(function () {
        if (names.length >= 4) {
            names.shift();
            names.push(" " + prompt("Please enter a color"));
        } else {
            names.push(" " + prompt("Please enter a color"));
        }
        namesDisplayed.innerHTML = names;
    });

    let randomizeColor = document.createElement("button");
    document.body.appendChild(randomizeColor);
    randomizeColor.innerHTML = "Click for random color distribution";

    let getRandomColor = () => Math.floor(Math.random() * 4);

    function randomColor() {
        switch (getRandomColor()) {
            case 0:
                return names[0];
            case 1:
                return names[1];
            case 2:
                return names[2];
            case 3:
                return names[3];
            default:
                break;
        };
    };

    $(randomizeColor).click(function () {
        for (let i = 0; i < document.body.getElementsByClassName("colorChange").length; i++) {
            $(document.body.getElementsByClassName("colorChange")[i]).css("background-color", randomColor());
        }
    });
});