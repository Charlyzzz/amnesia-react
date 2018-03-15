import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {

  render() {
    return (
      <div>
        <h1>Listado de tareas</h1>

        {this.props.tasks.map((task, index) => {
          return (
            <Task
              key={index}
              position={index}
              title={task.title}
              description={task.description}
              selectTask={this.props.selectTask}
            />
          );
        })}
      </div>
    );
  }
}

export default TaskList;