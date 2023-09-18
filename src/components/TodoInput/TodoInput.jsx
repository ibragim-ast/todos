import React, { useState } from 'react';
import './TodoInput.css';

// eslint-disable-next-line react/prop-types
function TodoInput({ tasks, setTasks }) {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: Date.now(), text: task, isComplete: false };
      setTasks([...tasks, newTask]);
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
      setTask('');
    }
  };

  return (
    <div className="todo-input">
      <input
        className="todo-input__input"
        type="text"
        id="taskInput"
        value={task}
        onChange={handleInputChange}
        placeholder="Введите новую задачу"
        required
      />
      <button
        className={`todo-input__submit-button ${
          !task ? 'todo-input__submit-button_disabled' : ''
        }`}
        id="submitButton"
        type="submit"
        onClick={handleAddTask}
        aria-label="Добавить задачу"
      >
        &crarr;
      </button>
    </div>
  );
}

export default TodoInput;
