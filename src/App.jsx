import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

import NewTaskForm from './components/NewTaskForm/index';
import TaskList from './components/TaskList/index';
import NewTaskInput from './components/NewTaskInput/NewTaskInput';
import Footer from './components/Footer/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          taskTitle: 'Completed task',
          id: crypto.randomUUID(),
          isCompleted: false,
          createdDate: new Date(),
        },
        {
          taskTitle: 'Editing task',
          id: crypto.randomUUID(),
          isCompleted: false,
          createdDate: new Date(),
        },
        {
          taskTitle: 'Active task',
          id: crypto.randomUUID(),
          isCompleted: false,
          createdDate: new Date(),
        },
      ],
      filter: 'ALL', // ALL,ACTIVE, DONE
    };
  }

  addTask = (newTaskTitle) => {
    const { tasks } = this.state;
    const newTask = {
      taskTitle: newTaskTitle,
      id: crypto.randomUUID(),
      isCompleted: false,
      createdDate: new Date(),
    };
    this.setState({ tasks: [...tasks, newTask] });
  };

  differenceTimeList = () => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => ({
        ...task,
        differenceAmountOfTime: formatDistanceToNow(task.createdDate, {
          includeSeconds: true,
          addSuffix: true,
        }),
      })),
    }));
  };

  removeTask = (id) => {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter((task) => task.id !== id) });
  };

  completeTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      }),
    }));
  };

  filterChangeHandle = (filter) => {
    this.setState({ filter });
    //  filter:filter
  };

  changeFilterCategory = () => {
    const {
      tasks,
      filter,
    } = this.state;
    switch (filter) {
      case 'ACTIVE':
        return tasks.filter((task) => !task.isCompleted);
      case 'COMPLETED':
        return tasks.filter((task) => task.isCompleted);
      default:
        return tasks; // for ALL
    }
  };

  clearAllTasks = () => {
    const { tasks } = this.state;
    const clear = tasks.filter((task) => !task.isCompleted);
    this.setState({ tasks: clear });
    this.differenceTimeList();
  };

  render() {
    const {
      tasks,
      filter,
    } = this.state;
    return (
      <section className="todoapp">
        <NewTaskForm />
        <NewTaskInput addTask={this.addTask} />
        <TaskList
          tasks={tasks}
          removeTask={this.removeTask}
          completeTask={this.completeTask}
          filteredTasks={this.changeFilterCategory}
          differenceTimeList={this.differenceTimeList}
        />
        <Footer
          tasks={tasks}
          filterChangeHandle={this.filterChangeHandle}
          clearAllTasks={this.clearAllTasks}
          filter={filter}
        />
      </section>
    );
  }
}

export default App;
