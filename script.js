// кнопки 

const home = document.getElementById("Home");
const works = document.getElementById("Works");
const price = document.getElementById("Price");

home.style.color = "#FF6E00";

// нажатие кнопок

function HomeClick() {
    home.style.color = "#FF6E00"
    price.style.color = "#909090"
}

function PriceClick() {
    price.style.color = "#FF6E00"
    home.style.color = "#909090"
}

// Привествие анимка


const H = document.getElementById("H");
const e = document.getElementById("e");
const l = document.getElementById("l");
const l2 = document.getElementById("l2");   // ← другое имя
const o = document.getElementById("o");

H.style.display = "none";
e.style.display = "none";
l.style.display = "none";
l2.style.display = "none";
o.style.display = "none";

setTimeout(() => {
    H.style.display = "";
}, 200);

setTimeout(() => {
    e.style.display = "";
}, 400);

setTimeout(() => {
    l.style.display = "";
}, 600);

setTimeout(() => {
    l2.style.display = "";
}, 800);

setTimeout(() => {
    o.style.display = "";
}, 1000);

// кнопки связи

const Contact = document.getElementById("Contact");
const Media = document.getElementById("Media");
const MediaWind = document.getElementById("MediaWind");
const StopWind = document.getElementById("StopWind")

StopWind.style.display = "none"
MediaWind.style.display = "none"

Contact.style.fontWeight = "500"
Contact.style.fontSize = "3.5vw"
Contact.style.background = "#FF6E00"
Contact.style.border = "none"

function ContactClick() {
    Contact.style.fontWeight = "500"
    Contact.style.fontSize = "3.5vw"
    Contact.style.background = "#FF6E00"
    Contact.style.border = "none"
    
    Media.style.fontWeight = "200"
    Media.style.background = "#121212"
    Media.style.border = "solid #fff 1px"
}