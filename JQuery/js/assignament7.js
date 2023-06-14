$(document).ready(function () {
    let divWithText = document.createElement("div");
    document.body.appendChild(divWithText);
    $(divWithText).css("width", "200px");
    $(divWithText).css("height", "100px");
    $(divWithText).css("margin", "2px");
    $(divWithText).css("background-color", "lightgray");

    for (let i = 0; i < 3; i++) {
        let button = document.createElement("button");
        button.id = i;
        document.body.appendChild(button);
        button.innerHTML = "I am button " + i;
        $(button).css("margin", "2px");

        $(button).click(function () { 
            divWithText.innerHTML = $(this).html();
        });
    };
});