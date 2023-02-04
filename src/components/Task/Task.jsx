import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formatDistanceToNow } from 'date-fns';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        task: [...prevState.task],
      }));
    }, 5000);
  }

  render() {
    const {
      taskTitle,
      removeTask,
      completeTask,
      isTaskCompleted,
      createdDate,
    } = this.props;
    const classVariable = classNames('', {
      ' completed': isTaskCompleted,
    });
    const isChecked = !!isTaskCompleted;

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
            onChange={completeTask}
          />
          <label htmlFor="taskLabel">
            <span className="description">{taskTitle}</span>
            <span className="created">
              {formatDistanceToNow(createdDate, {
                includeSeconds: true,
                addSuffix: true,
              })}
            </span>
          </label>
          <button className="icon icon-edit" type="button" aria-label="icon-edit" />
          <button
            className="icon icon-destroy"
            onClick={removeTask}
            aria-label="icon-destroy"
            type="button"
          />
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  taskTitle: PropTypes.string,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  isTaskCompleted: PropTypes.bool,
  createdDate: PropTypes.instanceOf(Date),
};

Task.defaultProps = {
  taskTitle: '',
  removeTask: () => {
  },
  completeTask: () => {
  },
  isTaskCompleted: false,
  createdDate: new Date(),
};

export default Task;
