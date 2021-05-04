import React, { Component,Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import './StepForm.css';
import '../MainCoursForm.css'
import axios from 'axios'
import useStyles from './styles';
import {useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse,deleteCourse } from '../../../../redux/actions/courseAction';


export class FormCourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        CourseImg: [],
        categories:[]
    }
}
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  fileChangeHandler = e => {
    this.setState({ file: e.target.files[0] })
  }
  componentDidMount()
  {
      
     axios.get('/categorie').then(res => {
        
           
              this.state.categories=res.data;
     console.log('bbb',this.state);
      }).catch(error => {
        console.log('error');          
      })};
  render() {
    const { course, handleChange,uploadHandler } = this.props;
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
           
            margin="normal"
            fullWidth
          />
          <br />
          <br />

 
          <input type="file" 
          name="file"
          id="file_up" 
         onChange={(e)=>uploadHandler(e)}
         Value={course.CourseImg} />

          <label > Course description </label>
          <TextareaAutosize
            placeholder="Insert your course description"
            label="Course subtitle"
            onChange={handleChange('description')}
              defaultValue={course.description}
            rowsMin={3} />

          <br />
          <div className="form-group">
        <label>Category</label>
       <select
          name="category"
          className="form-control"
          onChange={handleChange('categorie')}
        >
          <option>select categorie</option>
        
          {
            this.state.categories.map((c) => (
              <Fragment>
              <option key={c._id} value={c.name}>
                {c.name}
              </option>
              </Fragment>
            ))}
        </select>
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
