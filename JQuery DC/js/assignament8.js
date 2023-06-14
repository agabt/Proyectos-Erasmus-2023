$(document).ready(function () {
    let divHTML = document.createElement("div");
    document.body.appendChild(divHTML);
    $(divHTML).css("width", "200px");
    $(divHTML).css("height", "100px");
    $(divHTML).css("margin", "2px");
    $(divHTML).css("background-color", "lightgray");

    let buttonHTML = document.createElement("button");
    $(buttonHTML).text("Click me change colors in the rectangle");
    $(document.body).append(buttonHTML);

    let divActive = false;

    $(buttonHTML).click(function () {
        if (divActive) {
            $(divHTML).css("background-color", "green");
            divActive = false;
        } else {
            $(divHTML).css("background-color", "red");
            divActive = true;
        };
    });
});