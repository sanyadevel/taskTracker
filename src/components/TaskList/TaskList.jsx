import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/index';

class TaskList extends Component {
  componentDidMount() {
    const { differenceTimeList } = this.props;
    setInterval(() => {
      differenceTimeList();
    }, 5000);
  }

  render() {
    const {
      filteredTasks,
      removeTask,
      completeTask,
    } = this.props;
    return (
      <div className="todo-list">
        <ul className="p-0 m-0">
          {filteredTasks()
            .map((task) => (
              <Task
                removeTask={removeTask}
                completeTask={completeTask}
                key={task.id}
                taskTitle={task.taskTitle}
                id={task.id}
                isCompletedCondition={task.isCompleted}
                task={task}
                createdDate={task.createdDate}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;

TaskList.propTypes = {
  filteredTasks: PropTypes.func,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  differenceTimeList: PropTypes.func,
};

TaskList.defaultProps = {
  filteredTasks: () => {
  },
  removeTask: () => {
  },
  completeTask: () => {
  },
  differenceTimeList: () => {
  },
};
