document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('#display');
  const buttonAdd = document.querySelector('#button-add');
  const buttonRemove = document.querySelector('#button-remove');
  const buttonClear = document.querySelector('#button-clear');
  const editForm = document.querySelector('#edit-form');
  const editMessage = document.querySelector('#edit-message');

  let elementToEdit;
  let editButtons;
  let todoCounter = 0;

  //============================== edit todo
  const grabTodoEditButtons = () => {
    editButtons = document.querySelectorAll('.todo__item-edit-button');
    editButtons.forEach((editButton) => {
      editButton.addEventListener('click', editButtonClickHandler);
    });
  }

  const editButtonClickHandler = (e) => {
    editForm.classList.toggle('show');
    elementToEdit = e.target.previousElementSibling;
  }

  const setNewTodoContent = (element, content) => {
    element.textContent = (content);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newTodoContent = e.target[0].value;

    //text newTodoContent against Non-blank/non-whitespace string
    const regex = /^(?!\s*$).+/;
    if(regex.test(newTodoContent)) {
      setNewTodoContent(elementToEdit, newTodoContent);
      editForm.classList.toggle('show');
      editMessage.classList.toggle('show');
    } else {
      editMessage.classList.toggle('show');
    }
    e.target[0].value = '';
  };

  editForm.addEventListener('submit', formSubmitHandler);

  //============================== add todo
  const addTodo = () => {
    const div = document.createElement('div');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');

    div.classList.add('todo__item');
    paragraph.classList.add('todo__item-label');
    button.classList.add('todo__item-edit-button');

    paragraph.textContent = (`Task number ${todoCounter + 1}`);
    button.textContent = ('Edit');

    div.appendChild(paragraph);
    div.appendChild(button);
    display.appendChild(div);

    grabTodoEditButtons();
    todoCounter++;
  };
  buttonAdd.addEventListener('click', addTodo);

  //============================== remove todo
  // I'm aware that ChildNode.remove() method is available. Hence .remove() is not supported in IE and regardless I could polyfill the remove() method in Internet Explorer 9, I've decided to use removeChild() instead.
  const removeTodo = () => {
    if(display.lastElementChild) {
      display.removeChild(display.lastElementChild);
      todoCounter--;
    }
  };
  buttonRemove.addEventListener('click', removeTodo);

  //============================== clear todo
  const clearTodo = () => {
    while(display.lastElementChild) {
      display.removeChild(display.lastElementChild);
      todoCounter--;
    }
  };
  buttonClear.addEventListener('click', clearTodo);
});
