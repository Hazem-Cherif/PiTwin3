import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getCourses } from '../../../../redux/actions/courseAction';
import {useParams, useHistory} from 'react-router-dom'
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
              <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             Preview
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
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Vedio </b> </h5>
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
              <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
             Preview
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
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Vedio </b> </h5>
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
              <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" data-toggle="collapse" data-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
             Preview
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
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Vedio </b> </h5>
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
              <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" data-toggle="collapse" data-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
             Preview
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
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Vedio </b> </h5>
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
              <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" data-toggle="collapse" data-target="#collapseOnec" aria-expanded="true" aria-controls="collapseOnec">
             Preview
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
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Vedio </b> </h5>
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
 <li className="accordion" id="accordionExample2" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
         <ul>

         <li >
        
          <a className="section-item-link" id="headingOne1c">
            <span className="item-name">Phase2</span>
            <span className="course-item-meta">
              <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" data-toggle="collapse" data-target="#collapseOne1c" aria-expanded="true" aria-controls="collapseOne1c">
             Preview
                                                        </button>
            </span>
          </a>
          </li>
          <li>
          <div id="collapseOne1c" className="collapse " aria-labelledby="headingOne1c" data-parent="#accordionExample">
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
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Vedio </b> </h5>
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
              <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" data-toggle="collapse" data-target="#collapseOne2c" aria-expanded="true" aria-controls="collapseOne2c">
             Preview
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
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Vedio </b> </h5>
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
              <button className="lp-label lp-label-preview" style={{backgroundColor:'#1EA69A',marginLeft:'650px'}} type="button" data-toggle="collapse" data-target="#collapseOne3c" aria-expanded="true" aria-controls="collapseOne3c">
             Preview
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
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Vedio </b> </h5>
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
