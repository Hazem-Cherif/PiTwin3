import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormCourseDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { course, handleChange } = this.props;
    return (
        
          <div >
              <div >
            
            
            <br /><br /><br /><br /><br />
            <TextField
              placeholder="Enter Your title"
              label="title"
              onChange={handleChange('title')}
              defaultValue={course.title}
              margin="normal"
              fullWidth
            />
            <br /><br /><br /><br /><br />
            <TextField
              placeholder="Enter description"
              label="description"
              onChange={handleChange('description')}
              defaultValue={course.description}
              margin="normal"
              fullWidth
            />
           </div>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
           
         </div>
       
     
    );
  }
}

export default FormCourseDetails;
