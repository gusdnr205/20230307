function getTodoItems() {
    const storedItems = localStorage.getItem('todos');
    return storedItems ? JSON.parse(storedItems) : [];
  }
  
  function saveTodoItems(items) {
    localStorage.setItem('todos', JSON.stringify(items));
  }
  
  function addTodoItem(text) {
    const newItem = {
      id: Date.now(),
      text,
      completed: false,
    };
  
    const todoItems = getTodoItems();
    todoItems.push(newItem);
    saveTodoItems(todoItems);
  }
  
  function toggleTodoItem(id) {
    const todoItems = getTodoItems();
    const item = todoItems.find(item => item.id === id);
    if (item) {
      item.completed = !item.completed;
      saveTodoItems(todoItems);
    }
  }
  
  function deleteTodoItem(id) {
    const todoItems = getTodoItems();
    const index = todoItems.findIndex(item => item.id === id);
    if (index !== -1) {
      todoItems.splice(index, 1);
      saveTodoItems(todoItems);
    }
  }
  
  function renderTodoList() {
    const todoItems = getTodoItems();
    const todoList = document.getElementById('todo-list');
  
    todoList.innerHTML = '';
  
    todoItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.text;
  
      const completeButton = document.createElement('button');
      completeButton.textContent = '완료';
      completeButton.addEventListener('click', () => {
        toggleTodoItem(item.id);
        renderTodoList();
      });
      listItem.appendChild(completeButton);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '삭제';
      deleteButton.addEventListener('click', () => {
        deleteTodoItem(item.id);
        renderTodoList();
      });
      listItem.appendChild(deleteButton);
  
      if (item.completed) {
        listItem.classList.add('completed');
      }
  
      todoList.appendChild(listItem);
    });
  }
  
  const form = document.getElementById('todo-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text !== '') {
      addTodoItem(text);
      input.value = '';
      renderTodoList();
    }
  });
  
  renderTodoList();
  