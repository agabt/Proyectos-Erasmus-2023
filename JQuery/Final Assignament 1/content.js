$(document).ready(function () {
    let textBoxLeft = [];
    let textBoxRight = [];

    let leftBox = document.getElementById("left-box");
    let rightBox = document.getElementById("right-box");
    let parseLeft = document.getElementById("move-left");
    let parseRight = document.getElementById("move-right");
    let inputUser = document.getElementById("input-name");

    function displayText(funcText, boxAdd) {
        boxAdd.innerHTML = "";
        for (let i = 0; i < funcText.length; i++) {
            const text = funcText[i];
            boxAdd.innerHTML += text;
        }
    }

    $(document.getElementById("add-name")).click(function () { 
        textBoxLeft.push(inputUser.value + ", ");
        inputUser.value = "";

        displayText(textBoxLeft, leftBox);
    });

    $(parseLeft).click(function () { 
        textBoxRight.push(textBoxLeft[0]);
        textBoxLeft.shift();

        displayText(textBoxLeft, leftBox);
        displayText(textBoxRight, rightBox);
    });

    $(parseRight).click(function () { 
        textBoxLeft.push(textBoxRight[0]);
        textBoxRight.shift();

        displayText(textBoxLeft, leftBox);
        displayText(textBoxRight, rightBox);
    });
});