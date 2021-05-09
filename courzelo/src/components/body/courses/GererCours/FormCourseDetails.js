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
import swal from 'sweetalert';
import { Link ,Route,Redirect} from 'react-router-dom'
import { addCourse } from '../../../../redux/actions/courseAction';



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
  
  handleSubmit = async (dispatch) => {

    alert('test');
    //e.preventDefault();
    const res = await axios.post('/course',this.props.course,{headers: {Authorization: this.props.token}}).then(res => {
  
    })
   
  

  };
  alert = e => {
   
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: {
        cancel: "cancel",
        catch: {
          text: "yes",
          value: "catch",
        },
        
        defeat: "no",
      },
      
    })
    .then((value) => {
      switch (value) {
 
        case "defeat":
          swal("Pikachu fainted! You gained 500 XP!");

          window.location = "/Gerercoursemodifsupp";
          break;
     
        case "catch":
          swal("Gotcha!", "Pikachu was caught!", "success");
          this.handleSubmit();
          window.location = "/Gerercoursemodifsupp";
          
          
          
          break;
     
        default:
          swal("Got away safely!");
      }
    });
   
  };

  fileChangeHandler = e => {
    this.setState({ file: e.target.files[0] })
  }
  componentDidMount()
  {
      
     axios.get('/categorie').then(res => {
        
           
              this.state.categories=res.data;
   
      }).catch(error => {
               
      })};
  render() {
    const { course, handleChange,uploadHandler } = this.props;
    return (
      <div className="main">
           <div className="side"></div>
          
<div className="userform"style={{ marginLeft: '-400px', width: '1550px' }}>
      <MuiThemeProvider>
        <>
        
          
          <h2>Course landing page</h2>
          <AppBar title="Titre du cours" />
          <TextField
          className="inputline"
            placeholder="Insert your course title"
            label="Course title"
            onChange={handleChange('title')}
              defaultValue={course.title}
            margin="normal"
            fullWidth 
          />
          <br />
          <TextField className="inputline"
            placeholder="Insert the author name"
            label="Author"
            onChange={handleChange('author')}
            defaultValue={course.author}
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
          <img src={course.CourseImg} alt></img>

<br/>
<br />
          <br />
          <label > Course description </label>
          <TextareaAutosize
            placeholder="Insert your course description"
            label="Course subtitle"
            onChange={handleChange('description')}
              defaultValue={course.description}
            rowsMin={3} />

          <br />
          <div className="taxonomy">
            <div >
          <label > Prerequisite </label>
          <TextareaAutosize
            placeholder="Insert your course description"
            label="Course subtitle"
            onChange={handleChange('prerequisite')}
              defaultValue={course.prerequisite}
            rowsMin={1} />
</div>
            <div>
          <label > What to learn </label>
          <TextareaAutosize
            placeholder="Insert your course description"
            label="Course subtitle"
            onChange={handleChange('comprendre')}
              defaultValue={course.comprendre}
            rowsMin={1} />
</div>
</div>

          <br />
          
          
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
            style={{ marginLeft: '550px',marginTop:'100px' }}
          >Continue</Button>
        
          <Button
            color="primary"
            variant="contained"
           onClick={this.alert}
            style={{ marginLeft: '50px',marginTop:'100px' }}
          >Annuler</Button>

        </>
      </MuiThemeProvider>
      </div>
      </div>
    );
  }
}

export default FormCourseDetails;
