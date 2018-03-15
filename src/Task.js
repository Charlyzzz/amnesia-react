import React, { Component } from 'react';

class Task extends Component {

  render() {
    return (
      <div onClick={this.taskClicked}>
        <div style={{ border: '1px solid white', margin: 5, padding: 15, borderRadius: 10 }}>
          <b>Title:</b> {this.props.title}
          <br/>
          <b>Description:</b> {this.props.description}
        </div>
      </div>
    );
  }

  taskClicked = () => {
    this.props.selectTask(this.props.position);
  };
}

export default Task;