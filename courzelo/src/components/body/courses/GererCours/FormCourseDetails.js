import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import './StepForm.css';
import '../MainCoursForm.css'


export class FormCourseDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { course, handleChange } = this.props;
    return (
      <div className="main">
           
           <div className="side"></div>
<div className="userform">
      <MuiThemeProvider>
        <>
          <h2>Course landing page</h2>
          <AppBar title="Titre du cours" />
          <TextField
            placeholder="Insert your course title"
            label="Course title"
            onChange={handleChange('title')}
              defaultValue={course.title}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Insert the author name"
            label="Author"
            onChange={handleChange('description')}
              defaultValue={course.description}
            margin="normal"
            fullWidth
          />
          <br />
          <br />


          <label > Course description </label>
          <TextareaAutosize
            placeholder="Insert your course description"
            label="Course subtitle"
            rowsMin={3} />

          <br />
          <div className="selectinputs">  
          <form onSubmit={this.handleSubmit}>
            <label>
              <select class="select-css">
                <option>Choisissez une catégorie</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Informatique</option>
                <option>Développement</option>
              </select>
            </label>

          </form>

          <br />

          <form onSubmit={this.handleSubmit}>
            <label>
              <select class="select-css">
                <option>Choisissez une catégorie</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Informatique</option>
                <option>Développement</option>
              </select>
            </label>

          </form>
          
          </div>
          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue</Button>

        </>
      </MuiThemeProvider>
      </div>
      </div>
    );
  }
}

export default FormCourseDetails;
