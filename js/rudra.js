const menus = document.querySelector("nav ul");
const header = document.querySelector('header');
const menubtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
menubtn.addEventListener("click",
    ()=>{
        menus.classList.add("display");
    });
    closeBtn.addEventListener("click",()=>{
        menus.classList.remove("display");
    })
