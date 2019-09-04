import React, { Component } from 'react';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/Person';
import { Box } from '@material-ui/core';

class Navbar extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-10">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Dashboard</a>
  </nav>
  </div>
  <div class="col-2" marginTop = "18%">
      <Box marginTop="4%" marginLeft="35%">
        <Brightness3Icon/>
        <QuestionAnswerIcon/>
        <PersonIcon/>
        </Box>

  </div>
</div>
        )
    }
}

export default Navbar;