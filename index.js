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
  const li = document.createElement('li');
  // append the text node to the list item
  li.appendChild(textNode);
  // append the list item to the unordered list
  ul.appendChild(li);

  // clear the input field
  // form.reset();
  input.value = '';
}

//
// button.onclick = function () {
//   console.log(input.value);
// }
