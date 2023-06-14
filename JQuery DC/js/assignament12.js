$(document).ready(function () {
    let slindingText = document.createElement("h1");
    $(document.body).append(slindingText);
    $(slindingText).html("Hello World!");

    $(slindingText).css("position", "absolute");
    $(slindingText).css("top", "300px");
    $(slindingText).css("right", "0");

    $(slindingText).animate({ left: '-169px' }, 10000);
});