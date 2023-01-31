import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formatDistanceToNow } from 'date-fns';

function Task(props) {
  const {
    taskTitle,
    removeTask,
    completeTask,
    isCompletedCondition,
    id,
    createdDate,
  } = props;
  const classVariable = classNames('', {
    ' completed': isCompletedCondition,
  });

  const isChecked = !!isCompletedCondition;

  return (
    <li
      className={classVariable}
      style={{
        borderBottom: '1px solid #e6e6e6',
        listStyle: 'none',
      }}
    >
      <div className="view">
        <input
          className="toggle "
          type="checkbox"
          checked={isChecked}
          onChange={() => completeTask(id)}
        />
        <label htmlFor="taskLabel">
          <span className="description">
            {taskTitle}
          </span>
          <span className="created">
            {formatDistanceToNow(createdDate, {
              includeSeconds: true,
              addSuffix: true,
            })}
          </span>
        </label>
        <button className="icon icon-edit" type="button" aria-label="icon-edit" />
        <button className="icon icon-destroy" onClick={() => removeTask(id)} aria-label="icon-destroy" type="button" />
      </div>
    </li>
  );
}

export default Task;

Task.propTypes = {
  taskTitle: PropTypes.string,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  isCompletedCondition: PropTypes.bool,
  id: PropTypes.string,
  createdDate: PropTypes.instanceOf(Date),
};

Task.defaultProps = {
  taskTitle: '',
  removeTask: () => {
  },
  completeTask: () => {
  },
  isCompletedCondition: false,
  id: '',
  createdDate: new Date(),
};
