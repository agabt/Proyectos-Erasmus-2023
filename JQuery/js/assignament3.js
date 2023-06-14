$(document).ready(function () {
    for (let i = 0; i < 5; i++) {
        lineHTML = document.createElement("li");
        lineHTML.id = i + 1;
        document.body.appendChild(lineHTML);
        lineHTML.innerHTML = "Some text";
    };

    // Few li with "test" class and hide them specialy
    for (let i = 0; i < 3; i++) {
        lineHTML = document.createElement("li");
        lineHTML.className = "test";
        document.body.appendChild(lineHTML);
        lineHTML.innerHTML = "Some text TEST";
    };

    // Button and hide all li
    let hideButton = document.createElement("button");
    hideButton.id = "hide";
    hideButton.innerHTML = "Remove All";
    document.body.appendChild(hideButton);

    $("#hide").click(function () {
        $("li").hide();
    });

    // Button and show all li
    let showButton = document.createElement("button");
    showButton.id = "show";
    showButton.innerHTML = "Show All";
    document.body.appendChild(showButton);

    $("#show").click(function () {
        $("li").show();
    });

    // Hide all <li class="test">
    let hideTestButton = document.createElement("button");
    hideTestButton.id = "hideTest";
    hideTestButton.innerHTML = "Remove all test";
    document.body.appendChild(hideTestButton);

    $("#hideTest").click(function () { 
        $(".test").hide();
    });

    // Button and change bgcolor to blue to all li
    let addColorButton = document.createElement("button");
    addColorButton.id = "addColor";
    addColorButton.innerHTML = "Change color to blue";
    document.body.appendChild(addColorButton);

    $("#addColor").click(function () { 
        $("li").css("background-color", "blue");
    });

    // Button and remove bg color to all li
    let removeColorButton = document.createElement("button");
    removeColorButton.id = "removeColor";
    removeColorButton.innerHTML = "Remove color";
    document.body.appendChild(removeColorButton);

    $("#removeColor").click(function () { 
        $("li").css("background-color", "");
    });

});