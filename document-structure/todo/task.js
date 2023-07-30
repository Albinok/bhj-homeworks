const taskInput = document.querySelector('.tasks__input');
const taskAdd = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');

taskAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (taskInput.value.trim()) {

    taskList.insertAdjacentHTML('afterEnd', `<div class="task">
    <div class="task__title"> ${taskInput.value} </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`);
    taskInput.value = '';

    const taskRemove = document.querySelector('.task__remove');
    taskRemove.addEventListener('click', (event) => {
    event.preventDefault();
    taskRemove.parentElement.remove();
    });
  }
});

