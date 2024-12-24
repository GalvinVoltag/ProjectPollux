const Top = document.querySelector(".Toogle");
const İtems = document.querySelectorAll(".navbar,.BAŞLIK,.Film_Ana_Sekme,.sidebar,.menu-list-item,.Profil-Text-Span,.bi-caret-down-fill,.sidebar-i,.Genel-Alan,.Popüler,.One-Class,.Select,.Toogle-Ball,.Toogle");

Top.addEventListener("click", function () {
    console.log("merhaba")
    İtems.forEach((items) => items.classList.toggle("Active"))
})
/*108*/



const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".Movie_List")


arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieList[i].querySelectorAll("img").length;

    
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (6 + clickCounter) >= 0) {

            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().
                get("transform")[0].x.value - 300}px)`;

        }
        else{
            movieList[i].style.transform = "translateX(0)";
        }
    })
    

});

ScrollReveal().reveal('.Hilmi' ,{delay:250});
ScrollReveal().reveal('.Hilmi1' ,{delay:275});
ScrollReveal().reveal('.Hilmi2' ,{delay:300});
ScrollReveal().reveal('.Hilmi3' ,{delay:400});
ScrollReveal().reveal('.Hilmi4' ,{delay:500});
ScrollReveal().reveal('.Hilmi5' ,{delay:600});
ScrollReveal().reveal('.Hilmi6' ,{delay:700});
ScrollReveal().reveal('.Hilmi7' ,{delay:800});
ScrollReveal().reveal('.Hilmi8' ,{delay:900});
ScrollReveal().reveal('.Hilmi9' ,{delay:1000});
ScrollReveal().reveal('.Hilmi10' ,{delay:1100});
ScrollReveal().reveal('.Hilmi11' ,{delay:1200});

ScrollReveal().reveal('.Hilmi12' ,{delay:1225});
ScrollReveal().reveal('.Hilmi13' ,{delay:1250});
ScrollReveal().reveal('.Hilmi14' ,{delay:1275});
ScrollReveal().reveal('.Hilmi15' ,{delay:1300});
ScrollReveal().reveal('.Hilmi16' ,{delay:1325});
ScrollReveal().reveal('.Hilmi17' ,{delay:1350});
ScrollReveal().reveal('.Hilmi18' ,{delay:1375});
ScrollReveal().reveal('.Hilmi19' ,{delay:1400});

document.querySelector(".Recep_İvedik_Button").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Filmler/Recep_%C4%B0vedik_3/index.html"
})

document.querySelector(".EsaretinBedeli").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Filmler/Esaretin_Bedeli/index.html"
})

document.querySelector(".Ana_Sayfa").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/index.html"
})
document.querySelector(".Filmler").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Filmler/index.html"
})
document.querySelector(".Diziler").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Diziler/index.html"
})
document.querySelector(".Hakkında").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Hakk%C4%B1nda/index.html"
})
document.querySelector(".Giriş_Kayıt").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Giri%C5%9F_Kay%C4%B1t/index.html"
})