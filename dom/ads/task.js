const rotator = Array.from(document.getElementsByClassName('rotator__case'));
let index = 0;
let speed = 1000;

let rotatorTimeout = setTimeout(function time() {
  rotator.forEach(elem => elem.classList.remove('rotator__case_active'));
  index >= rotator.length - 1 ? index = 0 : index++;
  rotator[index].classList.add('rotator__case_active');
  
  rotatorTimeout = setTimeout(time, speed);
}, speed);