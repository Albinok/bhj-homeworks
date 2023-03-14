let index = 0;
let speed = 1000;

let rotatorTime = setInterval(function time() {
  let rotator = document.querySelector('.rotator__case_active');
  rotator.classList.remove('rotator__case_active');

  if (rotator.nextElementSibling) {
    let nextRotator = rotator.nextElementSibling;
    nextRotator.classList.add('rotator__case_active');
  } else {
    nextRotator = document.querySelector('.rotator__case');
    nextRotator.classList.add('rotator__case_active');
  }

}, speed);







// const rotator = Array.from(document.getElementsByClassName('rotator__case'));
// let index = 0;
// let speed = 1000;

// let rotatorTimeout = setTimeout(function time() {
//   rotator.forEach(elem => elem.classList.remove('rotator__case_active'));
//   index >= rotator.length - 1 ? index = 0 : index++;
//   rotator[index].classList.add('rotator__case_active');
  
//   rotatorTimeout = setTimeout(time, speed);
// }, speed);