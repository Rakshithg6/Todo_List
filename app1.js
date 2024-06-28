let todos = [];

function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const newTodo = todoInput.value.trim();

  if (newTodo !== '') {
    todos.push({ text: newTodo, completed: false });
    todoInput.value = '';
    renderTodos();
  }
}

function toggleTodoCompletion(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.textContent = todo.text;

    if (todo.completed) {
      todoItem.style.textDecoration = 'line-through';
    }

    const completeButton = document.createElement('button');
    completeButton.textContent = todo.completed ? 'Undo' : 'Complete';
    completeButton.onclick = () => toggleTodoCompletion(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTodo(index);

    todoItem.appendChild(completeButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  });
}