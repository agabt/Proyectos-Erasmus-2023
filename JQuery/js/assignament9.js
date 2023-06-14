$(document).ready(function () {
    let formHTML = document.createElement("form");
    $(document.body).append(formHTML);

    let inputs = ["Name", "Email", "Adress"];

    for (let i = 0; i < inputs.length; i++) {
        let inputHTML = document.createElement("input");
        let labelHTML = document.createElement("label");

        $(inputHTML).css("margin", "6px");

        inputHTML.id = inputs[i];
        $(labelHTML).attr("for", inputHTML.id);
        
        labelHTML.innerHTML = inputs[i] + ":";
        $(formHTML).append(labelHTML);
        $(formHTML).append(inputHTML);

        $(inputHTML).hover(function () {
                // over
                $(this).css("border", "2px solid lightgreen");
                $(this).css("border-radius", "4px");
            }, function () {
                // out
                $(this).css("border", "");
                $(this).css("border-radius", "");
            }
        );
    }
});