const dropdownValue = document.querySelectorAll('.dropdown__value');
const dropdownLink = document.querySelectorAll('.dropdown__link');

for (let value of dropdownValue) {
  value.addEventListener('click', function () {
    value.nextElementSibling.className = value.nextElementSibling.className === 'dropdown__list' ? 'dropdown__list dropdown__list_active' : 'dropdown__list';
  });
}

for (let click of dropdownLink) {
  click.addEventListener('click', function (e) {
    e.preventDefault();
    click.closest('.dropdown__list').previousElementSibling.textContent = dropdownLink.textContent;
    click.closest('.dropdown__list').className = 'dropdown__list';
  },
  false
  );
}