const bars = document.getElementById("bars");
const cross = document.getElementById("cross");
const mblMenu = document.getElementById("mbl-menu");

mblMenu.style.top = "-100%";

bars.addEventListener("click" , ()=>{
    mblMenu.style.top = "0%";
})


cross.addEventListener("click" , ()=>{
    mblMenu.style.top = "-100%";
})
