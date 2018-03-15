import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';

class Editor extends Component {

  state = {
    task: null
  };

  componentWillReceiveProps({ task }) {
    this.setState({ task });
  }

  render() {
    return (
      <div>
        <h1>Editor de tareas</h1>
        {this.props.task !== null ?
          this.renderTask() : this.noTaskSelectedMessage()
        }
      </div>
    );
  }

  renderTask = () => {
    return (
      <div>
        <TextField
          id="title"
          floatingLabelText="Title"
          value={this.state.task.title}
          onChange={this.titleChanged}
          fullWidth
        />
        <TextField
          id="description"
          floatingLabelText="Description"
          value={this.state.task.description}
          onChange={this.descriptionChanged}
          fullWidth
        />
        <br/>
        <RaisedButton
          label="Save"
          onClick={this.saveTask}
          primary/>

        <RaisedButton
          label="Cancel"
          onClick={this.props.cancelEdition}
          secondary/>
      </div>
    );
  };

  noTaskSelectedMessage = () => {
    return (
      <div>
        Nothing to do here...
      </div>
    );
  };

  descriptionChanged = (event, newDescription) => {
    const updatedTask = { ...this.state.task, description: newDescription };
    this.setState({ task: updatedTask });
  };

  titleChanged = (event, newTitle) => {
    const updatedTask = { ...this.state.task, title: newTitle };
    this.setState({ task: updatedTask });
  };

  saveTask = () => {
    this.props.updateSelectedTask(this.state.task);
  };
}

export default Editor;