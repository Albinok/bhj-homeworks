const cookieElem = document.getElementById('cookie');
const cookieClicker = document.getElementById('clicker__counter');
let counter = 0;

cookieElem.onclick = () => {
  cookieElem.width = ++cookieClicker.textContent % 2 ? 250 : 200
}

