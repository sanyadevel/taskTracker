import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/index';

function Footer(props) {
  const {
    filterChangeHandle,
    clearAllTasks,
    tasks,
    filter,
  } = props;

  return (
    <div>
      <TasksFilter
        filterChangeHandle={filterChangeHandle}
        clearAllTasks={clearAllTasks}
        tasks={tasks}
        filter={filter}
      />
    </div>
  );
}

export default Footer;

Footer.propTypes = {
  filterChangeHandle: PropTypes.func,
  clearAllTasks: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.shape({})),
  filter: PropTypes.string,
};
Footer.defaultProps = {
  filterChangeHandle: () => {
  },
  clearAllTasks: () => {
  },
  tasks: [],
  filter: '',
};
