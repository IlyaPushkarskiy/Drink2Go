const navMain=document.querySelector(".main-nav"),headerMain=document.querySelector(".main-header"),navToggle=headerMain.querySelector(".main-nav__toggle");navToggle.addEventListener("click",(()=>{navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))}));