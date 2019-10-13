"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var display = document.querySelector('#display');
  var buttonAdd = document.querySelector('#button-add');
  var buttonRemove = document.querySelector('#button-remove');
  var buttonClear = document.querySelector('#button-clear');
  var editForm = document.querySelector('#edit-form');
  var editMessage = document.querySelector('#edit-message');
  var elementToEdit;
  var editButtons;
  var todoCounter = 0; //============================== edit todo

  var grabTodoEditButtons = function grabTodoEditButtons() {
    editButtons = document.querySelectorAll('.todo__item-edit-button');
    editButtons.forEach(function (editButton) {
      editButton.addEventListener('click', editButtonClickHandler);
    });
  };

  var editButtonClickHandler = function editButtonClickHandler(e) {
    editForm.classList.toggle('show');
    elementToEdit = e.target.previousElementSibling;
  };

  var setNewTodoContent = function setNewTodoContent(element, content) {
    element.textContent = content;
  };

  var formSubmitHandler = function formSubmitHandler(e) {
    e.preventDefault();
    var newTodoContent = e.target[0].value; //text newTodoContent against Non-blank/non-whitespace string

    var regex = /^(?!\s*$).+/;

    if (regex.test(newTodoContent)) {
      setNewTodoContent(elementToEdit, newTodoContent);
      editForm.classList.toggle('show');
      editMessage.classList.toggle('show');
    } else {
      editMessage.classList.toggle('show');
    }

    e.target[0].value = '';
  };

  editForm.addEventListener('submit', formSubmitHandler); //============================== add todo

  var addTodo = function addTodo() {
    var div = document.createElement('div');
    var paragraph = document.createElement('p');
    var button = document.createElement('button');
    div.classList.add('todo__item');
    paragraph.classList.add('todo__item-label');
    button.classList.add('todo__item-edit-button');
    paragraph.textContent = "Task number ".concat(todoCounter + 1);
    button.textContent = 'Edit';
    div.appendChild(paragraph);
    div.appendChild(button);
    display.appendChild(div);
    grabTodoEditButtons();
    todoCounter++;
  };

  buttonAdd.addEventListener('click', addTodo); //============================== remove todo
  // I'm aware that ChildNode.remove() method is available. Hence .remove() is not supported in IE and regardless I could polyfill the remove() method in Internet Explorer 9, I've decided to use removeChild() instead.

  var removeTodo = function removeTodo() {
    if (display.lastElementChild) {
      display.removeChild(display.lastElementChild);
      todoCounter--;
    }
  };

  buttonRemove.addEventListener('click', removeTodo); //============================== clear todo

  var clearTodo = function clearTodo() {
    while (display.lastElementChild) {
      display.removeChild(display.lastElementChild);
      todoCounter--;
    }
  };

  buttonClear.addEventListener('click', clearTodo);
});
