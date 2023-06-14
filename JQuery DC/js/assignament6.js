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
        $(divHTML).click(function () {
            if ($(this).css("background-color") == "rgb(0, 128, 0)") {
                $("[style$='background-color: green;']").css("background-color", "white");

            } else if ($(this).css("background-color") == "rgb(255, 255, 0)") {
                $("[style$='background-color: yellow;']").css("background-color", "white");

            } else if ($(this).css("background-color") == "rgb(255, 0, 0)") {
                $("[style$='background-color: red;']").css("background-color", "white");

            } else if ($(this).css("background-color") == "rgb(255, 165, 0)") {
                $("[style$='background-color: orange;']").css("background-color", "white");

            } else {
                $("[style$='background-color: blue;']").css("background-color", "white");
            }
        });
        divHTML.className = "colorChange"
        document.body.getElementsByTagName("div")[0].appendChild(divHTML);
    };

    let randomizeColor = document.createElement("button");
    document.body.appendChild(randomizeColor);
    randomizeColor.innerHTML = "Click for random color distribution";

    let getRandomColor = () => Math.floor(Math.random() * 5);

    function randomColor(numberChoose = getRandomColor()) {
        switch (numberChoose) {
            case 1:
                return "green";
            case 2:
                return "red";
            case 3:
                return "yellow";
            case 4:
                return "orange";
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