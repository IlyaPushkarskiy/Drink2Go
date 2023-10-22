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
const images = document.querySelectorAll('.slider__element')
let widthOfWindow = sliderLine.offsetWidth;

nextButton.addEventListener('click', () =>{
  offset += widthOfWindow / images.length;
  if (offset > widthOfWindow - 1) {
    offset = 0;
  }
  sliderLine.style.left = `${-offset }px`;
});

prevButton.addEventListener('click', () =>{
  offset -= widthOfWindow / images.length;
  if (offset < 0) {
    offset = widthOfWindow - widthOfWindow / images.length;
  }
  sliderLine.style.left = `${-offset }px`;
});

