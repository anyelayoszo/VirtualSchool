let header=document.querySelector(".header");
let searchBox=document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click",()=>{
    header.classList.toggle("showInput");
})
