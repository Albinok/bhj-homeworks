const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

let indexActive;

tab.forEach((item, index) => {
  if (item.className === 'tab tab_active') {
    indexActive = index;
  }
  item.addEventListener('click', () => {
    if (indexActive !== index) {
      tab[indexActive].className = 'tab';
      item.classList.add('tab_active');
      tabContent[indexActive].className = 'tab__content';
      tabContent[index].classList.add('tab__content_active');
      indexActive = index;
    }
  });
});