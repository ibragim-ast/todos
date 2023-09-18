import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem({ task }) {
  const [isChecked, setIsChecked] = useState(task.isComplete);

  useEffect(() => {
    setIsChecked(task.isComplete);
  }, [task.isComplete]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="todo-item__container">
      <input
        id={`checkbox-${task.id}`}
        className="todo-item__checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor={`checkbox-${task.id}`}
        className="todo-item__custom-checkbox"
      >
        {task.text}
      </label>
    </div>
  );
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
