const modal = document.querySelector('.modal');

modal.classList.add('modal_active');

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__close')) {
        modal.classList.remove('modal_active');
        document.cookie = 'close';
    }
})

if (document.cookie.length > 0) {
    modal.classList.remove('modal_active');
}