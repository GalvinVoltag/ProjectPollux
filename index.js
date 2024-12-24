const Top=document.querySelector(".Toogle");
const İtems=document.querySelectorAll(".navbar,.sidebar,.menu-list-item,.Profil-Text-Span,.bi-caret-down-fill,.sidebar-i,.Genel-Alan,.Popüler,.One-Class,.Select,.Toogle-Ball,.Toogle");

Top.addEventListener("click",function(){
    console.log("merhaba")
    İtems.forEach((items)=>items.classList.toggle("Active"))
})
/*108*/ 


document.querySelector(".btn_ripple").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Filmler/Recep_%C4%B0vedik_3/index.html"
})
document.querySelector(".Card2").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Film%20Projesi/%C4%B0lk%20Proje/Ana_Sayfa/Kurtlar_Vadisi_Irak/index.html"
})
document.querySelector(".Card3").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Film%20Projesi/%C4%B0lk%20Proje/Ana_Sayfa/%C3%96yle_Bir_Ge%C3%A7er_Zaman_Ki/index.html"
})
document.querySelector(".Card4").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Film%20Projesi/%C4%B0lk%20Proje/Ana_Sayfa/Titanic/index.html"
})
document.querySelector(".Card5").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/Film%20Projesi/%C4%B0lk%20Proje/Ana_Sayfa/Esaretin_Bedeli/index.html"
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