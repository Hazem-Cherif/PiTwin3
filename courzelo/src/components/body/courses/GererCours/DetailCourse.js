import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getCourses } from '../../../../redux/actions/courseAction';
import {useParams, useHistory} from 'react-router-dom'


function DetailCourse() {
  
  const {id} = useParams();
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);
    console.log('j',courses);
    const [postcourse, setCourseData] = useState({ 
      title: '',
      description: '',
      introduction:
      {
        text1: '',
        video1: '',
        img1: '',
        filePath1:'',
  
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
  
     });
    useEffect(() => {
      if(courses.length !== 0){
        courses.forEach(course => {
              if(course._id === id){
                setCourseData(course)
                  
              }
          })
      }
  },[courses, id])
 
    return (
        <div>
        
  <section className="page-banner pt-200 pb-100 bg_cover" style={{backgroundImage: 'url("assets/images/hero-bg.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="banner-content text-center">
            <h1 className="text-white">Course Single</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Course Single</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="course" className="course-area pt-140" style={{width:'1350px',marginLeft:'100px'}}>
    
      <div className="row">
        <div className="col-lg-8">
          <div className="single-course-wrapper">
            <div className="course-title mb-30">
              <h3 className="mb-20">{postcourse.title}</h3>
              <p>you can read this course</p>
            </div>
            <div className="course-img mb-30">
              <img src={postcourse.CourseImg}  style={{width:'600px',height:'300px'}} alt />
            </div>
            <div className="course-description pb-20 border-bottom">
              <h3 className="mb-20">DESCRIPTION</h3>
              <p className="mb-30"> {postcourse.description}.</p>
            </div>
            <div>
              <a style={{display: "table-cell"}} href={postcourse.introduction.filePath1} target={postcourse.introduction.filePath1}>pdf link</a>
            </div>
            
            <div className="course-content pt-50 pb-35">
            <div className="course-curriculum" id="learn-press-course-curriculum">
  <div className="curriculum-heading">
    <div className="title">
      <h2 className="course-curriculum-title">Course Content</h2>
    </div>
    
    <span className="total-lessons">Total learning: <span className="text">12 lessons</span></span>
    <span className="total-time">Time: <span className="text">10 weeks</span></span>
  </div>
  <ul className="curriculum-sections">
    <li className="section" id="section-230" data-id={230}>
      <h4 className="section-header">
        <span className="collapse" />
        Step 1&nbsp;
        <span className="section-description"> Introduction to this Course</span>
        <span className="meta">
          <span className="step">
            0/5</span>
        </span>
      </h4>
      <ul className="section-content">
        <li className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
          <span className="course-format-icon"><i className="fa fa-file-o" /></span>
          <div className="meta-rank">
            <div className="rank"><span className="label">Lecture</span>1.1</div>
          </div>
          <a className="section-item-link" href="lessons/a-note-on-asking-for-help3/index.html">
            <span className="item-name">A Note On Asking For Help23</span>
            <span className="course-item-meta">
              <span className="item-meta duration">30 min</span>
              <span className="lp-label lp-label-preview">Preview</span>
            </span>
          </a>
        </li>
        <li className="course-item course-item-lp_lesson course-item-460 item-preview has-status" data-type="lp_lesson">
          <span className="course-format-icon"><i className="fa fa-file-o" /></span>
          <div className="meta-rank">
            <div className="rank"><span className="label">Lecture</span>1.2</div>
          </div>
          <a className="section-item-link" href="lessons/introducing-our-ta-12/index.html">
            <span className="item-name">Introducing Our TA</span>
            <span className="course-item-meta">
              <span className="item-meta duration">30 min</span>
              <span className="lp-label lp-label-preview">Preview</span>
            </span>
          </a>
        </li>
        <li className="course-item course-item-lp_lesson course-item-461 item-preview has-status" data-type="lp_lesson">
          <span className="course-format-icon"><i className="fa fa-file-o" /></span>
          <div className="meta-rank">
            <div className="rank"><span className="label">Lecture</span>1.3</div>
          </div>
          <a className="section-item-link" href="lessons/our-class-chat-room-4-2/index.html">
            <span className="item-name">Our Class Chat Room</span>
            <span className="course-item-meta">
              <span className="item-meta duration">30 min</span>
              <span className="lp-label lp-label-preview">Preview</span>
            </span>
          </a>
        </li>
        <li className="course-item course-item-lp_lesson course-item-462 item-preview has-status" data-type="lp_lesson">
          <span className="course-format-icon"><i className="fa fa-file-o" /></span>
          <div className="meta-rank">
            <div className="rank"><span className="label">Lecture</span>1.4</div>
          </div>
          <a className="section-item-link" href="lessons/why-this-course-c4/index.html">
            <span className="item-name">Why This Course?</span>
            <span className="course-item-meta">
              <span className="item-meta duration">30 min</span>
              <span className="lp-label lp-label-preview">Preview</span>
            </span>
          </a>
        </li>
      </ul>
    </li>
    <li className="section" id="section-231" data-id={231}>
      <h4 className="section-header">
        <span className="collapse" />
        Step 2&nbsp;
        <span className="section-description">Chapitres to this course</span>
        <span className="meta">
          <span className="step">
            0/3</span>
        </span>
      </h4>
      <ul className="section-content">
        <li className="course-item course-item-lp_lesson course-item-464 item-locked" data-type="lp_lesson">
          <span className="course-format-icon"><i className="fa fa-file-o" /></span>
          <div className="meta-rank">
            <div className="rank"><span className="label">Lecture</span>2.1</div>
          </div>
          <div className="section-item-link">
            <span className="item-name">Unit Objectives</span>
            <span className="course-item-meta">
              <span className="item-meta duration">30 min</span>
            </span>
          </div>
        </li>
      </ul>
    </li>
    <li className="section" id="section-232" data-id={232}>
      <h4 className="section-header">
        <span className="collapse" />
        Step 3&nbsp;
        <span className="section-description"> Conclusion tou this course</span>
        <span className="meta">
          <span className="step">
            0/4</span>
        </span>
      </h4>
      <ul className="section-content">
        <li className="course-item course-item-lp_lesson course-item-467 item-locked" data-type="lp_lesson">
          <span className="course-format-icon"><i className="fa fa-file-o" /></span>
          <div className="meta-rank">
            <div className="rank"><span className="label">Lecture</span>3.1</div>
          </div>
          <div className="section-item-link">
            <span className="item-name">Unit Objectives</span>
            <span className="course-item-meta">
              <span className="item-meta duration">30 min</span>
            </span>
          </div>
        </li>
        <li className="course-item course-item-lp_lesson course-item-468 item-locked" data-type="lp_lesson">
          <span className="course-format-icon"><i className="fa fa-file-o" /></span>
          <div className="meta-rank">
            <div className="rank"><span className="label">Lecture</span>3.2</div>
          </div>
          <div className="section-item-link">
            <span className="item-name">HTML Basics</span>
            <span className="course-item-meta">
              <span className="item-meta duration">30 min</span>
            </span>
          </div>
        </li>
        <li className="course-item course-item-lp_lesson course-item-469 item-locked" data-type="lp_lesson">
          <span className="course-format-icon"><i className="fa fa-file-o" /></span>
          <div className="meta-rank">
            <div className="rank"><span className="label">Lecture</span>3.3</div>
          </div>
          <div className="section-item-link">
            <span className="item-name">Introduction to MDN</span>
            <span className="course-item-meta">
              <span className="item-meta duration">30 min</span>
            </span>
          </div>
        </li>
        <li className="course-item course-item-lp_lesson course-item-470 item-locked" data-type="lp_lesson">
          <span className="course-format-icon"><i className="fa fa-file-o" /></span>
          <div className="meta-rank">
            <div className="rank"><span className="label">Lecture</span>3.4</div>
          </div>
          <div className="section-item-link">
            <span className="item-name">HTML Boilerplate and Comments</span>
            <span className="course-item-meta">
              <span className="item-meta duration">30 min</span>
            </span>
          </div>
        </li>
      </ul>
    </li> </ul>
</div>

              
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right-sidebar">
            <div className="course-info mb-50">
              <h3 className="mb-20 text-center">Course Information</h3>
              <ul className="mb-30">
                <li className="d-flex justify-content-between">
                  <span>Starts:</span>
                  <span className="text-right">November 22, 2030</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Duration:</span>
                  <span className="text-right"> 28 Weeks</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Study Level:</span>
                  <span className="text-right">Intermediate</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Discipline:</span>
                  <span className="text-right"><a href="javascript:void(0)">Other Courses</a>, <a>Tech Courses</a></span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Price:</span>
                  <span className="text-right text-warning">$45.00</span>
                </li>
              </ul>
              <a href="javascript:void(0)" className="main-btn btn-hover">Add Card</a>
            </div>
            <div className="course-category">
              <h3 className="mb-20">Course Category</h3>
              <ul>
                <li><a href="javascript:void(0)"><i className="lni lni-chevron-right mr-2" />Site Template</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   
  </section>



        </div>
    )
}

export default DetailCourse
