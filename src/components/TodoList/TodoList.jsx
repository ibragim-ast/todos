import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <TodoItem task={task} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
      // eslint-disable-next-line comma-dangle
    })
  ),
};

TodoList.defaultProps = {
  tasks: [],
};

export default TodoList;
