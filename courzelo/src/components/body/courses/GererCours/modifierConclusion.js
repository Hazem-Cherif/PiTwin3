import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import QueuePlayNextTwoToneIcon from '@material-ui/icons/QueuePlayNextTwoTone';
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';
import TextField from '@material-ui/core/TextField';
import {useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse,deleteCourse } from '../../../../redux/actions/courseAction';



function ModifierConclusion() {
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
  <MuiThemeProvider>
    <>
      <h2>Conclusion</h2>
      <p className="parag">Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.</p>
      <div className="card">
        <h5>Phase 1: <b> Why? </b> </h5>
        <p>We want to understand meaning and purpose, and the instructor’s role is to make connections between the material and the learners, to engage their attention.</p>


        <div className="tabset">
          {/* Tab 1 */}
          <input type="radio" name="tabset" id="tab1" aria-controls="marzen" />
          <label htmlFor="tab1">Select content type</label>

          <div className="tab-panels">

            <>
              <section id="marzen" className="tab-panel">
              <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" /></i>
                <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid1" aria-expanded="false" aria-controls="collapseExampleVid1" /> </i>
                <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg1" aria-expanded="false" aria-controls="collapseExampleImg1"/> </i>
              </section>






              <div className="collapse" id="collapseExample1">
                <div className="cardd card-body">
                  <div className="form-group">
                    <CKEditor
                      editor={ClassicEditor}

                    

                    />
                  </div>    </div>
              </div>

              <div className="collapse" id="collapseExampleImg1">
                <div className="cardd card-body">
                  <div className="form-group">
                   
                  </div>   <input type="file" 
  name="file"
  id="file_up" 
/> </div>
              </div>

              <div className="collapse" id="collapseExampleVid1">
                <div className="cardd card-body">
                  <div className="form-group">
                    
                  </div><input type="file"
                    name="file"
                    id="file_up"
                 ></input>     </div>
              </div>
            </>


          </div>


        </div>


      </div>

      <br />
      <div className="card">
        <h5>Phase 2: <b> What? </b> </h5>
        <p>Only when we are satisfied about relevance are we ready to know ‘What?’ At this stage, the trainer provides information and satisfies our desire for facts, structure and theory.</p>


        <div className="tabset">
          {/* Tab 2 */}
          <input type="radio" name="tabset" id="tab2" aria-controls="marzen" />
          <label htmlFor="tab2">Select content type</label>

          <div className="tab-panels">

            <>
              <section id="marzen" className="tab-panel">
              <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2" /></i>
                <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid2" aria-expanded="false" aria-controls="collapseExampleVid2" /> </i>
                <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg2" aria-expanded="false" aria-controls="collapseExampleImg2"/> </i>
              </section>






              <div className="collapse" id="collapseExample2">
                <div className="cardd card-body">
                  <div className="form-group">
                    <CKEditor
                      editor={ClassicEditor}

                      

                    />
                  </div>    </div>
              </div>

              <div className="collapse" id="collapseExampleImg2">
                <div className="cardd card-body">
                  <div className="form-group">
                   
                  </div>  <input type="file" 
  name="file"
  id="file_up" 
 />  </div>
              </div>

              <div className="collapse" id="collapseExampleVid2">
                <div className="cardd card-body">
                  <div className="form-group">
                    
                  </div> <input type="file"
                    name="file"
                    id="file_up"
                     ></input>    </div>
              </div>
            </>


          </div>


        </div>


      </div>
      <br />
      <div className="card">
        <h5>Phase 3: <b> How? </b> </h5>
        <p>
Once we have the knowledge, we ask ‘How?’ and we want to understand how we can apply our new insights to the real world. We focus on problems and how we can use our learning to solve them</p>


        <div className="tabset">
          {/* Tab 3 */}
          <input type="radio" name="tabset" id="tab3" aria-controls="marzen" />
          <label htmlFor="tab3">Select content type</label>

          <div className="tab-panels">

            <>
              <section id="marzen" className="tab-panel">
              <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3" /></i>
                <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid3" aria-expanded="false" aria-controls="collapseExampleVid3" /> </i>
                <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg3" aria-expanded="false" aria-controls="collapseExampleImg3"/> </i>
              </section>






              <div className="collapse" id="collapseExample3">
                <div className="cardd card-body">
                  <div className="form-group">
                    <CKEditor
                      editor={ClassicEditor}


                    />
                  </div>    </div>
              </div>

              <div className="collapse" id="collapseExampleImg3">
                <div className="cardd card-body">
                  <div className="form-group">
                   
                  </div> <input type="file" 
  name="file"
  id="file_up" 
 />   </div>
              </div>

              <div className="collapse" id="collapseExampleVid3">
                <div className="cardd card-body">
                  <div className="form-group">
                    
                  </div>  <input type="file"
                    name="file"
                    id="file_up"
                     ></input>   </div>
              </div>
            </>


          </div>


        </div>


      </div>
      <br />
      <div className="card">
        <h5>Phase 4: <b> What If? </b> </h5>
        <p>Finally, we want to try it out, so we ask questions like ‘What if?’ ‘What else?’ or ‘What next?’ This is when we engage in active experimentation, trial and error, pushing at the boundaries – learning by doing.</p>


        <div className="tabset">
          {/* Tab 4 */}
          <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
          <label htmlFor="tab4">Select content type</label>

          <div className="tab-panels">

            <>
              <section id="marzen" className="tab-panel">
              <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4"/> </i>
              </section>






              <div className="collapse" id="collapseExample4">
                <div className="cardd card-body">
                  <div className="form-group">
                    <CKEditor
                      

                    />
                  </div>    </div>
              </div>

              <div className="collapse" id="collapseExampleImg4">
                <div className="cardd card-body">
                  <div className="form-group">
                   
                  </div> <input type="file" 
  name="file"
  id="file_up" 

 />   </div>
              </div>

              <div className="collapse" id="collapseExampleVid4">
                <div className="cardd card-body">
                  <div className="form-group">
                    
                  </div>  <input type="file"
                    name="file"
                    id="file_up"
                    ></input>   </div>
              </div>
            </>


          </div>


        </div>


      </div>











      <br />
      <br />

      <br />



      <div >
          <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
            < div className="wpb_wrapper">
              <div className="thim-sc-button text-right hide-separator ">
                  <a target="_self" className="btn btn-primary btn-lg">
                  <Link to={`/Gerercoursemodifsupp/`}  >
                    <span className="text" style={{color:'#FFFFFF'}}>Continue</span>
                    </Link>
                  </a>
                </div>
              </div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
              <div className="wpb_wrapper"><div className="thim-sc-button text-left hide-separator ">
                  <a target="_self" className="btn btn-basic btn-lg" >
                  <Button     type="submit" >Update</Button>
                  </a>
                </div>
               

              </div>
              </div></div></div>


    </>
  </MuiThemeProvider>
</div>
</div>
);

        </div>
    )
}

export default ModifierConclusion