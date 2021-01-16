import React from 'react'
    import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Bar extends React.Component {
  render () {
    return (
        <AppBar position="static">
  <Toolbar>
  <Typography variant="h6" >
            Robert Ludwick
          </Typography>
          <Button color="inherit" href="https://drive.google.com/uc?export=download&id=1SZKGe93ndXtP52V0cufovE6sEC2lkP1J">Resume</Button>
          <Button color="inherit">Projects</Button>
          
          <Button color="inherit" href="https://github.com/RobertLudwick">Github</Button>
          <Button color="inherit" href="https://www.linkedin.com/in/robert-ludwick-473437151/">Likedin</Button>
  </Toolbar>
</AppBar>
    )
  }
}

export default Bar;

