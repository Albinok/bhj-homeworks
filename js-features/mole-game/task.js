const hole = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let counterDead = 0;
let counterLost = 0;

let classNameHole;
let array = Array.from(hole);
let clickHole = array.forEach((item) => {
  let element = document.getElementById(item.id);
  element.onclick = () => {
    let findHole = element.className.includes('hole_has-mole');
    if (findHole) {
      counterDead++;
    } else {
      counterLost++;
    }
    dead.textContent = counterDead;
    lost.textContent = counterLost;
  }
});

