window.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 25; i++) {
        boardSquare = document.createElement("div");
        boardSquare.id = i;

        document.getElementById("flex").appendChild(boardSquare);
    };

    document.getElementById(13).style.backgroundColor = "black";

    let idSelected = document.getElementById(13).id;

    let controller = document.createElement("input");
    controller.id = "controller";
    document.body.appendChild(controller);

    controller.addEventListener("keydown", (whatKey) => {
        switch (whatKey.key) {
            case "ArrowUp":
                if (idSelected > 5) {
                    document.getElementById(idSelected).style.backgroundColor = "";
                    idSelected = idSelected - 5;
                    document.getElementById(idSelected).style.backgroundColor = "black";
                };
                break;
            case "ArrowDown":
                if (idSelected <= 20) {
                    document.getElementById(idSelected).style.backgroundColor = "";
                    idSelected = idSelected + 5;
                    document.getElementById(idSelected).style.backgroundColor = "black";
                };
                break;
            case "ArrowLeft":
                if (idSelected > 1) {
                    document.getElementById(idSelected).style.backgroundColor = "";
                    idSelected = idSelected - 1;
                    document.getElementById(idSelected).style.backgroundColor = "black";
                };
                break;
            case "ArrowRight":
                if (idSelected <= 24) {
                    document.getElementById(idSelected).style.backgroundColor = "";
                    idSelected = idSelected + 1;
                    document.getElementById(idSelected).style.backgroundColor = "black";
                };
                break;

        }
    });
});