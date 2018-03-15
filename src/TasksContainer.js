import React, { Component } from 'react';
import { Box, Flex } from 'reflexbox';
import TaskList from './TaskList';
import Editor from './Editor';
import Amnesia from './amnesia';
import * as Ramda from 'ramda';

class TasksContainer extends Component {

  state = {
    selectedTask: null,
    selectedTaskPosition: null,
    tasks: []
  };

  constructor(props) {
    super(props);
    Amnesia.allTasks()
      .then(this.updateTaskFromService);
  }

  render() {
    return (
      <Flex p={1}>
        <Box w={6 / 10} p={2} style={{ backgroundColor: 'grey' }}>
          <TaskList
            tasks={this.state.tasks}
            selectTask={this.selectTask}/>
        </Box>

        <Box w={4 / 10} p={2} style={{ backgroundColor: 'orange' }}>
          <Editor
            task={this.state.selectedTask}
            updateSelectedTask={this.updateSelectedTask}
            cancelEdition={this.unselectTask}/>
        </Box>
      </Flex>
    );
  }

  selectTask = (selectedTaskPosition) => {
    const selectedTask = this.state.tasks[selectedTaskPosition];
    this.setState({ selectedTask, selectedTaskPosition });
  };

  updateTaskFromService = (tasks) => {
    this.setState({ tasks });
  };

  updateSelectedTask = (updatedTask) => {
    const tasks = Ramda.update(this.state.selectedTaskPosition, updatedTask, this.state.tasks);
    this.setState({ tasks, selectedTask: updatedTask });
    Amnesia.update(updatedTask);
  };

  unselectTask = () => {
    this.setState({ selectedTask: null });
  };
}

export default TasksContainer;
