let div_1 = document.querySelector(".icons-div-1");
let div_2 = document.querySelector(".icons-div-2");
let toggle_1 = document.querySelector(".toggle-1");
let toggle_2 = document.querySelector(".toggle-2");
let icon_1 = document.querySelector(".icons-div-1 i");
let icon_2 = document.querySelector(".icons-div-2 i");

div_1.addEventListener("click", function(){
    toggle_1.classList.toggle("hidden");
    icon_1.classList.toggle("rotated");
});

div_2.addEventListener("click", function(){
    toggle_2.classList.toggle("hidden");
    icon_2.classList.toggle("rotated");
});
