const cookieElem = document.getElementById('cookie');
const cookieClicker = document.getElementById('clicker__counter');
let counter = 0;

cookieElem.onclick = () => {
  counter = cookieClicker.textContent++;
  if (cookieClicker.textContent % 2 !== 0) {
    cookieElem.width = 300;
  } else {
    cookieElem.width = 200;
  }
}

