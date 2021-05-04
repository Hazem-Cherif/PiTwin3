
import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import QueuePlayNextTwoToneIcon from '@material-ui/icons/QueuePlayNextTwoTone';
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';

import { v4 as uuidv4 } from 'uuid';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';
import TextField from '@material-ui/core/TextField';
import {useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse,deleteCourse } from '../../../../redux/actions/courseAction';
function ModifierChapitres() {
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
      
      if(courses.length !== 0){
        courses.forEach(course => {
              if(course._id === id){
                setCourseData(course)
                  
              }
          })
      }
  },[courses, id])
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), text1: '', text2: '' },
  ]);
 
    const handleSubmit = async (e) => {
      alert('hello');
      e.preventDefault();
      console.log('test1',postcourse);
        dispatch(updateCourse(id, postcourse));
        console.log('test2',postcourse);


      }
    
 
 
    return (
        <div>
                <div >
      <br/><br/><br/><br/><br/>
      <form >
      { inputFields.map(inputField => (
          <div className="main">

              <div className="side"></div>
              <div className="userform">
                  <MuiThemeProvider>
                      <>
                          <h2>Chapitres</h2>
                          <p className="parag">Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.</p>
                          <div className="boxcard">
                            
                              <Button
                            
                 color="primary"
                 variant="contained"
               
                 
               >+</Button>
               
               <Button
               style={{marginLeft:'1px'}}
                 color="primary"
                 variant="contained"
                 disabled={inputFields.length === 1}
             
                 
               >-</Button>
             
                              <div className="accordion" id="accordionExample">

                                  <div className="cardd">
                                      <div className="cardd-header" id="headingOne">

                                          <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              <h5>Phase 1: <b> Connect </b> </h5>
                                          </button>

                                      </div>
                                      <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                          <div className="card-body">
                                              <div className="card">

                                                  <p>In the first quadrant, the reason why something should be learned is created, the answer to the question ‘why?’. This makes use of the ‘right mode’ of the brain. The goal is to have the learner experience it for themselves by getting them involved. This can be done, for example, by having the learner share his or her own experiences. This way the experience is stimulated by personal meaning. The teacher or expert who wants to convey something to others has a motivating role here and only has to guide the discussion.</p>


                                                  <div className="tabset">
                                                      {/* Tab 1 */}
                                                      <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                      <label htmlFor="tab4">Select content type</label>

                                                      <div className="tab-panels">

                                                          <>
                                                              <section id="marzen" className="tab-panel">
                                                                  <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                  <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                  <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                          <CKEditor
                                                                              editor={ClassicEditor}

                                                                            

                                                                          />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                          <p>image</p>
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                          <p>vid</p>
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>


                                              </div>      </div>
                                      </div>
                                  </div>












                                  <div className="cardd">
                                      <div className="cardd-header" id="headingTwo">
                                          <h2 className="mb-0">
                                              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                  <h5>Phase 2: <b> Attend </b> </h5>
                                              </button>
                                          </h2>
                                      </div>
                                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                          <div className="card-body">
                                              <div className="card">
                                                  <p>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. The goals of the first quadrant are: giving meaning to the subject, visualising and allowing the student to integrate aspects of the subject.</p>


                                                  <div className="tabset">
                                                      {/* Tab 2 */}
                                                      <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                      <label htmlFor="tab4">Select content type</label>

                                                      <div className="tab-panels">

                                                          <>
                                                              <section id="marzen" className="tab-panel">
                                                                  <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                  <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                  <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                          <CKEditor
                                                                              editor={ClassicEditor}

                                                                       
                                                                          />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                          <p>image</p>
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                          <p>vid</p>
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>


                                              </div>      </div>
                                      </div>
                                  </div>

















                                  <div className="cardd">
                                      <div className="cardd-header" id="headingThree">
                                          <h2 className="mb-0">
                                              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                  <h5>Phase 3: <b> Imagine </b> </h5>
                                              </button>
                                          </h2>
                                      </div>
                                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                          <div className="card-body">
                                              <div className="card">
                                                  <p>The question of ‘what?’ needs to be answered in the second quadrant. In this step, an attempt is made to make the student reflect more deeply. It is an integrating step in the right mode of the brain. Teachers should move the students from the concrete to the abstract. The subjective experiences will be mixed with the abstract theory that will be handled at a later stage. This allows pupils to form a picture of the subject material, which makes them reinforce their focus.</p>


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
                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                          <CKEditor
                                                                              editor={ClassicEditor}

                                                                            //  onChange={handleChangePhase4}

                                                                          />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                          <p>image</p>
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                          <p>vid</p>
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>


                                              </div>      </div>
                                      </div>
                                  </div>
                              </div>






                              <div className="cardd">
                                  <div className="cardd-header" id="headingFour">
                                      <h2 className="mb-0">
                                          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              <h5>Phase 4: <b> Inform </b> </h5>
                                          </button>
                                      </h2>
                                  </div>
                                  <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                      <div className="card-body">
                                          <div className="card">
                                              <p>In the left-hand mode of quadrant two, the teacher takes the student to the core of the conceptual information. This is all about taking in information. The information that you choose to share should be based on the concept and shared experiences, and should lead to further research by the student. The goals in quadrant two are conceptualising, defining, shaping and acquiring knowledge.</p>

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
                                                          </section>






                                                          <div className="collapse" id="collapseExample4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <CKEditor
                                                                          editor={ClassicEditor}

                                                                       

                                                                      />
                                                                  </div>    </div>
                                                          </div>

                                                          <div className="collapse" id="collapseExampleImg4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <p>image</p>
                                                                  </div>    </div>
                                                          </div>

                                                          <div className="collapse" id="collapseExampleVid4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <p>vid</p>
                                                                  </div>    </div>
                                                          </div>
                                                      </>


                                                  </div>


                                              </div>


                                          </div>      </div>
                                  </div>
                              </div>







                              <div className="cardd">
                                  <div className="cardd-header" id="headingFive">
                                      <h2 className="mb-0">
                                          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                              <h5>Phase 5: <b> Practice </b> </h5>
                                          </button>
                                      </h2>
                                  </div>
                                  <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                      <div className="card-body">
                                          <div className="card">
                                              <p>In the third quadrant the ‘how’ question is answered. In this step, students actively get started with the knowledge gained from the previous steps from the left mode. They will use worksheets, run experiments or use related technology.</p>


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
                                                          </section>






                                                          <div className="collapse" id="collapseExample4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <CKEditor
                                                                          editor={ClassicEditor}

                                                                        //  onChange={handleChangePhase4}

                                                                      />
                                                                  </div>    </div>
                                                          </div>

                                                          <div className="collapse" id="collapseExampleImg4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <p>image</p>
                                                                  </div>    </div>
                                                          </div>

                                                          <div className="collapse" id="collapseExampleVid4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <p>vid</p>
                                                                  </div>    </div>
                                                          </div>
                                                      </>


                                                  </div>


                                              </div>


                                          </div>      </div>
                                  </div>
                              </div>






                              <div className="cardd">
                                  <div className="cardd-header" id="headingSix">
                                      <h2 className="mb-0">
                                          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                              <h5>Phase 6: <b> Extand </b> </h5>
                                          </button>
                                      </h2>
                                  </div>
                                  <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                      <div className="card-body">
                                          <div className="card">
                                              <p>The teacher can let students create a project proposal related to the curriculum, which encourages them to think actively. The objectives from quadrant three include collecting data, asking questions, hypothesising, tinkering, experimenting and making decisions.</p>


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
                                                          </section>






                                                          <div className="collapse" id="collapseExample4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <CKEditor
                                                                          editor={ClassicEditor}

                                                                         // onChange={handleChangePhase4}

                                                                      />
                                                                  </div>    </div>
                                                          </div>

                                                          <div className="collapse" id="collapseExampleImg4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <p>image</p>
                                                                  </div>    </div>
                                                          </div>

                                                          <div className="collapse" id="collapseExampleVid4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <p>vid</p>
                                                                  </div>    </div>
                                                          </div>
                                                      </>


                                                  </div>


                                              </div>


                                          </div>      </div>
                                  </div>
                              </div>



                              <div className="cardd">
                                  <div className="cardd-header" id="headingSeven">
                                      <h2 className="mb-0">
                                          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                              <h5>Phase 7: <b> Refine </b> </h5>
                                          </button>
                                      </h2>
                                  </div>
                                  <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                      <div className="card-body">
                                          <div className="card">
                                              <p>In the fourth quadrant, the ‘what if’ question will be answered. In this step, the students are asked to analyse what they’ve planned as an addition to what they’ve learned from the previous step. The analytical aspect to this step makes it an activity for the left mode. This seventh step requires students to refine what they’ve learned and applied in the exercises.</p>


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
                                                          </section>






                                                          <div className="collapse" id="collapseExample4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <CKEditor
                                                                          editor={ClassicEditor}

                                                                        //  onChange={handleChangePhase4}

                                                                      />
                                                                  </div>    </div>
                                                          </div>

                                                          <div className="collapse" id="collapseExampleImg4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <p>image</p>
                                                                  </div>    </div>
                                                          </div>

                                                          <div className="collapse" id="collapseExampleVid4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <p>vid</p>
                                                                  </div>    </div>
                                                          </div>
                                                      </>


                                                  </div>


                                              </div>


                                          </div>      </div>
                                  </div>
                              </div>







                              <div className="cardd">
                                  <div className="cardd-header" id="headingEight">
                                      <h2 className="mb-0">
                                          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                              <h5>Phase 8: <b> Perform </b> </h5>
                                          </button>
                                      </h2>
                                  </div>
                                  <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                                      <div className="card-body">
                                          <div className="card">
                                              <p>In the final step of the 4MAT model’s learning process, the students explain to each other what they have learned or created. It’s also important in this step that the students are asked to talk about what they’ve learned and gained from this entire cycle. The goals in the fourth quadrant are, among others: identify limitations, review, close, summarise and evaluate.</p>


                                              <div className="tabset">
                                                  {/* Tab 8 */}
                                                  <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                  <label htmlFor="tab4">Select content type</label>

                                                  <div className="tab-panels">

                                                      <>
                                                          <section id="marzen" className="tab-panel">
                                                              <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                              <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                              <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                          </section>






                                                          <div className="collapse" id="collapseExample4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <CKEditor
                                                                          editor={ClassicEditor}

                                                                        //  onChange={handleChangePhase4}

                                                                      />
                                                                  </div>    </div>
                                                          </div>

                                                          <div className="collapse" id="collapseExampleImg4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <p>image</p>
                                                                  </div>    </div>
                                                          </div>

                                                          <div className="collapse" id="collapseExampleVid4">
                                                              <div className="cardd card-body">
                                                                  <div className="form-group">
                                                                      <p>vid</p>
                                                                  </div>    </div>
                                                          </div>
                                                      </>


                                                  </div>


                                              </div>


                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>



                          <br />

                          <br />

                          <br />












                          <br />
                          <br />

                          
                          <div >
          <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
            < div className="wpb_wrapper">
              <div className="thim-sc-button text-right hide-separator ">
                  <a  target="_self" className="btn btn-primary btn-lg">
                  <Link to={`/modifiersupconclusion/${postcourse._id}`}  >
                    <span className="text" style={{color:'#FFFFFF'}}>update</span>
                    </Link>
                  </a>
                </div>
              </div></div></div>
         </div>

                      </>
                  </MuiThemeProvider>
              </div>
          </div>
       )) };
     
    


          </form>
  </div>
        </div>
    )
}

export default ModifierChapitres