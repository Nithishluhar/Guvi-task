import React, { useState } from 'react';
import './App.css';

function Sample() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddTodo = () => {
    if (taskName.trim() !== '') {
      setTodos([...todos, { name: taskName }]);
      setTaskName('');
    }
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setTaskName(todos[index].name);
  };

  const handleUpdateTodo = () => {
    if (editingIndex !== -1 && taskName.trim() !== '') {
      const updatedTodos = todos.map((todo, index) =>
        index === editingIndex ? { ...todo, name: taskName } : todo
      );
      setTodos(updatedTodos);
      setTaskName('');
      setEditingIndex(-1);
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        {editingIndex === -1 ? (
          <button onClick={handleAddTodo}>Add Todo</button>
        ) : (
          <button onClick={handleUpdateTodo}>Update Todo</button>
        )}
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            onEditClick={() => handleEditClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

function TodoCard({ todo, onEditClick }) {
  return (
    <div className="todo-card">
      <h3>{todo.name}</h3>
      <button onClick={onEditClick}>Edit</button>
    </div>
  );
}

export default Sample;
