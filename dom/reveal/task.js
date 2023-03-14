const reveal = Array.from(document.getElementsByClassName('reveal'));

window.addEventListener('scroll', function () {
  reveal.forEach(elem => {
    const {top, bottom} = elem.getBoundingClientRect();
    if (top > window.innerHeight || bottom < 0 ) {
      elem.classList.remove('reveal_active');
    } else { 
      elem.classList.add('reveal_active');
    }
  });
});