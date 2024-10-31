
const Form = () => {
  return React.createElement('form', { id: 'form' }, [
    React.createElement('input', { type: 'text', placeholder: 'Todo React', required: true }),
    React.createElement('button', { type: 'submit' }, 'Add Todo')
  ])
}

const TodoApp = () => {
  const [id, setId] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const [todoText, setTodoText] = React.useState('');

  const createTodo = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;

    setTodos([...todos, { id: id, text: todoText, completed: false }])
    setId(id + 1)
    setTodoText('')
  }

  return React.createElement('div', null, [
    React.createElement('h1', null, 'Todo App React 🚀'),
    React.createElement('form', { id: 'form' }, [
      React.createElement('input', { type: 'text', placeholder: 'Todo React', required: true, value: todoText, onChange: (e) => setTodoText(e.target.value) }),
      React.createElement('button', { type: 'submit', onClick: createTodo }, 'Add Todo',)
    ]),
    React.createElement('ul', null, todos.map(todo => React.createElement('li', { key: todo.id }, todo.text)))
  ])
}

const root = ReactDOM.createRoot(document.getElementById('root-react'))

root.render(React.createElement(TodoApp))
