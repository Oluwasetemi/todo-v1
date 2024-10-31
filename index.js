import createTodo from './todo.js'

// bind, call, apply
window.$ = document.querySelectorAll.bind(document);

// prototypes
Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

let button = $('button')[0];

button.on('click', createTodo);
