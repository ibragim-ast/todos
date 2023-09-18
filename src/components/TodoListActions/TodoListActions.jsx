/* eslint-disable react/prop-types */
import React from 'react';
import './TodoListActions.css';

// eslint-disable-next-line react/prop-types
function TodoListActions({
  uncompletedTasksCount,
  handleShowAll,
  handleShowActive,
  handleShowCompleted,
  handleDeleteCompleted,
}) {
  return (
    <div className="todo-list-actions">
      <p>
        осталось задач:
        {uncompletedTasksCount}
      </p>
      <button className="todo-list-actions__button" type="submit" onClick={handleShowAll}>
        все
      </button>
      <button className="todo-list-actions__button" type="submit" onClick={handleShowActive}>
        активные
      </button>
      <button className="todo-list-actions__button" type="submit" onClick={handleShowCompleted}>
        завершенные
      </button>
      <button className="todo-list-actions__button" type="submit" onClick={handleDeleteCompleted}>
        удалить завершенные
      </button>
    </div>
  );
}

export default TodoListActions;
