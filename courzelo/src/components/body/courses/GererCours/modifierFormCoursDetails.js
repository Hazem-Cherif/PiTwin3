import React, {Fragment,useState,useCallback,useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse,deleteCourse } from '../../../../redux/actions/courseAction';
import { getCategories } from '../../../../redux/actions/categorieAction';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import  Modifiersupintro from './modifierIntro';
import './StepForm.css';
import '../MainCoursForm.css'
import axios from 'axios'


import { Link } from 'react-router-dom'
function ModifierFormCours() {
  const classes = useStyles();
    const {id} = useParams();
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);
    const categories = useSelector(state => state.categories);
    const [ListCategories, setCategorieData] = useState({ 
        name: '',
        description: ''});
        
    const [postcourse, setCourseData] = useState({ 
        title: '',
        description: '',
        introduction:
        {
          text1: '',
          video1: '',
          img1: '',
    
          text2: '',
          video2: '',
          img2: '',
    
          text3: '',
          video3: '',
          img3: '',
    
          text4: '',
          video4: '',
          img4: ''
    
    
        },
        chapitres: [],
        conclusion:
        {
          text1: '',
          video1: '',
          img1: '',
    
          text2: '',
          video2: '',
          img2: '',
    
          text3: '',
          video3: '',
          img3: '',
    
          text4: '',
          video4: '',
          img4: ''
    
        },
        CourseImg: '',
        categorie:''
    });
    useEffect(() => {
        dispatch(getCategories());
      if(courses.length !== 0){
        courses.forEach(course => {
              if(course._id === id){
                setCourseData(course)
                  
              }
          })
      }
  },[courses, id, dispatch])

 
    const handleSubmit = async (e) => {
      alert('hello');
      e.preventDefault();
      console.log('test1',postcourse);
        dispatch(updateCourse(id, postcourse));
        console.log('test2',postcourse);


      }
 
    return (
        <div>
            <div className="main">
           
           <div className="side"></div>
<div className="userform">
  <form onSubmit={handleSubmit}>
      <MuiThemeProvider>
        <>
          <h2>Course landing page</h2>
          <AppBar title="Titre du cours" />
          <TextField
            placeholder="Insert your course title"
            label="Course title"
            value={postcourse.title}
            margin="normal"
            fullWidth
            onChange={(e) => setCourseData({ ...postcourse, title: e.target.value })}
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

 <div className="wpb_column vc_column_container vc_col-sm-12">
     <div className="wpb_column vc_column_container vc_col-sm-6">
 <input type="file" 
          name="file"
          id="file_up" 
      
          onChange={(e) => setCourseData({ ...postcourse, CourseImg: e.target.value })}
       />
       </div>
       <div className="wpb_column vc_column_container vc_col-sm-6">
           <img src = {postcourse.CourseImg} 
            />
       </div>
       </div>
        

          <label > Course description </label>
          <TextareaAutosize
            placeholder="Insert your course description"
            value={postcourse.description}
            onChange={(e) => setCourseData({ ...postcourse, description: e.target.value })}
            label="Course subtitle"
            rowsMin={3} />

          <br />
          <div className="form-group">
        <label>Category</label>
       <select
          name="category"
          className="form-control"
          value={postcourse.categorie}
          onChange={(e) => setCourseData({ ...postcourse, categorie: e.target.value })}
          
        >
          <option>select categorie</option>

          {
            categories.map((c) => (
              <Fragment>
              <option key={c._id} value={c.name} >
                {c.name}
              </option>
              </Fragment>
            ))}  
        
         
        </select>
      </div>
      <div >
          <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
            < div className="wpb_wrapper">
              <div className="thim-sc-button text-right hide-separator ">
                  <a href="courses/index.html" target="_self" className="btn btn-primary btn-lg">
                  <Link to={`/modifiersupintro/${postcourse._id}`} >
                    <span className="text" style={{color:'#FFFFFF'}}>Continue</span>
                    </Link>
                  </a>
                </div>
              </div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
              <div className="wpb_wrapper"><div className="thim-sc-button text-left hide-separator ">
                  <a target="_self" className="btn btn-basic btn-lg" >
                  <Button     type="submit" >modifier</Button>
                  </a>
                </div>
               

              </div>
              </div></div></div>

        </>
      </MuiThemeProvider>
      </form>
      </div>
      </div>
        </div>
    )
}

export default ModifierFormCours
