const navMain = document.querySelector('.main-nav');
const headerMain = document.querySelector('.main-header');
const navToggle = headerMain.querySelector('.main-nav__toggle');


navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

let offset = 0;
const sliderLine = document.querySelector('.slider__wrapper');
const nextButton = document.querySelector('.slider__next');
const prevButton = document.querySelector('.slider__prev');

nextButton.addEventListener('click', () =>{
  offset += 320;
  if (offset > 640) {
    offset = 0;
  }
  sliderLine.style.left = `${-offset }px`;
});

prevButton.addEventListener('click', () =>{
  offset -= 320;
  if (offset < 0) {
    offset = 640;
  }
  sliderLine.style.left = `${-offset }px`;
});
