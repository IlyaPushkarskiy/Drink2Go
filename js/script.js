const navMain=document.querySelector(".main-nav"),headerMain=document.querySelector(".main-header"),navToggle=headerMain.querySelector(".main-nav__toggle");navToggle.addEventListener("click",(()=>{navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))}));let offset=0;const sliderLine=document.querySelector(".slider__wrapper"),nextButton=document.querySelector(".slider__next"),prevButton=document.querySelector(".slider__prev");nextButton.addEventListener("click",(()=>{offset+=320,offset>640&&(offset=0),sliderLine.style.left=-offset+"px"})),prevButton.addEventListener("click",(()=>{offset-=320,offset<0&&(offset=640),sliderLine.style.left=-offset+"px"}));