"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var buttonAdd = document.querySelector('#button-add');
  var buttonRemove = document.querySelector('#button-remove');
  var buttonClear = document.querySelector('#button-clear');
  var todoDisplay = document.querySelector('#display');
  var todoCounter = 0;

  var addTodo = function addTodo() {
    var paragraph = document.createElement('p');
    paragraph.textContent = "Task number ".concat(todoCounter + 1);
    todoDisplay.appendChild(paragraph);
    todoCounter++;
  }; // I'm aware that ChildNode.remove() method is available. Hence .remove() is not supported in IE and regardless I could polyfill the remove() method in Internet Explorer 9, I've decided to use removeChild() instead.


  var removeTodo = function removeTodo() {
    if (todoDisplay.lastElementChild) {
      todoDisplay.removeChild(todoDisplay.lastElementChild);
      todoCounter--;
    }
  };

  var clearTodo = function clearTodo() {
    while (todoDisplay.lastElementChild) {
      todoDisplay.removeChild(todoDisplay.lastElementChild);
      todoCounter--;
    }
  };

  buttonAdd.addEventListener('click', addTodo);
  buttonRemove.addEventListener('click', removeTodo);
  buttonClear.addEventListener('click', clearTodo);
});
