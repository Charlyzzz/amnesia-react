import React, { Component } from 'react';
import { Box, Flex } from 'reflexbox';

class TasksContainer extends Component {

  render() {
    return (
        <Flex p={1}>
          <Box w={6 / 10} p={2} style={{ backgroundColor: 'grey' }}>
            Listado
          </Box>

          <Box w={4 / 10} p={2} style={{ backgroundColor: 'orange' }}>
            Editor
          </Box>
        </Flex>
    );
  }
}

export default TasksContainer;
