let input = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');
console.log(input.value)

button.addEventListener('click', createTodo);

function createTodo(event) {
  event.preventDefault();
  console.log('creating todo');
  const todo = input.value;

  if (!todo) {
    // alert('Please enter a todo');
    throw new Error('Please enter a todo');
    return;
  }

  // create a text node
  const textNode = document.createTextNode(todo);
  // create a list item element
  let todoContent = document.createElement('span');
  // append the text node to the list item
  todoContent.appendChild(textNode);

  // create delete button
  let deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  // deleteButton.style.marginLeft = '10px';
  deleteButton.classList.add('delete-todo');

  deleteButton.onclick = function () {
    console.log('delete this todo', todoContent.textContent)
    li.remove();
  }

  const li = document.createElement('li');

  // put todoContent and delete inside of the li
  li.appendChild(todoContent);
  li.appendChild(deleteButton);

  // append the list item to the unordered list
  ul.appendChild(li);

  // clear the input field
  // form.reset();
  input.value = '';
  // input.autofocus = true;
}

//
// button.onclick = function () {
//   console.log(input.value);
// }
