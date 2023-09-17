import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import TodoInput from '../TodoInput/TodoInput';
import Footer from '../Footer/Footer';
import TodoList from '../TodoList/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <TodoInput tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} />
      <Footer />
    </div>
  );
}

App.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
      // eslint-disable-next-line comma-dangle
    })
  ),
};

App.defaultProps = {
  tasks: [],
};

export default App;
