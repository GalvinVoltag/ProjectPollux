//The HEADER
window.onload = ready;
function ready(){
    fetch("../../header.shtml").then((res) => res.text()).then((text) => {
        document.querySelector("#headermain").innerHTML = text;
    }).catch((e) => console.error(e));
}

//DARK MODE
function theme() {
    var DarkItems = document.querySelectorAll(".Dark, .Light");
    var Btn = document.querySelector(".Toggle-Ball");
    var Tgl = document.querySelector(".Toogle");
    DarkItems.forEach(function(items){items.classList.toggle("Dark")});
    DarkItems.forEach(function(items){items.classList.toggle("Light")});
    Btn.classList.toggle("On");
    Tgl.classList.toggle("D");
    // İtems.forEach((items)=>items.classList.toggle("Active"));
    // document.querySelectorAll(".menu-list-item, .Toggle-Ball").forEach((items)=>items.classList.toggle("Active"));
}