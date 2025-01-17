// src/TodoList.js
import React, { useReducer, useState } from 'react';
import './TodoList.css';

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() === '') return;
    dispatch({ type: 'ADD_TODO', text: todoText });
    setTodoText('');
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
