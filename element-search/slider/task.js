const sliderItem = Array.from(document.getElementsByClassName('slider__item'));
const sliderPrev = document.querySelector(".slider__arrow_prev");
const sliderNext = document.querySelector(".slider__arrow_next");
let newIndex;

let activeSlideIndex = sliderItem.findIndex((elem) => {
  if (elem.className === "slider__item slider__item_active") {
    return true;
  }
});

const slider = (index) => {
  sliderItem[activeSlideIndex].className = 'slider__item';

  if (index > sliderItem.length - 1) {
    newIndex = 0;
  } else if (index < 0) {
    newIndex = sliderItem.length - 1;
  } else {
    newIndex = index;
  }

  sliderItem[newIndex].className = 'slider__item slider__item_active';
  activeSlideIndex = newIndex;
};

sliderNext.onclick = () => {
  slider(activeSlideIndex + 1);
};

sliderPrev.onclick = () => {
  slider(activeSlideIndex - 1);
};


