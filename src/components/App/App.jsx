import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import TodoInput from '../TodoInput/TodoInput';
import Footer from '../Footer/Footer';
import TodoList from '../TodoList/TodoList';
import TodoListActions from '../TodoListActions/TodoListActions';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleShowAll = () => {
    setFilter('all');
  };

  const handleShowActive = () => {
    setFilter('active');
  };

  const handleShowCompleted = () => {
    setFilter('completed');
  };

  const handleDeleteCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.isComplete);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.isComplete;
    }
    if (filter === 'completed') {
      return task.isComplete;
    }
    return true;
  });

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks && Array.isArray(savedTasks)) {
      setTasks(savedTasks);
    }
  }, []);

  const countUncompletedTasks = () => tasks.filter((item) => !item.isComplete).length;

  const uncompletedTasksCount = countUncompletedTasks();

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <TodoInput tasks={tasks} setTasks={setTasks} />
        <div className="main__todo-list-container">
          <TodoList tasks={tasks} updateTask={updateTask} filteredTasks={filteredTasks} />
        </div>
        <TodoListActions
          uncompletedTasksCount={uncompletedTasksCount}
          handleShowAll={handleShowAll}
          handleShowActive={handleShowActive}
          handleShowCompleted={handleShowCompleted}
          handleDeleteCompleted={handleDeleteCompleted}
          activeFilter={filter}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
