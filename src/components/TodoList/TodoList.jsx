import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

// eslint-disable-next-line react/prop-types
function TodoList({ filteredTasks, updateTask }) {
  return (
    <ul className="todo-list">
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <TodoItem
            task={task}
            updateTask={updateTask}
          />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  filteredTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  filteredTasks: [],
};

export default TodoList;
