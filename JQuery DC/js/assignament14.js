$(document).ready(function () {
    let images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/320px-Flag_of_Romania.svg.png"
    ];

    for (let i = 0; i < 3; i++) {
        let imgHTML = document.createElement("img");
        imgHTML.id = i;
        $(imgHTML).attr("src", images[i]);
        $(document.body).append(imgHTML);
        $(imgHTML).css("margin", "20px");

        $(imgHTML).hover(function () {
            // over
            $(this).animate({
                height: '+=40px',
                width: '+=40px'
            })
        }, function () {
            // out
            $(this).animate({
                height: '-=40px',
                width: '-=40px'
            })
        }
        );

        $(imgHTML).click(function () { 
            $(this).animate({
                height: '+=100px',
                "border-radius": '100px',
                width: '+=200px',
            })
            setTimeout(() => {
                $(this).fadeOut(100, function () {
                    $(this).remove();
                });
            }, 469);
        });
    }
});