const signin = document.querySelector('.signin');
const btn = document.querySelector('#signin__btn');
const form = document.getElementById('signin__form');
const welcome = document.querySelector('.welcome');
const userId = document.querySelector('#user_id');

let user = localStorage.userId;

if (user){
  userActive();
} else {
  signin.classList.add('signin_active');
}

function userActive () {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userId.textContent = `${user}`;
}

btn.addEventListener('click', (event) => {
  const dataForm = new FormData(form);
  const xmr = new XMLHttpRequest();
  xmr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xmr.responseType = 'json';
  xmr.send(dataForm);
  xmr.onload = () => {
    if (xmr.status === 200){
      if (!xmr.response.success) {
        alert('неверный логин/пароль');
      } else {
        user = xmr.response.user_id;
        userActive();
      };
    };
  };
  event.preventDefault();
});

