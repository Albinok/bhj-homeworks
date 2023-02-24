const fontSize = Array.from(document.getElementsByClassName('font-size'));
const book = document.querySelector('.book__content');

fontSize.forEach(elem => elem.addEventListener('click', (e) => {
  fontSize.forEach(elem => elem.classList.remove('font-size_active'));
  e.target.classList.add('font-size_active');
  let {size} = elem.dataset;
  book.classList.remove('book_fs-small', 'book_fs-big');

  if (size) {
    book.classList.add('book_fs-' + size);
  }
  event.preventDefault();
}));