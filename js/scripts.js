"use strict";var prevButton=document.querySelector(".button--prev"),nextButton=document.querySelector(".button--next"),allSlides=document.querySelectorAll(".rings__item"),numberOfSlides=allSlides.length,carousel=allSlides[0],slideWidth=carousel.offsetWidth,slideGap=30,position=0,counter=0;allSlides.forEach(function(t){t.style.marginRight="".concat(slideGap,"px")});var handleNextButtonClick=function(){position<=-(numberOfSlides-4)*slideWidth&&(position=slideWidth+slideGap),counter+=1,position-=slideWidth+slideGap,carousel.style.marginLeft="".concat(position,"px"),carousel.style.transition="margin 0.3s ease-in-out"},handlePrevButtonClick=function(){0===position&&(position=-(numberOfSlides-3)*(slideWidth+slideGap)),counter-=1,position+=slideWidth+slideGap,carousel.style.marginLeft="".concat(position,"px"),carousel.style.transition="margin 0.3s ease-in-out"};nextButton.addEventListener("click",handleNextButtonClick),prevButton.addEventListener("click",handlePrevButtonClick);