$(document).ready(function () {
    document.body.appendChild(document.createElement("div"));
    document.body.getElementsByTagName("div")[0].className = "colorCustomizable";

    for (let i = 0; i < 4; i++) {
        lineHTML = document.createElement("li");
        lineHTML.innerHTML = "hello";
        document.getElementsByClassName("colorCustomizable")[0].appendChild(lineHTML);
    };

    document.body.getElementsByTagName("li")[0].className = "customizable";
    document.body.getElementsByTagName("li")[2].className = "customizable";

    let addColor = document.createElement("button");
    addColor.id = "addColor";
    addColor.innerHTML = "Add color";
    document.body.appendChild(addColor);

    $("#addColor").click(function () {
        if ($(document.body.getElementsByTagName("div")[0]).hasClass("colorCustomizable")) {
            $(".customizable").css("background-color", "blue");
        };
    });

    let removeColor = document.createElement("button");
    removeColor.id = "removeColor";
    removeColor.innerHTML = "Remove color";
    document.body.appendChild(removeColor);

    $("#removeColor").click(function () {
        $("li").css("background-color", "");
    });

});