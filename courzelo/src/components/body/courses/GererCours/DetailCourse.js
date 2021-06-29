import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getCourses } from '../../../../redux/actions/courseAction';
import {useParams, useHistory, Link} from 'react-router-dom'
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import QueuePlayNextTwoToneIcon from '@material-ui/icons/QueuePlayNextTwoTone';
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ReactPlayer from 'react-player'
import { Markup } from 'interweave';

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
          <body className="bp-nouveau lp_course-template-default single single-lp_course postid-458 wp-embed-responsive theme-wordpress-lms wordpress-lms learnpress learnpress-page pmpro-body-has-access woocommerce-no-js pagetitle-show bg-type-color thim-body-visual-composer responsive lp_login_popup box-shadow auto-login ltr learnpress-v3 buy-through-membership course-no-free header-template-overlay thim-lp-layout-1 lp-landing wpb-js-composer js-comp-ver-6.4.1 vc_responsive no-js">

         
     <div id="main-content" style={{marginTop:'50px'}}> <section className="content-area">
    <div className="page-title layout-2">
      <div className="main-top parallax" style={{backgroundImage: 'url(../../wp-content/uploads/sites/5/2018/10/page_title_7.jpg)'}}>
        <span className="overlay-top-header" style={{backgroundColor: 'rgba(0,0,0,0.6)'}} />
        <div className="content container">
          <div className="text-title">
            <h1>AWS Certified Solutions Architect</h1> </div>
          <div className="text-description">
            <div className="banner-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.<div className="price">
                <span className="course-origin-price"> $44.00</span>
                <span className="course-price">$33.00</span>
              </div></div> </div>
        </div>
      </div>
      <div className="breadcrumb-content">
        <div className="breadcrumbs-wrapper container">
          <div className="learn-press-course-buttons"> 
            <form name="purchase-course" className="purchase-course guest_checkout" >
              <input type="hidden" name="purchase-course"  />
              <input type="hidden" name="purchase-course-nonce"  />
              <button className="lp-button button button-purchase-course">
                Buy this course </button>
              <input type="hidden" name="redirect_to"  />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container site-content "><div className="row"><main id="main" className="site-main col-sm-12 full-width">
          <article id="post-444" className="sidebar-right post-444 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-web-development course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
            <div className="entry-content">
              <div id="lp-single-course" className="lp-single-course">
                <div id="learn-press-course">
                  <div className="course-summary">
                    <div className="landing-1">
                      <div className="course-info">
                        <ul className="list-inline clearfix">
                          <li className="list-inline-item item-author">
                            <div className="author" itemProp="creator">
                              <span className="avatar"><img alt src="https://secure.gravatar.com/avatar/?s=60&d=mm&r=g" srcSet="https://secure.gravatar.com/avatar/?s=120&d=mm&r=g 2x" className="avatar avatar-60 photo avatar-default" height={60} width={60} loading="lazy" /></span>
                              <div className="info">
                                <label>Teacher</label>
                                <a href="#">
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-inline-item item-categories">
                            <label>Categories</label>
                            <span className="cat-links"><a href="../../course-category/web-development/index.html" rel="tag">Web Development</a></span> </li>
                          <li className="list-inline-item item-students">
                            <label>Students</label>
                            169 (Registered) </li>
                          <li className="list-inline-item item-review">
                            <label>Review</label>
                            <div className="review-stars-rated" title="0 out of 5 stars">
                              <div className="review-stars empty" />
                              <div className="review-stars filled" style={{width: '0%'}} />
                            </div>(0 Review) </li>
                        </ul>
                      </div>
                      <div className="course-thumbnail">
                        <img src="../../wp-content/uploads/sites/5/2017/06/shutterstock_184641842-5-e1503481994491-1000x500.jpg" alt="shutterstock" title="shutterstock" /> <a href="https://www.youtube.com/watch?v=TtoHkSuKJwE" className="play-button video-thumbnail">
                          <span className="video-thumbnail hvr-push" />
                        </a>
                        <div className="time">
                          <div className="date-start">21</div>
                          <div className="month-start">Jul</div>
                        </div>
                      </div>
                      <div className="course-landing-summary has-social">
                        
                        <div className="content-landing-1">
                          <div className="course-meta">
                          </div>
                        
                          <div className="course-description" id="learn-press-course-description">
                            <div id="tab-overview">
                              <h4>Course Description</h4>
                              <p>If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with us because we are going to introduce you one of the most basic knowledge when owning a WordPress page: how to find your site the best WordPress Hosting service. This process is often overlooked by most of the website owners. But it can be considered the most important key point to bring your site to stand out of the crowd. A great hosting service could help you to improve SEO and increase sales as well.</p>
                              <h4>Certification</h4>
                              <p>If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with us because we are going to introduce you one of the most basic knowledge when owning a WordPress page: how to find your site the best WordPress Hosting service. This process is often overlooked by most of the website owners. But it can be considered the most important key point to bring your site to stand out of the crowd. A great hosting service could help you to improve SEO and increase sales as well.</p>
                              <h4>Learning Outcomes</h4>
                              <ul>
                                <li>Over 37 lectures and 55.5 hours of content!</li>
                                <li>LIVE PROJECT End to End Software Testing Training Included.</li>
                                <li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li>
                                <li>Information packed practical training starting from basics to advanced testing techniques.</li>
                                <li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
                                <li>Course content designed by considering current software testing technology and the job market.</li>
                                <li>Practical assignments at the end of every session.</li>
                                <li>Practical learning experience with live project work and examples.</li>
                              </ul>
                            </div>
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
    <li className="section" id="section-230" >
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

        <li className="accordion" id="accordionExample" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
         <ul>

         <li >
        
          <a className="section-item-link" id="headingOne">
            <span className="item-name">Phase1</span>
            <span className="course-item-meta">
              <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" >
            <Link to={`/PhaseADetail/${id}`} >Preview</Link> 
                                                        </button>
            </span>
          </a>
          </li>
          <li>
          <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
          {postcourse.introduction.text1  =="" ?
          <div/>:
                                                        <div className="card-body" style={{width:'1200px'}}>
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Text</b> </h5>
                                                                    <Markup content={postcourse.introduction.text1} /> 
                                                                    
                                                          </div>
                                                          </div>
                                                 }
                                                 {postcourse.introduction.img1  =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Image </b> </h5>
                                                                    <img style={{ width:'365px',height:'260px' }} src={postcourse.introduction.img1} /> 

                                                          </div>
                                                          </div>}
                                                          {postcourse.introduction.video1  =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Video </b> </h5>
                                                                    <div className="thim-sc-video-box" style={{marginLeft:'-50px'}} >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url={postcourse.introduction.video1} controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                                                          </div>
                                                          </div>}
                                                          {postcourse.introduction.filePath1  =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Pdf </b> </h5>
                                                                    <a style={{display: "table-cell"}} href={postcourse.introduction.filePath1} target={postcourse.introduction.filePath1}>pdf link</a>
                                                          </div>
                                                          </div>}
          </div>
          </li>
          </ul>
        </li>
 <li className="accordion" id="accordionExample" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
         <ul>

         <li >
        
          <a className="section-item-link" id="headingOne1">
            <span className="item-name">Phase2</span>
            <span className="course-item-meta">
            <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" >
            <Link to={`/PhaseBDetail/${id}`} >Preview</Link> 
                                                        </button>
            </span>
          </a>
          </li>
          <li>
          <div id="collapseOne1" className="collapse " aria-labelledby="headingOne1" data-parent="#accordionExample">
          {postcourse.introduction.text2 =="" ?
          <div/>:
                                                        <div className="card-body" style={{width:'1200px'}}>
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Text</b> </h5>
                                                                    <Markup content={postcourse.introduction.text2} />

                                                          </div>
                                                          </div>
                                                 }
                                                 {postcourse.introduction.img2  =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Image </b> </h5>
                                                                    <img style={{ width:'365px',height:'260px' }} src={postcourse.introduction.img2} /> 

                                                          </div>
                                                          </div>}
                                                          {postcourse.introduction.video2 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Video </b> </h5>
                                                                    <div className="thim-sc-video-box" style={{marginLeft:'-50px'}} >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url={postcourse.introduction.video2} controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                                                          </div>
                                                          </div>}
                                                          {postcourse.introduction.filePath2 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Pdf </b> </h5>
                                                                    <a style={{display: "table-cell"}} href={postcourse.introduction.filePath2} target={postcourse.introduction.filePath2}>pdf link</a>
                                                          </div>
                                                          </div>}
          </div>
          </li>
          </ul>
        </li>
        <li className="accordion" id="accordionExample" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
         <ul>

         <li >
        
          <a className="section-item-link" id="headingOne2">
            <span className="item-name">Phase3</span>
            <span className="course-item-meta">
            <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" >
            <Link to={`/PhaseCDetail/${id}`} >Preview</Link> 
                                                        </button>
            </span>
          </a>
          </li>
          <li>
          <div id="collapseOne2" className="collapse " aria-labelledby="headingOne2" data-parent="#accordionExample">
          {postcourse.introduction.text3 =="" ?
          <div/>:
                                                        <div className="card-body" style={{width:'1200px'}}>
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Text</b> </h5>
                                                                    <Markup content={postcourse.introduction.text3} />

                                                          </div>
                                                          </div>}
                                                          {postcourse.introduction.img3 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Image </b> </h5>
                                                                    <img style={{ width:'365px',height:'260px' }} src={postcourse.introduction.img3} /> 

                                                          </div>
                                                          </div>}
                                                          {postcourse.introduction.video3 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Video </b> </h5>
                                                                    <div className="thim-sc-video-box" style={{marginLeft:'-50px'}} >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url={postcourse.introduction.video3} controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                                                          </div>
                                                          </div>}
                                                          {postcourse.introduction.filePath3 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Pdf </b> </h5>
                                                                    <a style={{display: "table-cell"}} href={postcourse.introduction.filePath3} target={postcourse.introduction.filePath3}>pdf link</a>
                                                          </div>
                                                          </div>}
          </div>
          </li>
          </ul>
        </li>
        <li className="accordion" id="accordionExample" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
         <ul>

         <li >
        
          <a className="section-item-link" id="headingOne3">
            <span className="item-name">Phase4</span>
            <span className="course-item-meta">
            <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" >
            <Link to={`/PhaseDDetail/${id}`} >Preview</Link> 
                                                        </button>
            </span>
          </a>
          </li>
          <li>
          <div id="collapseOne3" className="collapse " aria-labelledby="headingOne3" data-parent="#accordionExample">
          {postcourse.introduction.text4 =="" ?
          <div/>:
                                                        <div className="card-body" style={{width:'1200px'}}>
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Text</b> </h5>
                                                                    <Markup content={postcourse.introduction.text4} />

                                                          </div>
                                                          </div>}
                                                          {postcourse.introduction.img4 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Image </b> </h5>
                                                                    <img style={{ width:'365px',height:'260px' }} src={postcourse.introduction.img4} /> 

                                                          </div>
                                                          </div>}
                                                          {postcourse.introduction.video4 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Video </b> </h5>
                                                                    <div className="thim-sc-video-box" style={{marginLeft:'-50px'}} >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url={postcourse.introduction.video4} controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                                                          </div>
                                                          </div>}
                                                          {postcourse.introduction.filePath4 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Pdf </b> </h5>
                                                                    <a style={{display: "table-cell"}} href={postcourse.introduction.filePath4} target={postcourse.introduction.filePath4}>pdf link</a>
                                                          </div>
                                                          </div>}
          </div>
          </li>
          </ul>
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
        {console.log('coursechapitre',postcourse.chapitres)}
      {postcourse.chapitres.map((detailChapitres) => (
        detailChapitres.map((course) => (
        <li className="course-item course-item-lp_lesson course-item-464 item-locked" data-type="lp_lesson">
          <span className="course-format-icon"><i className="fa fa-file-o" /></span>
         
          <div className="section-item-link">
           { <span className="item-name">chapitre{course.n}</span>}
            <span className="course-item-meta">
            <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'-170px'}} type="button" >
            <Link to={`/chapitre${course.n}Detail/${id}`} >Preview</Link> 
                                                        </button>
            </span>
          </div>
        </li>))
      ))}
      </ul>
    </li>
    <li className="section" id="section-232" data-id={232}>
      <h4 className="section-header">
        <span className="collapse" />
        Step 3&nbsp;
        <span className="section-description"> Conclusion to this course</span>
        <span className="meta">
          <span className="step">
            0/4</span>
        </span>
      </h4>
      <ul className="section-content">

        <li className="accordion" id="accordionExample2" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
         <ul>

         <li >
        
          <a className="section-item-link" id="headingOnec">
            <span className="item-name">Phase1</span>
            <span className="course-item-meta">
            <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" >
            <Link to={`/PhaseEDetail/${id}`} >Preview</Link> 
                                                        </button>
            </span>
          </a>
          </li>
          <li>
          <div id="collapseOnec" className="collapse " aria-labelledby="headingOnec" data-parent="#accordionExample">
          {postcourse.conclusion.text1  =="" ?
          <div/>:
                                                        <div className="card-body" style={{width:'1200px'}}>
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Text</b> </h5>
                                                                    <Markup content={postcourse.conclusion.text1} />

                                                          </div>
                                                          </div>
                                                 }
                                                 {postcourse.conclusion.img1  =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Image </b> </h5>
                                                                    <img style={{ width:'365px',height:'260px' }} src={postcourse.conclusion.img1} /> 

                                                          </div>
                                                          </div>}
                                                          {postcourse.conclusion.video1  =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Video </b> </h5>
                                                                    <div className="thim-sc-video-box" style={{marginLeft:'-50px'}} >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url={postcourse.conclusion.video1} controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                                                          </div>
                                                          </div>}
                                                          {postcourse.conclusion.filePath1  =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Pdf </b> </h5>
                                                                    <a style={{display: "table-cell"}} href={postcourse.conclusion.filePath1} target={postcourse.conclusion.filePath1}>pdf link</a>
                                                          </div>
                                                          </div>}
          </div>
          </li>
          </ul>
        </li>
 <li className="accordion"  className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
         <ul>

         <li >
        
          <a className="section-item-link" id="headingOne1c">
            <span className="item-name">Phase2</span>
            <span className="course-item-meta">
            <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" >
            <Link to={`/PhaseFDetail/${id}`} >Preview</Link> 
                                                        </button>
            </span>
          </a>
          </li>
          <li>
          <div id="collapseOne1c" className="collapse " aria-labelledby="headingOne1c" >
          {postcourse.conclusion.text2 =="" ?
          <div/>:
                                                        <div className="card-body" style={{width:'1200px'}}>
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Text</b> </h5>
                                                                    <Markup content={postcourse.conclusion.text2} />

                                                          </div>
                                                          </div>
                                                 }
                                                 {postcourse.conclusion.img2  =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Image </b> </h5>
                                                                    <img style={{ width:'365px',height:'260px' }} src={postcourse.conclusion.img2} /> 

                                                          </div>
                                                          </div>}
                                                          {postcourse.conclusion.video2 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Video </b> </h5>
                                                                    <div className="thim-sc-video-box" style={{marginLeft:'-50px'}} >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url={postcourse.conclusion.video2} controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                                                          </div>
                                                          </div>}
                                                          {postcourse.conclusion.filePath2 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Pdf </b> </h5>
                                                                    <a style={{display: "table-cell"}} href={postcourse.conclusion.filePath2} target={postcourse.conclusion.filePath2}>pdf link</a>
                                                          </div>
                                                          </div>}
          </div>
          </li>
          </ul>
        </li>
        <li className="accordion" id="accordionExample2" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
         <ul>

         <li >
        
          <a className="section-item-link" id="headingOne2">
            <span className="item-name">Phase3</span>
            <span className="course-item-meta">
            <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" >
            <Link to={`/PhaseGDetail/${id}`} >Preview</Link> 
                                                        </button>
            </span>
          </a>
          </li>
          <li>
          <div id="collapseOne2c" className="collapse " aria-labelledby="headingOne2c" data-parent="#accordionExample">
          {postcourse.conclusion.text3 =="" ?
          <div/>:
                                                        <div className="card-body" style={{width:'1200px'}}>
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Text</b> </h5>
                                                                    <Markup content={postcourse.conclusion.text3} />

                                                          </div>
                                                          </div>}
                                                          {postcourse.conclusion.img3 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Image </b> </h5>
                                                                    <img style={{ width:'365px',height:'260px' }} src={postcourse.conclusion.img3} /> 

                                                          </div>
                                                          </div>}
                                                          {postcourse.conclusion.video3 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Video </b> </h5>
                                                                    <div className="thim-sc-video-box" style={{marginLeft:'-50px'}} >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url={postcourse.conclusion.video3} controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                                                          </div>
                                                          </div>}
                                                          {postcourse.conclusion.filePath3 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Pdf </b> </h5>
                                                                    <a style={{display: "table-cell"}} href={postcourse.conclusion.filePath3} target={postcourse.conclusion.filePath3}>pdf link</a>
                                                          </div>
                                                          </div>}
          </div>
          </li>
          </ul>
        </li>
        <li className="accordion" id="accordionExample2" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
         <ul>

         <li >
        
          <a className="section-item-link" id="headingOne3">
            <span className="item-name">Phase4</span>
            <span className="course-item-meta">
            <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" >
            <Link to={`/PhaseHDetail/${id}`} >Preview</Link> 
                                                        </button>
            </span>
          </a>
          </li>
          <li>
          <div id="collapseOne3c" className="collapse " aria-labelledby="headingOne3c" data-parent="#accordionExample">
          {postcourse.conclusion.text4 =="" ?
          <div/>:
                                                        <div className="card-body" style={{width:'1200px'}}>
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Text</b> </h5>
                                                                    <Markup content={postcourse.conclusion.text4} />

                                                          </div>
                                                          </div>}
                                                          {postcourse.conclusion.img4 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Image </b> </h5>
                                                                    <img style={{ width:'365px',height:'260px' }} src={postcourse.conclusion.img4} /> 

                                                          </div>
                                                          </div>}
                                                          {postcourse.conclusion.video4 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Video </b> </h5>
                                                                    <div className="thim-sc-video-box" style={{marginLeft:'-50px'}} >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url={postcourse.conclusion.video4} controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>
                                                          </div>
                                                          </div>}
                                                          {postcourse.conclusion.filePath4 =="" ?
          <div/>:
                                                          <div className="card-body">
                                                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Pdf </b> </h5>
                                                                    <a style={{display: "table-cell"}} href={postcourse.conclusion.filePath4} target={postcourse.conclusion.filePath4}>pdf link</a>
                                                          </div>
                                                          </div>}
          </div>
          </li>
          </ul>
        </li>
       
       
      </ul>
    </li> </ul>
</div>

              
            </div>
                          <div id="tab-instructor" style={{height: 40}} />
                          <div className="course-author">
                            <h3>Instructor</h3>
                            <div className="thim-course-author teacher">
                              <div className="author-avatar">
                                <img alt src="https://secure.gravatar.com/avatar/?s=150&d=mm&r=g" srcSet="https://secure.gravatar.com/avatar/?s=300&d=mm&r=g 2x" className="avatar avatar-150 photo avatar-default" height={150} width={150} loading="lazy" />
                                <ul className="social-link">
                                </ul>
                              </div>
                              <div className="author-bio">
                                <div className="name">
                                  <a href="#" /> </div>
                              </div>
                            </div>
                          </div>
                      
                              
                          <div className="thim-related-course">
                            <h3 className="related-title">Related Courses</h3>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> </div>
          </article>
        </main></div></div> </section>
</div>

</body>


        </div>
    )
}

export default DetailCourse
