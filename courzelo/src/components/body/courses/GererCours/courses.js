import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getCourses } from '../../../../redux/actions/courseAction';
import { Link } from 'react-router-dom'
function Courses() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [ dispatch]);
  
 
    return (
        <div>
          <section className="page-banner pt-200 pb-100 bg_cover" style={{backgroundImage: 'url("assets/images/hero-bg.jpg")'}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center banner-content">
          <h1 className="text-white">Courses Page</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Courses</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

            <section id="courses" className="course-area pt-140 pb-170">
  <div className="container">
    <div className="row">
      <div className="mx-auto col-xl-6 col-lg-7 col-md-10">
        <div className="text-center section-title mb-50">
          <h2 className="mb-15 wow fadeInUp" data-wow-delay=".2s">Popular Courses</h2>
          <p className="wow fadeInUp" data-wow-delay=".4s">eStore UI Kit comes with all essential features, sections and elements you need
            to design and develop web UI efficiently.</p>
        </div>
      </div>
    </div>
    <div className="row mb-30" style={{marginLeft:'100px'}}>

    {courses.map((course) => (
          <Fragment>
          <div className="card " style={{backgroundColor:'#FFFFFF' ,width:'300px',height:'440px' ,paddingTop :'0px', paddingLeft:'0px', paddingRight:'0px',marginRight:'30px' }}>
      <div style={{backgroundColor: '#f2a92c',height:'50px',textAlign:'center',paddingTop:'5px',fontSize:'20px',color: '#FFFFFF'}}> <b>{course.title}</b>  </div>
      <div className="card-body">
     
      <div style={{width: '200px',height:'150'}}>
        <img
            src={course.CourseImg}
            
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
        <p className="card-p  mt-2" style={{color:'#000000',fontSize:'15px'}}>{course.description} </p>
        <p className="black-9" style={{color:'#000000',fontSize:'15px'}}>Category: informatique</p>
        <p className="black-8" style={{color:'#000000',fontSize:'15px'}}>Added on 12/32/52</p>
       
        

        <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1" style={{backgroundColor: '#f2a92c',marginLeft:'10px',color: '#FFFFFF'}} >View Course</button>

        <button className="btn btn-outline-warning mt-2 mb-2 card-btn-1  " style={{backgroundColor: '#f2a92c',marginLeft:'10px',color: '#FFFFFF'}}>
        Subscribe
        </button>

       
      </div>
    </div>
            </Fragment>
        ))}

      
      
   
      
    </div>
    
    <div className="row">
      <div className="col-xl-12">
        <div className="text-center view-all-btn">
        <Link to ="/allcourses" className="main-btn">View All Course</Link>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Courses
