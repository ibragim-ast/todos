import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem({ task }) {
  const [isChecked, setIsChecked] = useState(task.isComplete);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span>{task.text}</span>
    </div>
  );
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
  }).isRequired, // Обязательно
};

export default TodoItem;
