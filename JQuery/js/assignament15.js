$(document).ready(function () {
    let images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/320px-Flag_of_Romania.svg.png"
    ];

    let imgShown = document.createElement("img");
    let imgTransition = document.createElement("img");
    let divShown = document.createElement("div");
    let divTransition = document.createElement("div");

    let imgShownNum = 1;

    $(imgShown).css("scale", "1.3");
    $(imgTransition).css("scale", "1.3");
    $(divShown).css({ "position": "relative", "display": "flex", "align-items": "center", "justify-content": "center", "width": "100%", "height": screen.height / 1.2 });
    $(divTransition).css({ "position": "relative", "display": "flex", "align-items": "center", "justify-content": "center", "width": "100%", "height": screen.height / 1.2 });

    $(imgShown).attr("src", images[imgShownNum]);

    $(document.body).append(divShown);
    $(divShown).append(imgShown);

    let buttonLeft = document.createElement("button");
    let buttonRight = document.createElement("button");
    $(buttonLeft).css({ "position": "absolute", "left": "0", "top": "50%", "scale": "1.5", "background-color": "gray", "color": "white", "border-radius": "30px" });
    $(buttonRight).css({ "position": "absolute", "right": "0", "top": "50%", "scale": "1.5", "background-color": "gray", "color": "white", "border-radius": "30px" });

    $(document.body).append(buttonLeft);
    $(document.body).append(buttonRight);

    $(buttonLeft).html("<");
    $(buttonRight).html(">");

    $(buttonLeft).click(function () {
        $(divShown).animate({
            right: screen.width,
        });



        $(document.body).append(divTransition);
        $(divTransition).append(imgTransition);

        $(divTransition).css({"left": screen.width, "right": 0});

        if (imgShownNum >= 2) {
            imgShownNum = 0;
        } else {
            imgShownNum++;
        };

        $(imgTransition).attr("src", images[imgShownNum]);

        $(divTransition).animate({
            left: 0,
        });

        divShown = divTransition;
        imgShown = imgTransition;
    });
});