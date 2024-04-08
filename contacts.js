// side nav section
const hamburger=document.getElementById("hamburger")
const sidebar=document.getElementById("sidenav")
const erase=document.querySelector("#fa-xmark")
// click event
hamburger.addEventListener("click",()=>{
    sidenav.style.right="0"
})
// remove event

erase.addEventListener("click",()=>{
    sidenav.style.right="-40rem"
})