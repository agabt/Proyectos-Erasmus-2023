$(document).ready(function () {
    let divHTML = document.createElement("div");
    $(document.body).append(divHTML);
    $(divHTML).css({ "border": "3px solid black", "width": "25%", "height": "12.5rem" });

    for (let i = 0; i < 5; i++) {
        let pHTML = document.createElement("p");
        $(pHTML).html("Random text " + i);
        $(divHTML).append(pHTML);
    };

    let buttonHTML = document.createElement("button");
    $(document.body).append(buttonHTML);
    $(buttonHTML).html("Click me");
    $(buttonHTML).click(function () {
        let introducedUsrTxt = prompt("Introduce someting");

        $(document.getElementsByTagName("p")[0]).fadeOut(2500);

        setTimeout(() => {
            $(document.getElementsByTagName("p")[0]).remove();
        }, 2510);

        setTimeout(() => {
            let newPHTML = document.createElement("p");
            $(divHTML).append(newPHTML);
            $(newPHTML).hide();
            $(newPHTML).html(introducedUsrTxt);
            $(newPHTML).fadeIn(2500);
        }, 2700);

    });
});