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
  activeFilter,
}) {
  return (
    <div className="todo-list-actions">
      <p className="todo-list-actions__left-tasks-text">
        {`осталось задач: 
        ${uncompletedTasksCount}`}
      </p>
      <button className={`todo-list-actions__button ${activeFilter === 'all' ? 'active' : ''}`} type="submit" onClick={handleShowAll}>
        Все
      </button>
      <button className={`todo-list-actions__button ${activeFilter === 'active' ? 'active' : ''}`} type="submit" onClick={handleShowActive}>
        Активные
      </button>
      <button className={`todo-list-actions__button ${activeFilter === 'completed' ? 'active' : ''}`} type="submit" onClick={handleShowCompleted}>
        Завершенные
      </button>
      <button className="todo-list-actions__delete-button" type="submit" onClick={handleDeleteCompleted}>
        Удалить завершенные
      </button>
    </div>
  );
}

export default TodoListActions;
