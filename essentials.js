//The HEADER
window.onload = ready;
function ready(){
    fetch("../../../header.shtml").then((res) => res.text()).then((text) => {
        document.querySelector("#headermain").innerHTML = text;
        if (localStorage.getItem("darkmode") == "false"){
            theme();
            localStorage.setItem("darkmode", "false");}
            if (localStorage.getItem("login") != "-1"){
                var name = JSON.parse(localStorage.getItem("users"))[parseInt(localStorage.getItem("login"))].username;
                document.querySelector("#namearea").innerHTML = `<button type="submit" onclick="C.unlogin()" class="button">↩</button> <a href="../../Listem/index.html" class="menu-list-item"> ${name} </a>`;
                document.querySelector("#namearea").classList.remove("Hid");
                document.querySelector("#loginarea").classList.add("Hid");
            }
            ready2();
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
    if (localStorage.getItem("darkmode") == "true")
        localStorage.setItem("darkmode", "false");
    else
        localStorage.setItem("darkmode", "true");
    // İtems.forEach((items)=>items.classList.toggle("Active"));
    // document.querySelectorAll(".menu-list-item, .Toggle-Ball").forEach((items)=>items.classList.toggle("Active"));
}

const C = {
    cum() {
        console.log("command ran");
    },
    update_movie_database() {
        var movies = [];
        fetch("../../Database/Data.json")
        .then((res) => res.text())
        .then((text) => {
            var parsed = JSON.parse(text);
            // console.log(parsed[0].username);
            movies.push(parsed);
            console.log(parsed);
            localStorage.setItem("movies",JSON.stringify(parsed));
        })
        .catch((e) => console.error(e));
    },
    update_user_database() {
        var users = [];
        fetch("../../Database/Userdata.json")
        .then((res) => res.text())
        .then((text) => {
            var parsed = JSON.parse(text);
            // console.log(parsed[0].username);
            users.push(parsed);
            console.log(parsed);
            localStorage.setItem("users",JSON.stringify(parsed));
        })
        .catch((e) => console.error(e));
        localStorage.setItem("login", -1);
    },
    add_user(name, pwrd) {
        var mm = JSON.parse(localStorage.getItem("users"));
        var nn = {
            "realname": "UNDEFINED",
            "username": name,
            "password": pwrd,
            "likes": [            ],
            "dislikes": [            ],
            "comments": [            ]
        }
        mm.push(nn);
        localStorage.setItem("users", JSON.stringify(mm));
    },
    unlogin() {
        localStorage.setItem("login", "-1");
        document.querySelector("#namearea").classList.remove("Hid");
        document.querySelector("#loginarea").classList.add("Hid");
        window.location.reload();
    }
};