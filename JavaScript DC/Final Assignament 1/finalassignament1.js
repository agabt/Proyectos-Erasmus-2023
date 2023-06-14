let sources = [
    "imgs/img1.jpg",
    "imgs/img2.jpg",
    "imgs/img3.jpg",
    "imgs/img4.jpg",
    "imgs/img5.jpg",
    "imgs/img6.jpg",
    "imgs/img7.jpg",
    "imgs/img8.jpg",
    "imgs/img9.jpg"
]

window.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 9; i++) {
        imageDisplayed = document.createElement("img");
        imageDisplayed.id = "img" + i;
        imageDisplayed.src = sources[i - 1];

        imageDisplayed.setAttribute("draggable", "true");
        imageDisplayed.setAttribute("ondragstat", "drag(event)");
        imageDisplayed.setAttribute("ondrag", "seeID(id)");

        document.getElementById("image").appendChild(imageDisplayed);
        imageDisplayed.style.width = "30px";
        imageDisplayed.style.height = "30px";
        imageDisplayed.style.margin = "2px";
    }

    for (let i = 1; i <= 9; i++) {
        boardSquare = document.createElement("div");
        boardSquare.id = i;

        boardSquare.setAttribute("ondragover", "dropping(event)");
        boardSquare.setAttribute("ondrop", "insert(id)");

        document.getElementById("flex").appendChild(boardSquare);
    }
});

let imageDraggingID = 0;

let checkWinCond = [];

function checkWin() {
    let win = true;

    for (let i = 0; i < checkWinCond.length; i += 2) {
        j = i + 1;

        if (checkWinCond[j].includes(checkWinCond[i]) == false) {
            win = false;
            alert("You did not win :( - Try again!");
            break;
        }
    }

    if (win) {
        alert("You Win!");
    }
}

function seeID(id) {
    imageDraggingID = id;
}

function dropping(ev) {
    ev.preventDefault();
}

function insert(id) {
    if (document.getElementById(id).children.length > 0) {
        alert("Ya hay una imagen allí");
    } else {
        document.getElementById(id).appendChild(document.getElementById(imageDraggingID));
        document.getElementById(id).style.backgroundColor = "white";
        document.getElementById(imageDraggingID).style.margin = "0px";

        checkWinCond.push(id, imageDraggingID);
    }

    if (checkWinCond.length == 18) {
        checkWin();
    }
};