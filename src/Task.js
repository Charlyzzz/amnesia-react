import React, { Component } from 'react';

class Task extends Component {

  render() {
    return (
      <div onClick={this.taskClicked}>
        <div style={{ border: '1px solid white', margin: 10, padding: 5, borderRadius: 10 }}>
          Title: {this.props.title}
          <br/>
          Description: {this.props.description}
        </div>
      </div>
    );
  }

  taskClicked = () => {
    this.props.selectTask(this.props.position);
  };
}

export default Task;