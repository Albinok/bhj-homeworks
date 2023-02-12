const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__item'));

const  dropdown = () => {
  dropdownList.classList.contains('dropdown__list_active') ? dropdownList.classList.remove('dropdown__list_active') : dropdownList.classList.add('dropdown__list_active');
  return false;
}

for (let click of dropdownLinks) {
  click.onclick = () => {
    dropdownValue.textContent = click.textContent;
    dropdownList.classList.remove('dropdown__list_active');
    return false;
  }
}

dropdownValue.addEventListener('click', dropdown);