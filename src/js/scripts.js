'use strict';

const prevButton = document.querySelector('.button--prev');
const nextButton = document.querySelector('.button--next');
const allSlides = document.querySelectorAll('.rings__item');
const numberOfSlides = allSlides.length;
const carousel = allSlides[0];
const slideWidth = carousel.offsetWidth;
const slideGap = 30;
let position = 0;
let counter = 0;

allSlides.forEach((slide) => {
  slide.style.marginRight = `${slideGap}px`;
});

const handleNextButtonClick = () => {
  if (position <= (-(numberOfSlides  - 4) * slideWidth)) {
    position = slideWidth + slideGap;
  }

  counter += 1;
  position -= (slideWidth + slideGap);
  carousel.style.marginLeft = `${position}px`;
  carousel.style.transition = 'margin 0.3s ease-in-out';
};

const handlePrevButtonClick = () => {
  if (position === 0) {
    position = -(numberOfSlides - 3) *  (slideWidth + slideGap);
  }

  counter -= 1;


  position += slideWidth + slideGap;
  carousel.style.marginLeft = `${position}px`;
  carousel.style.transition = 'margin 0.3s ease-in-out';
};

nextButton.addEventListener('click', handleNextButtonClick);
prevButton.addEventListener('click', handlePrevButtonClick);