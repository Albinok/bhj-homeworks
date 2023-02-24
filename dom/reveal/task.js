const reveal = Array.from(document.getElementsByClassName('reveal'));

document.addEventListener('scroll', function () {
  reveal.forEach(elem => {
    const {top, bottom} = elem.getBoundingClientRect();
    top > document.innerHeight || bottom < 0 ? elem.classList.remove('reveal_active') : elem.classList.add('reveal_active');
  });
})