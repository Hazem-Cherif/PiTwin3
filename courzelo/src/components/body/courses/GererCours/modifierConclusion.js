import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import QueuePlayNextTwoToneIcon from '@material-ui/icons/QueuePlayNextTwoTone';
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import TextField from '@material-ui/core/TextField';
import {useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse,deleteCourse } from '../../../../redux/actions/courseAction';
import { addCourse } from '../../../../redux/actions/courseAction';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import axios from 'axios'
import ReactPlayer from 'react-player'


function ModifierConclusion() {
  const token = useSelector(state => state.token)

    const {id} = useParams();
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);
   
   
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
      filePath1: '',

      text2: '',
      video2: '',
      img2: '',
      filePath2: '',
      text3: '',
      video3: '',
      img3: '',
      filePath3: '',
      text4: '',
      video4: '',
      img4: '',
      filePath4: ''
    
        },
        CourseImg: '',
        categorie:''
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

 
    const handleSubmit = async (e) => {
      alert('hello');
      e.preventDefault();
      console.log('test1',postcourse);
        dispatch(updateCourse(id, postcourse));
        console.log('test2',postcourse);


      }
      const handleChangePhase5 = (e, editor) => {
        const data = editor.getData()
        const conc = postcourse.conclusion;
        conc.text1 = data;
        setCourseData({ ...postcourse, conclusion: conc });
      }
    
    
      const changeimg5 = async (e) => {
        e.preventDefault()
    
        const file = e.target.files[0]
    
        if (!file) return this.state;
    
        if (file.size > 1024 * 1024)
          return this.state
    
        if (file.type !== 'image/jpeg' && file.type !== 'image/png')
          return this.state;
    
        let formData = new FormData()
        formData.append('file', file)
    
    
        const res = await axios.post('/CourseImg/upload_Course_img', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.img1 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        }
        )
      }
      const uploadHandlerVideo5 = async e => {
        e.preventDefault()
    
    
    
        const file = e.target.files[0]
    
        if (!file) return this.state;
    
    
        if (file.type !== 'video/mp4')
          return this.state;
    
        let formData = new FormData()
        formData.append('file', file)
    
    
        const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.video1 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        })
      }
      const uploadHandlerPdf5 = async e => {
        const token = this.props.token;
        const file = e.target.files[0]
        console.log(file)
        if (!file) return this.state;
    
        if (file.type !== 'application/pdf')
          return (this.state, 'opsssss');
    
        let formData = new FormData()
        formData.append('file', file)
    
        const res = await axios.post('/CoursePdf/singleFile', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.filePath1 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        })
      };
      const handleChangePhase6 = (e, editor) => {
        const data = editor.getData()
        const conc = postcourse.conclusion;
        conc.text2 = data;
        setCourseData({ ...postcourse, conclusion: conc });
      }
    
      const changeimg6 = async (e) => {
        e.preventDefault()
    
        const file = e.target.files[0]
    
        if (!file) return this.state;
    
        if (file.size > 1024 * 1024)
          return this.state
    
        if (file.type !== 'image/jpeg' && file.type !== 'image/png')
          return this.state;
    
        let formData = new FormData()
        formData.append('file', file)
    
    
        const res = await axios.post('/CourseImg/upload_Course_img', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.img2 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        }
        )
      }
      const uploadHandlerVideo6 = async e => {
        e.preventDefault()
    
    
    
        const file = e.target.files[0]
    
        if (!file) return this.state;
    
    
        if (file.type !== 'video/mp4')
          return this.state;
    
        let formData = new FormData()
        formData.append('file', file)
    
    
        const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.video2 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        })
      }
      const uploadHandlerPdf6 = async e => {
        const token = this.props.token;
        const file = e.target.files[0]
        console.log(file)
        if (!file) return this.state;
    
        if (file.type !== 'application/pdf')
          return (this.state, 'opsssss');
    
        let formData = new FormData()
        formData.append('file', file)
    
        const res = await axios.post('/CoursePdf/singleFile', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.filePath2 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        })
      };
      const handleChangePhase7 = (e, editor) => {
        const data = editor.getData()
        const conc = postcourse.conclusion;
        conc.text3 = data;
        setCourseData({ ...postcourse, conclusion: conc });
      }
    
      const changeimg7 = async (e) => {
        e.preventDefault()
    
        const file = e.target.files[0]
    
        if (!file) return this.state;
    
        if (file.size > 1024 * 1024)
          return this.state
    
        if (file.type !== 'image/jpeg' && file.type !== 'image/png')
          return this.state;
    
        let formData = new FormData()
        formData.append('file', file)
    
    
        const res = await axios.post('/CourseImg/upload_Course_img', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.img3 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        }
        )
      }
      const uploadHandlerVideo7 = async e => {
        e.preventDefault()
    
    
    
        const file = e.target.files[0]
    
        if (!file) return this.state;
    
    
        if (file.type !== 'video/mp4')
          return this.state;
    
        let formData = new FormData()
        formData.append('file', file)
    
    
        const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.video3 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        })
      }
      const uploadHandlerPdf7 = async e => {
        const token = this.props.token;
        const file = e.target.files[0]
        console.log(file)
        if (!file) return this.state;
    
        if (file.type !== 'application/pdf')
          return (this.state, 'opsssss');
    
        let formData = new FormData()
        formData.append('file', file)
    
        const res = await axios.post('/CoursePdf/singleFile', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.filePath3 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        })
      };
      const handleChangePhase8 = (e, editor) => {
        const data = editor.getData()
        const conc = postcourse.conclusion;
        conc.text4 = data;
        setCourseData({ ...postcourse, conclusion: conc });
      }
    
      const changeimg8 = async (e) => {
        e.preventDefault()
    
        const file = e.target.files[0]
    
        if (!file) return this.state;
    
        if (file.size > 1024 * 1024)
          return this.state
    
        if (file.type !== 'image/jpeg' && file.type !== 'image/png')
          return this.state;
    
        let formData = new FormData()
        formData.append('file', file)
    
    
        const res = await axios.post('/CourseImg/upload_Course_img', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.img4 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        }
        )
      }
      const uploadHandlerVideo8 = async e => {
        e.preventDefault()
    
    
    
        const file = e.target.files[0]
    
        if (!file) return this.state;
    
    
        if (file.type !== 'video/mp4')
          return this.state;
    
        let formData = new FormData()
        formData.append('file', file)
    
    
        const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.video4 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        })
      }
      const uploadHandlerPdf8 = async e => {
        const token = this.props.token;
        const file = e.target.files[0]
        console.log(file)
        if (!file) return this.state;
    
        if (file.type !== 'application/pdf')
          return (this.state, 'opsssss');
    
        let formData = new FormData()
        formData.append('file', file)
    
        const res = await axios.post('/CoursePdf/singleFile', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
          const conc = postcourse.conclusion;
          conc.filePath4 = res.data.url;
          setCourseData({ ...postcourse, conclusion: conc })
        })
      };
 
    return (
      <div className="main">

      <div className="side"></div>
      <div className="userform" style={{ marginLeft: '-400px', width: '1550px' }}>
        <form onSubmit={handleSubmit}>
          <MuiThemeProvider>
            <>
              <h1 style={{ marginBottom: '50px' }}>Conclusion</h1>
              <div className="row" style={{ marginBottom: '150px' }}>
                <div className=" col-sm-12 col-md-6" style={{ height: '290px' }} >


                  <div className="thim-sc-video-box" >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url="assets/What-is-4MAT.m4v" controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-sm-12 col-md-6">
                  <p className="parag " style={{ color: '#0075BA', fontStyle: 'italic', marginBottom: '-3px', fontSize: '18px' }}>

                    *The 4MAT model entails the use of right and left-mode strategies within four distinct phases of the learning cycle???..</p>
                  <p style={{ color: '#0075BA', marginLeft: '20px', marginBottom: '6px' }} className="parag ">
                    <b>
                      1-Experiencing<br />
2-Conceptualising <br />
3-Applying <br />
4-Refining</b></p><p style={{ color: '#0075BA', fontSize: '18px', fontStyle: 'italic' }}>
                    -As an instructional design tool, 4MAT gives teachers and trainers a systematic
way to train all learners to think and learn well.<br />
-As a professional development tool, it provides a framework for assessing the quality of any learning experience.
-As an organisational model, it offers a method for creating an environment for continuous learning and development.</p>

                </div>

              </div>
              <p style={{ color: '#0075BA', fontStyle: 'italic', marginTop: '-80px', fontSize: '18px' }}>*The complete model is an integration of learning styles and hemisphericity in a sequence that
              follows the natural cycle of learning.For real learning to take place, all parts of the learning cycle must be addressed,
 starting from one and moving around to four, answering the key question of each style:</p>
              <div className="row" style={{ paddingBottom: '50px' }}>
                <div className=" col-sm-12 col-md-4" style={{ paddingLeft: '100px' }} >
                  <img loading="lazy" style={{ width: '600px', height: '300px' }} src="assets/mokh.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />
                </div>
                <div className=" col-sm-12 col-md-4" style={{ paddingTop: '60px', paddingLeft: '200px' }} >
                  <p style={{ color: '#D23941', fontSize: '18px' }}><b> 1-WHY?</b></p>
                  <p style={{ color: '#425689', fontSize: '18px' }}><b>2-WHAT?</b></p>
                  <p style={{ color: '#3E8C50', fontSize: '18px' }}><b>3-HOW?</b></p>
                  <p style={{ color: '#FFCC52', fontSize: '18px' }}><b>4-IF?</b></p>
                </div>
                <div className=" col-sm-12 col-md-4"  >
                  <img loading="lazy" style={{ width: '600px', height: '300px' }} src="assets/mat.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />
                </div>


              </div>
              <h2 style={{ marginBottom: '50px' }}> Add Conclusion </h2>

              <div className="accordion" id="accordionExample">

                <div className="cardd">
                  <div className="cardd-header" id="headingOne">

                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <h5>Phase 1:  </h5>
                    </button>

                  </div>
                  <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="row">
                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                          <h5 style={{ color: 'black' }}> <b style={{ color: '#D23941', fontSize: '18px' }}> Why? </b> </h5>
                          <p style={{ color: 'black' }}>We want to understand meaning and purpose, and the instructor???s role is to make connections between the material and the learners, to engage their attention.</p>


                          <div className="tabset">
                            {/* Tab 1 */}
                            <input type="radio" name="tabset" id="tab1" aria-controls="marzen" />
                            <label htmlFor="tab1">Select content type</label>

                            <div className="tab-panels">

                              <>
                                <section id="marzen" className="tab-panel">
                                  <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" /></i>
                                  <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid1" aria-expanded="false" aria-controls="collapseExampleVid1" /> </i>
                                  <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg1" aria-expanded="false" aria-controls="collapseExampleImg1" /> </i>
                                  <i>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>

                                </section>






                                <div className="collapse" id="collapseExample1">
                                  <div className="cardd card-body">
                                    <div className="form-group">
                                      <CKEditor
                                        editor={ClassicEditor}

                                        data={postcourse.conclusion.text1}
                                        onChange={handleChangePhase5}
                                      />
                                    </div>    </div>
                                </div>


                                <div className="collapse" id="collapseExampleImg1">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={e => changeimg5(e)}
                                    />

                                  </div>
                                  <div className="wpb_column vc_column_container vc_col-sm-6">
                                    <img src={postcourse.conclusion.img1}
                                    />

                                  </div>
                                </div>

                                <div className="collapse" id="collapseExampleVid1">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerVideo5(e)}
                                    ></input>
                                  </div>
                                  <div className="thim-sc-video-box" >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url={postcourse.conclusion.video1} controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>

                                </div>


                                <div className="collapse" id="collapseExamplepdf1">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerPdf5(e)}
                                    />

                                  </div>
                                  <div>
                                    <a style={{ display: "table-cell" }} href={postcourse.conclusion.filePath1} target={postcourse.conclusion.filePath1}>pdf link</a>
                                  </div>
                                </div>
                              </>


                            </div>


                          </div>


                        </div>
                        <div className=" col-sm-12 col-md-1"></div>
                        <div className=" col-sm-12 col-md-4" >
                          <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/a.png" alt="The Ultimate Ethical Hacking Boot Camp" className />


                        </div>
                      </div>
                    </div></div></div></div>


              <div className="accordion" id="accordionExample">

                <div className="cardd">
                  <div className="cardd-header" id="headingTwo">

                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      <h5>Phase 2:  </h5>
                    </button>

                  </div>
                  <div id="collapseTwo" className="collapse " aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="row">
                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                          <h5 style={{ color: 'black' }}> <b style={{ color: '#425689', fontSize: '18px' }}> What? </b> </h5>
                          <p style={{ color: 'black' }}>Only when we are satisfied about relevance are we ready to know ???What???? At this stage, the trainer provides information and satisfies our desire for facts, structure and theory.</p>


                          <div className="tabset">
                            {/* Tab 2 */}
                            <input type="radio" name="tabset" id="tab2" aria-controls="marzen" />
                            <label htmlFor="tab2">Select content type</label>

                            <div className="tab-panels">

                              <>
                                <section id="marzen" className="tab-panel">
                                  <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2" /></i>
                                  <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid2" aria-expanded="false" aria-controls="collapseExampleVid2" /> </i>
                                  <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg2" aria-expanded="false" aria-controls="collapseExampleImg2" /> </i>
                                  <i>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf2" aria-expanded="false" aria-controls="collapseExamplepdf2" /> </i>

                                </section>






                                <div className="collapse" id="collapseExample2">
                                  <div className="cardd card-body">
                                    <div className="form-group">
                                      <CKEditor
                                        editor={ClassicEditor}
                                        data={postcourse.conclusion.text2}
                                        onChange={handleChangePhase6}


                                      />
                                    </div>    </div>
                                </div>

                                <div className="collapse" id="collapseExampleImg2">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div>  <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={e => changeimg6(e)}
                                      />
  
                                    </div>
                                    <div className="wpb_column vc_column_container vc_col-sm-6">
                                      <img src={postcourse.conclusion.img2}
                                      />
  
                                    </div>
                                  </div>

                                <div className="collapse" id="collapseExampleVid2">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div><input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerVideo6(e)}
                                      ></input>
                                    </div>
                                    <div className="thim-sc-video-box" >
                      <div className="video" >
                        <div>
                          <div style={{ width: '100px' }}>
                            <ReactPlayer url={postcourse.conclusion.video2} controls={true}></ReactPlayer>
                          </div>
                        </div>
                      </div>
                    </div>
  
                                  </div>

                                <div className="collapse" id="collapseExamplepdf2">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerPdf6(e)}
                                      />
  
                                    </div>
                                    <div>
                                      <a style={{ display: "table-cell" }} href={postcourse.conclusion.filePath2} target={postcourse.conclusion.filePath1}>pdf link</a>
                                    </div>
                                  </div>
                              </>


                            </div>


                          </div>


                        </div>
                        <div className=" col-sm-12 col-md-1"></div>
                        <div className=" col-sm-12 col-md-4" >
                          <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/b.png" alt="The Ultimate Ethical Hacking Boot Camp" className />


                        </div>
                      </div>

                    </div></div></div></div>

              <div className="accordion" id="accordionExample">

                <div className="cardd">
                  <div className="cardd-header" id="headingThree">

                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                      <h5>Phase 3: </h5>
                    </button>

                  </div>
                  <div id="collapseThree" className="collapse " aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="row">
                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                          <h5 style={{ color: 'black' }}> <b style={{ color: '#3E8C50', fontSize: '18px' }}> How? </b> </h5>
                          <p style={{ color: 'black' }}>Once we have the knowledge, we ask ???How???? and we want to understand how we can apply our new insights to the real world. We focus on problems and how we can use our learning to solve them.</p>


                          <div className="tabset">
                            {/* Tab 3 */}
                            <input type="radio" name="tabset" id="tab3" aria-controls="marzen" />
                            <label htmlFor="tab3">Select content type</label>

                            <div className="tab-panels">

                              <>
                                <section id="marzen" className="tab-panel">
                                  <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3" /></i>
                                  <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid3" aria-expanded="false" aria-controls="collapseExampleVid3" /> </i>
                                  <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg3" aria-expanded="false" aria-controls="collapseExampleImg3" /> </i>
                                  <i>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf3" aria-expanded="false" aria-controls="collapseExamplepdf3" /> </i>

                                </section>






                                <div className="collapse" id="collapseExample3">
                                  <div className="cardd card-body">
                                    <div className="form-group">
                                      <CKEditor
                                        editor={ClassicEditor}
                                        data={postcourse.conclusion.text3}
                                        onChange={handleChangePhase7}


                                      />
                                    </div>    </div>
                                </div>

                                <div className="collapse" id="collapseExampleImg3">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div><input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={e => changeimg7(e)}
                                      />
  
                                    </div>
                                    <div className="wpb_column vc_column_container vc_col-sm-6">
                                      <img src={postcourse.conclusion.img3}
                                      />
  
                                    </div>
                                  </div>

                                <div className="collapse" id="collapseExampleVid3">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerVideo7(e)}
                                      ></input>
                                    </div>
                                    <div className="thim-sc-video-box" >
                      <div className="video" >
                        <div>
                          <div style={{ width: '100px' }}>
                            <ReactPlayer url={postcourse.conclusion.video3} controls={true}></ReactPlayer>
                          </div>
                        </div>
                      </div>
                    </div>
  
                                  </div>
                                <div className="collapse" id="collapseExamplepdf3">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerPdf7(e)}
                                      />
  
                                    </div>
                                    <div>
                                      <a style={{ display: "table-cell" }} href={postcourse.conclusion.filePath3} target={postcourse.conclusion.filePath1}>pdf link</a>
                                    </div>
                                  </div>
                              </>


                            </div>


                          </div>


                        </div>
                        <div className=" col-sm-12 col-md-1"></div>
                        <div className=" col-sm-12 col-md-4" >
                          <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/c.png" alt="The Ultimate Ethical Hacking Boot Camp" className />


                        </div>
                      </div>
                    </div></div></div></div>

              <div className="accordion" id="accordionExample">

                <div className="cardd">
                  <div className="cardd-header" id="headingFour">

                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                      <h5>Phase 4: </h5>
                    </button>

                  </div>
                  <div id="collapseFour" className="collapse " aria-labelledby="headingFour" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="row">
                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }}>
                          <h5 style={{ color: 'black' }}> <b style={{ color: '#FFCC52', fontSize: '18px' }}>  if? </b> </h5>
                          <p style={{ color: 'black' }}>Finally, we want to try it out, so we ask questions like ???What if???? ???What else???? or ???What next???? This is when we engage in active experimentation, trial and error, pushing at the boundaries ??? learning by doing.</p>


                          <div className="tabset">
                            {/* Tab 4 */}
                            <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                            <label htmlFor="tab4">Select content type</label>

                            <div className="tab-panels">

                              <>
                                <section id="marzen" className="tab-panel">
                                  <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                  <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                  <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                  <i>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf4" aria-expanded="false" aria-controls="collapseExamplepdf4" /> </i>

                                </section>






                                <div className="collapse" id="collapseExample4">
                                  <div className="cardd card-body">
                                    <div className="form-group">
                                      <CKEditor
                                       editor={ClassicEditor}
                                       data={postcourse.conclusion.text4}
                                       onChange={handleChangePhase8}

                                      />
                                    </div>    </div>
                                </div>

                                <div className="collapse" id="collapseExampleImg4">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div>   <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={e => changeimg8(e)}
                                      />
  
                                    </div>
                                    <div className="wpb_column vc_column_container vc_col-sm-6">
                                      <img src={postcourse.conclusion.img4}
                                      />
  
                                    </div>
                                  </div>

                                <div className="collapse" id="collapseExampleVid4">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerVideo8(e)}
                                      ></input>
                                    </div>
                                    <div className="thim-sc-video-box" >
                      <div className="video" >
                        <div>
                          <div style={{ width: '100px' }}>
                            <ReactPlayer url={postcourse.conclusion.video4} controls={true}></ReactPlayer>
                          </div>
                        </div>
                      </div>
                    </div>
  
                                  </div>
                                <div className="collapse" id="collapseExamplepdf4">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerPdf8(e)}
                                      />
  
                                    </div>
                                    <div>
                                      <a style={{ display: "table-cell" }} href={postcourse.conclusion.filePath4} target={postcourse.conclusion.filePath1}>pdf link</a>
                                    </div>
                                  </div>
                              </>


                            </div>


                          </div>


                        </div>
                        <div className=" col-sm-12 col-md-1"></div>
                        <div className=" col-sm-12 col-md-4" >
                          <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/d.png" alt="The Ultimate Ethical Hacking Boot Camp" className />


                        </div>
                      </div>
                    </div></div></div></div>
              <br />
              <br />





              <div >
                <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
                  < div className="wpb_wrapper">
                    <div className="thim-sc-button text-right hide-separator ">
                      <a target="_self" className="btn btn-primary btn-lg">
                        <Link to={`/modifiersupchapitres/${postcourse._id}`}>
                          <span className="text" style={{ color: '#FFFFFF' }}>Continue</span>
                        </Link>
                      </a>
                    </div>
                  </div></div></div>
                <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
                  <div className="wpb_wrapper"><div className="thim-sc-button text-left hide-separator ">
                    <a target="_self" className="btn btn-basic btn-lg" >
                      <Button type="submit" >modifier</Button>
                    </a>
                  </div>


                  </div>
                </div></div></div>

            </>
          </MuiThemeProvider>
        </form>
      </div>
    </div>
    );
}

export default ModifierConclusion