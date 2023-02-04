import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TasksFilter(props) {
  const {
    filterChangeHandle,
    clearAllTasks,
    tasks,
    filter,
  } = props;
  const taskCounter = tasks.filter((task) => !task.isTaskCompleted);
  const buttons = [
    {
      name: 'ALL',
      label: 'All',
    },
    {
      name: 'ACTIVE',
      label: 'Active',
    },
    {
      name: 'COMPLETED',
      label: 'Completed',
    },
  ].map((button) => {
    const isActive = filter === button.name;
    const selectedButtonClass = classNames('', { ' selected': isActive });

    return (
      <li key={button.label}>
        <button
          className={selectedButtonClass}
          onClick={() => filterChangeHandle(button.name)}
          type="button"
        >
          {button.label}
        </button>
      </li>
    );
  });

  return (
    <footer className="footer h-25">
      <span className="todo-count">
        {taskCounter.length}
        items left
      </span>
      <ul className="filters">{buttons}</ul>
      <button className="clear-completed" onClick={clearAllTasks} type="button">
        Clear completed
      </button>
    </footer>
  );
}

TasksFilter.propTypes = {
  filterChangeHandle: PropTypes.func,
  clearAllTasks: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.shape({})),
  filter: PropTypes.string,
};

TasksFilter.defaultProps = {
  filterChangeHandle: () => {
  },
  clearAllTasks: () => {
  },
  tasks: [],
  filter: '',
};

export default TasksFilter;
