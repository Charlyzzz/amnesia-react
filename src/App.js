import React, { Component } from 'react';
import { Box, Flex } from 'reflexbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TaskContainer from './TasksContainer';


class App extends Component {

  render() {
    return (
        <MuiThemeProvider>
          <Flex wrap p={2} column style={{ backgroundColor: 'blue' }}>

            <Box p={50} style={{ backgroundColor: 'orange' }}>
              NavBar
            </Box>

            <Box p={2} style={{ backgroundColor: 'purple' }}>
              <TaskContainer/>
            </Box>
          </Flex>
        </MuiThemeProvider>
    );
  }
}

export default App;
