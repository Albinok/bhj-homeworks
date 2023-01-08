const modalMain = document.getElementById('modal_main');
const modalClose = Array.from(document.getElementsByClassName('modal__close'));
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');

modalMain.className += ' modal_active'; 

let arr = modalClose.forEach(element => {
  element.onclick = () => {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal';
  };
});

showSuccess.onclick = () => {
  modalSuccess.className += ' modal_active';
  modalMain.className = 'modal';
};



