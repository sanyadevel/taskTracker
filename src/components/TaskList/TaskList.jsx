import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/index';

function TaskList(props) {
  const {
    filteredTasks,
    removeTask,
    completeTask,
  } = props;

  return (
    <div className="todo-list">
      <ul className="p-0 m-0">
        {filteredTasks()
          .map((task) => (
            <Task
              removeTask={() => removeTask(task.id)}
              completeTask={() => completeTask(task.id)}
              key={task.id}
              taskTitle={task.taskTitle}
              isTaskCompleted={task.isTaskCompleted}
              task={task}
              createdDate={task.createdDate}
            />
          ))}
      </ul>
    </div>
  );
}

TaskList.propTypes = {
  filteredTasks: PropTypes.func,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
};

TaskList.defaultProps = {
  filteredTasks: () => {
  },
  removeTask: () => {
  },
  completeTask: () => {
  },
};

export default TaskList;
