import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getAllCoursesByUser, getCourses } from '../../../redux/actions/courseAction';
import useStyles from './GererCours/styles';
import {Link} from 'react-router-dom'

function GererCourses() {
  const token = useSelector(state => state.token);
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getAllCoursesByUser(token))
  }, [ dispatch(getAllCoursesByUser(token))]);
  
    return (
        

<div style={{width: 1400,marginLeft:50,marginBottom:180}} >

  <div>
    <h1><b><p style={{paddingLeft: 60, paddingTop: '50PX'}}>courses</p></b></h1>  
  </div>
  <br /><br />
  <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{marginLeft: 40, marginRight: 40, padding: 20, textAlign: 'center'}}>
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <span aria-hidden="true" style={{marginLeft: 500}} className="close" data-dismiss="alert" aria-label="Close"> x</span>
  </div>
  <br /><br />
  <div>
    <div className="container">
      <div className="d-flex flex-row">
        <div className="search-container" style={{marginRight: 50}}>
          <form action="/action_page.php">
            <input style={{marginRight: 20,height:10,borderColor: 'black'}} type="text" placeholder="Search.." name="search" />
            
          </form>
        </div>
        <div className="dropdown" style={{marginRight: 500}}>
          <a style={{backgroundColor: 'transparent',height:40, borderColor: 'black', color: 'black'}} className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Newest
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-primary" style={{backgroundColor: '#f2a92c',borderColor: '#f2a92c',color: 'white'}}><b><Link to={`/addcourse/${token}`} >New Course</Link></b></button>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <div>
      <table style={{borderColor: 'white'}} width="95%" border="none" align="center">
        <tbody>
        {courses.map((course) => (
          <Fragment>
          <tr>
            <td ><img src="./assets/hh.png" className="img-thumbnail" /></td>
            <td width="20%"><h5><b>{course.title}</b></h5></td>
            <td width="60%" colSpan={2}><label htmlFor="file">Finish your course:</label>
              <progress id="file" max={100} value={70}> 70% </progress></td>
              <td><Link to={`/modifiersupcourse/${course._id}`} >modifier/supprimer</Link></td>
          </tr>
         </Fragment>
          ))}
        </tbody></table>
    </div>
   
  </div>


       
    </div>
        
    )
}

export default GererCourses
