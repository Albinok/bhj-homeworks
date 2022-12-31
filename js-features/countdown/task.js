const timerSec = document.getElementById('timer');
let timerText = timerSec.textContent;

const getTimer = setInterval(() => {
  if (timerText > 0){
    timerText--;
    timerSec.textContent = timerText;
  } else {
    alert("Вы победили в конкурсе!");
    clearInterval(getTimer);
  }
}, 1000)


