let imageDisplayed = document.createElement("img");
imageDisplayed.src = "";

let sources = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Oryctolagus_cuniculus_Tasmania_2.jpg/192px-Oryctolagus_cuniculus_Tasmania_2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Alcedo_atthis_-_Riserve_naturali_e_aree_contigue_della_fascia_fluviale_del_Po.jpg/320px-Alcedo_atthis_-_Riserve_naturali_e_aree_contigue_della_fascia_fluviale_del_Po.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Counter-Strike_Global_Offensive_%28w1024h128%2C_with_padding%29.svg/640px-Counter-Strike_Global_Offensive_%28w1024h128%2C_with_padding%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/CSGO_MajorRegions.png/640px-CSGO_MajorRegions.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Call_of_Duty_Black_Ops_2_Logo.svg/640px-Call_of_Duty_Black_Ops_2_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Apple_park_cupertino_2019.jpg/640px-Apple_park_cupertino_2019.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/640px-Googleplex_HQ_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Google_shopping_søk.jpg/640px-Google_shopping_søk.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/High-Definition_Multimedia_Interface.svg/640px-High-Definition_Multimedia_Interface.svg.png"
]

window.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 9; i++) {
        imageDisplayed = document.createElement("img");
        imageDisplayed.src = sources[i];
        document.body.appendChild(imageDisplayed);
    }
});