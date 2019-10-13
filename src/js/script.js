document.addEventListener('DOMContentLoaded', () => {
  const buttonAdd = document.querySelector('#button-add');
  const buttonRemove = document.querySelector('#button-remove');
  const buttonClear = document.querySelector('#button-clear');
  const todoDisplay = document.querySelector('#display');
  let todoCounter = 0;

  const addTodo = () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = (`Task number ${todoCounter + 1}`);
    todoDisplay.appendChild(paragraph);
    todoCounter++;
  };

  // I'm aware that ChildNode.remove() method is available. Hence .remove() is not supported in IE and regardless I could polyfill the remove() method in Internet Explorer 9, I've decided to use removeChild() instead.
  const removeTodo = () => {
    if(todoDisplay.lastElementChild) {
      todoDisplay.removeChild(todoDisplay.lastElementChild);
      todoCounter--;
    }
  };

  const clearTodo = () => {
    while(todoDisplay.lastElementChild) {
      todoDisplay.removeChild(todoDisplay.lastElementChild);
      todoCounter--;
    }
  };

  buttonAdd.addEventListener('click', addTodo);
  buttonRemove.addEventListener('click', removeTodo);
  buttonClear.addEventListener('click', clearTodo);
});
