console.log(window.$)
export default function createTodo(event) {
  let input = $('input.todo-input')[0];

  // let button = $('button');
  let ul = $('ul')[0];
  console.dir(input)

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

  // create a status checkbox
  let checkboxSpan = document.createElement('span');
  let statusCheckbox = document.createElement('input');
  statusCheckbox.type = 'checkbox';
  checkboxSpan.appendChild(statusCheckbox);

  statusCheckbox.onchange = function () {
    if (statusCheckbox.checked) {
      li.classList.add('completed');
    }
    else {
      li.classList.remove('completed');
    }
  }


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
  li.appendChild(checkboxSpan);
  li.appendChild(todoContent);
  li.appendChild(deleteButton);

  // append the list item to the unordered list
  ul.appendChild(li);

  // clear the input field
  // form.reset();
  input.value = '';
  // input.autofocus = true;
}
