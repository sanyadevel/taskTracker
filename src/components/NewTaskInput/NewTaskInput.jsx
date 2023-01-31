import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = { taskInputValue: '' };
  }

  onInputChangeHandler = (e) => {
    const { addTask } = this.props;
    const { taskInputValue } = this.state;
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      addTask(taskInputValue);
      e.target.value = '';
    }
  };

  render() {
    return (
      <input
        className="new-todo "
        placeholder="What needs to be done?"
        onKeyUp={this.onInputChangeHandler}
        onChange={(e) => this.setState({ taskInputValue: e.target.value })}
      />
    );
  }
}

export default NewTaskInput;

NewTaskInput.propTypes = { addTask: PropTypes.func };
NewTaskInput.defaultProps = {
  addTask: () => {
  },
};
