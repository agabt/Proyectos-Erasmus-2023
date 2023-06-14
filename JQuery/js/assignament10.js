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
        $(document.body.getElementsByTagName("div")[0]).append(divHTML);

        $(divHTML).hover(function () {
                // over
                $(this).css("background-color", "red");
            }, function () {
                // out
                $(this).css("background-color", "blue");
            }
        );
    }
});