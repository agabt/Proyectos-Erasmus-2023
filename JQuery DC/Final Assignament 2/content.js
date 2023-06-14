$(document).ready(function () {
    let englishText = ["Sir", "Madame", "Full Name", "Address", "City", "PC", "D. Birth", "Nacionality", "Occupation", "Comments"];
    let spanishText = ["Señor", "Señora", "Nombre Completo", "Direccion", "Ciudad", "CP", "F. Nacimiento", "Nacionalidad", "Ocupación", "Comentarios"];

    let isSpanish = true;

    selectSpanish = document.getElementById("spanish");
    selectEnglish = document.getElementById("english");

    $(selectSpanish).click(function () {
        if (isSpanish == false) {
            changeLanguage();
        };
    });

    $(selectEnglish).click(function () {
        if (isSpanish) {
            changeLanguage();
        };
    });

    function changeLanguage() {
        $(document.getElementsByTagName("form")[0]).fadeOut(300, function () {
            if (isSpanish) {
                $(document.getElementsByClassName("title")[1]).html("Register");
                for (let i = 0; i < document.getElementsByTagName("label").length; i++) {
                    const element = document.getElementsByTagName("label")[i];
                    $(element).html(englishText[i]);
                }
                $(document.getElementById("btn-send")).html("Submit");

                isSpanish = false;
            } else {
                $(document.getElementsByClassName("title")[1]).html("Registro");
                for (let i = 0; i < document.getElementsByTagName("label").length; i++) {
                    const element = document.getElementsByTagName("label")[i];
                    $(element).html(spanishText[i]);
                }
                $(document.getElementById("btn-send")).html("Enviar");

                isSpanish = true;
            }
        });

        $(document.getElementsByTagName("form")[0]).fadeIn();
    }

    $(".gender").click(function () {
        if (this.id == "salutation-sr") {
            $(document.getElementsByTagName("form")[0]).removeClass("women");
            $(document.getElementsByTagName("form")[0]).addClass("men");

            for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
                const element = document.getElementsByTagName("input")[i];
                $(element).removeClass("women-input");
                $(element).addClass("men-input");
            }

            $("#comments").removeClass("women-input");
            $("#comments").addClass("men-input");

        } else if (this.id == "salutation-md") {
            $(document.getElementsByTagName("form")[0]).removeClass("men");
            $(document.getElementsByTagName("form")[0]).addClass("women");

            for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
                const element = document.getElementsByTagName("input")[i];
                $(element).removeClass("men-input");
                $(element).addClass("women-input");
            }

            $("#comments").removeClass("men-input");
            $("#comments").addClass("women-input");
        }
    });

    $("#date-birth").focusout(function () {
        $("#age").fadeOut(100, function () {
            const hoy = new Date();
            const nacimiento = new Date(document.getElementById("date-birth").value);
            let edad = hoy.getFullYear() - nacimiento.getFullYear();
            const mes = hoy.getMonth() - nacimiento.getMonth();

            if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
                edad--;
            }
            $("#age").html(edad);
            $("#age").fadeIn();
        });

    });

    const REGEXS = [
        /[A-Z]\w+/g,
        /\w+ \d+/g,
        /\w+ ?\d?/g,
        /[1-9]\d{3}[A-Z]{2}/g,
        /[0-3][0-9]-?\/?[0-1][0-9]-?\/?\d{4}/g,
        /\w+/g,
        /\w+/g
    ];

    $("#btn-send").click(function (e) {
        e.preventDefault();
        let errorMsg = [];

        for (let i = 2; i < document.getElementsByTagName("input").length; i++) {
            const j = i - 2;
            const element = document.getElementsByTagName("input")[i];

            console.log(element)
            console.log(element.value)
            console.log(REGEXS[j])
            console.log(element.value.search(REGEXS[j]))

            if (element.value.search(REGEXS[j]) && element.id != "date-birth") {
                errorMsg.push(" " + document.getElementsByTagName("label")[i].innerHTML);
            }
        }

        if (errorMsg.length != 0) {
            if (isSpanish) {
                if (errorMsg.length != 1) {
                    alert("Los siguientes parámetros son invalidos:" + errorMsg + ". Por favor, revisalos y vuelve a intentar");
                } else {
                    alert("El siguiente parámetro es invalido:" + errorMsg + ". Por favor, revisalo y vuelve a intentar")
                };

            } else {
                alert("The following inputs are invalid:" + errorMsg + ". Please, check it and try again")
            };
        };
    });
});