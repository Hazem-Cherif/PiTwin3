import React, { Component,Form,useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import QueuePlayNextTwoToneIcon from '@material-ui/icons/QueuePlayNextTwoTone';
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';
import {Link} from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import './StepForm.css';



 function ChapitresCourzelo({nextStep,handleSubmit})   {
 
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), text1: '', text2: '', text3: '' },
  ]);

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }
  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  text1: '', text2: '', text3: '' }])
  }
  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
  
  const handleSubmitt = (e) => {
    //e.preventDefault();

    console.log("InputFields", inputFields);
  };
  const Continue = e => {
   // e.preventDefault();
    handleSubmit(inputFields);
    nextStep();
  };
        
    return (
      <div >
      <br/><br/><br/><br/><br/>
      <form >
      
          <div className="main">

              <div className="side"></div>
              <div className="userform" style={{marginLeft:'-400px',width:'1550px'}}>
                  <MuiThemeProvider>
                      <>
                          <h1>Chapitres</h1>
                          <div className="row" style={{marginBottom:'100px'}}>
              <div className=" col-sm-12 col-md-6" style={{height:'290px'}} >
          
              <img loading="lazy" style={{width:'600px',height:'300px'}} src="assets/kolb.png" alt="The Ultimate Ethical Hacking Boot Camp" className /> 


              </div>
         <div className="col-sm-12 col-md-6">            
         <p  style={{color:'#0075BA',fontSize:'18px',fontStyle:'italic',marginTop:'100px' }}>
-As an instructional design tool, 4MAT gives teachers and trainers a systematic
way to train all learners to think and learn well.<br/>
-As a professional development tool, it provides a framework for assessing the quality of any learning experience.
-As an organisational model, it offers a method for creating an environment for continuous learning and development.</p>

</div>

              </div>                           { inputFields.map(inputField => (
                          <div className="boxcard" style={{marginBottom:'50px'}}>
                            
                              <Button
                            
                 color="primary"
                 variant="contained"
                 onClick={handleAddFields}
                 
               >+</Button>
               
               <Button
               style={{marginLeft:'1px'}}
                 color="primary"
                 variant="contained"
                 disabled={inputFields.length === 1}
                 onClick={() => handleRemoveFields(inputField.id)}
                 
               >-</Button>
             
                              <div className="accordion" id="accordionExample">

                
                                      
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
              <div className="card col-sm-12 col-md-7" style={{backgroundColor:'#EFEFEF'}} >
                <h5 style={{color:'black'}}><b style={{color:'#D23941',fontSize:'18px'}}> connect? </b> </h5>
                <p style={{color:'black'}}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                                                  <div >
                                                      {/* Tab 1 */}
                                                    

                                                      <div >

                                                          <>
                                                              <section >
                                                                  <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                  <i style={{marginLeft:'100px'}}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                  <i style={{marginLeft:'100px'}} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                  <i style={{marginLeft:'100px'}}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>
                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <textarea
                   placeholder=" phase 1"
                   label="phase1"
                   onChange={event => handleChangeInput(inputField.id, event)}
                   name="text1"
                   defaultValue=''
                   margin="normal"
                   fullWidth
                 />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                              <div className="collapse" id="collapseExamplepdf1">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>
                  
              </div>
              <div className=" col-sm-12 col-md-1"></div>
            <div className=" col-sm-12 col-md-4" >
              <img loading="lazy" style={{width:'8000px',height:'320px'}} src="assets/kolbA.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /> 


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
              <div className="card col-sm-12 col-md-7" style={{backgroundColor:'#EFEFEF'}} >
                <h5 style={{color:'black'}}> <b style={{color:'#D23941',fontSize:'18px'}}> Attend? </b> </h5>
                <p style={{color:'black'}}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                <div >
                                                      {/* Tab 1 */}
                                                    

                                                      <div >

                                                          <>
                                                              <section >
                                                                  <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                  <i style={{marginLeft:'100px'}}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                  <i style={{marginLeft:'100px'}} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                  <i style={{marginLeft:'100px'}}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>

                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <textarea
                   placeholder=" phase 2"
                   label="phase2"
                   onChange={event => handleChangeInput(inputField.id, event)}
                   name="text2"
                   defaultValue=''
                   margin="normal"
                   fullWidth
                 />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                              <div className="collapse" id="collapseExamplepdf1">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>
                  
              </div>
              <div className=" col-sm-12 col-md-1"></div>
            <div className=" col-sm-12 col-md-4" >
              <img loading="lazy" style={{width:'8000px',height:'320px'}} src="assets/b.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /> 


              </div>
                                              </div> 
                                              </div></div></div></div>
  <div className="accordion" id="accordionExample">

<div className="cardd">
    <div className="cardd-header" id="headingThree">

        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            <h5>Phase 3:  </h5>
        </button>

    </div>
    <div id="collapseThree" className="collapse " aria-labelledby="headingThree" data-parent="#accordionExample">
        <div className="card-body">
                                              <div className="row">
              <div className="card col-sm-12 col-md-7" style={{backgroundColor:'#EFEFEF'}} >
                <h5 style={{color:'black'}}> <b style={{color:'#D23941',fontSize:'18px'}}> Image? </b> </h5>
                <p style={{color:'black'}}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                <div >
                                                      {/* Tab 1 */}
                                                    

                                                      <div >

                                                          <>
                                                              <section >
                                                                  <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                  <i style={{marginLeft:'100px'}}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                  <i style={{marginLeft:'100px'}} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                  <i style={{marginLeft:'100px'}}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>

                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <textarea
                   placeholder=" phase 3"
                   label="phase3"
                   onChange={event => handleChangeInput(inputField.id, event)}
                   name="text3"
                   defaultValue=''
                   margin="normal"
                   fullWidth
                 />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                              <div className="collapse" id="collapseExamplepdf1">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>
                  
              </div>
              <div className=" col-sm-12 col-md-1"></div>
            <div className=" col-sm-12 col-md-4" >
              <img loading="lazy" style={{width:'8000px',height:'320px'}} src="assets/kolbC.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /> 


              </div>
                                              </div> 
                                              </div></div></div></div>
  <div className="accordion" id="accordionExample">

<div className="cardd">
    <div className="cardd-header" id="headingFour">

        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
            <h5>Phase 4:  </h5>
        </button>

    </div>
    <div id="collapseFour" className="collapse " aria-labelledby="headingFour" data-parent="#accordionExample">
        <div className="card-body">
                                              <div className="row">
              <div className="card col-sm-12 col-md-7" style={{backgroundColor:'#EFEFEF'}} >
                <h5 style={{color:'black'}}> <b style={{color:'#D23941',fontSize:'18px'}}> Inform? </b> </h5>
                <p style={{color:'black'}}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                <div >
                                                      {/* Tab 1 */}
                                                    

                                                      <div >

                                                          <>
                                                              <section >
                                                                  <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                  <i style={{marginLeft:'100px'}}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                  <i style={{marginLeft:'100px'}} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                  <i style={{marginLeft:'100px'}}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>

                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <textarea
                   placeholder=" phase 1"
                   label="phase1"
                   onChange={event => handleChangeInput(inputField.id, event)}
                   name="text1"
                   defaultValue=''
                   margin="normal"
                   fullWidth
                 />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                              <div className="collapse" id="collapseExamplepdf1">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>
                  
              </div>
              <div className=" col-sm-12 col-md-1"></div>
            <div className=" col-sm-12 col-md-4" >
              <img loading="lazy" style={{width:'8000px',height:'320px'}} src="assets/kolbD.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /> 


              </div>
                                              </div> 
                                              </div></div></div></div>
  <div className="accordion" id="accordionExample">

<div className="cardd">
    <div className="cardd-header" id="headingFive">

        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
            <h5>Phase 5:  </h5>
        </button>

    </div>
    <div id="collapseFive" className="collapse " aria-labelledby="headingFive" data-parent="#accordionExample">
        <div className="card-body">
                                              <div className="row">
              <div className="card col-sm-12 col-md-7" style={{backgroundColor:'#EFEFEF'}} >
                <h5 style={{color:'black'}}> <b style={{color:'#D23941',fontSize:'18px'}}> Practice? </b> </h5>
                <p style={{color:'black'}}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                <div >
                                                      {/* Tab 1 */}
                                                    

                                                      <div >

                                                          <>
                                                              <section >
                                                                  <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                  <i style={{marginLeft:'100px'}}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                  <i style={{marginLeft:'100px'}} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                  <i style={{marginLeft:'100px'}}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>

                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <textarea
                   placeholder=" phase 1"
                   label="phase1"
                   onChange={event => handleChangeInput(inputField.id, event)}
                   name="text1"
                   defaultValue=''
                   margin="normal"
                   fullWidth
                 />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                              <div className="collapse" id="collapseExamplepdf1">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>
              </div>
              <div className=" col-sm-12 col-md-1"></div>
            <div className=" col-sm-12 col-md-4" >
              <img loading="lazy" style={{width:'8000px',height:'320px'}} src="assets/kolbE.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /> 


              </div>
                                              </div> 
                                              </div></div></div></div>
  <div className="accordion" id="accordionExample">

<div className="cardd">
    <div className="cardd-header" id="headingSix">

        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
            <h5>Phase 6:  </h5>
        </button>

    </div>
    <div id="collapseSix" className="collapse " aria-labelledby="headingSix" data-parent="#accordionExample">
        <div className="card-body">
                                              <div className="row">
              <div className="card col-sm-12 col-md-7" style={{backgroundColor:'#EFEFEF'}} >
                <h5 style={{color:'black'}}><b style={{color:'#D23941',fontSize:'18px'}}> Extend? </b> </h5>
                <p style={{color:'black'}}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                <div >
                                                      {/* Tab 1 */}
                                                    

                                                      <div >

                                                          <>
                                                              <section >
                                                                  <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                  <i style={{marginLeft:'100px'}}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                  <i style={{marginLeft:'100px'}} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                  <i style={{marginLeft:'100px'}}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>

                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <textarea
                   placeholder=" phase 1"
                   label="phase1"
                   onChange={event => handleChangeInput(inputField.id, event)}
                   name="text1"
                   defaultValue=''
                   margin="normal"
                   fullWidth
                 />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                              <div className="collapse" id="collapseExamplepdf1">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>
                  
              </div>
              <div className=" col-sm-12 col-md-1"></div>
            <div className=" col-sm-12 col-md-4" >
              <img loading="lazy" style={{width:'8000px',height:'320px'}} src="assets/kolbF.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /> 


              </div>
                                              </div> 
                                              </div></div></div></div>
  <div className="accordion" id="accordionExample">

<div className="cardd">
    <div className="cardd-header" id="headingEight">

        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
            <h5>Phase 7:  </h5>
        </button>

    </div>
    <div id="collapseEight" className="collapse " aria-labelledby="headingEight" data-parent="#accordionExample">
        <div className="card-body">
                                              <div className="row">
              <div className="card col-sm-12 col-md-7" style={{backgroundColor:'#EFEFEF'}} >
                <h5 style={{color:'black'}}> <b style={{color:'#D23941',fontSize:'18px'}}> Refine? </b> </h5>
                <p style={{color:'black'}}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                <div >
                                                      {/* Tab 1 */}
                                                    

                                                      <div >

                                                          <>
                                                              <section >
                                                                  <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                  <i style={{marginLeft:'100px'}}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                  <i style={{marginLeft:'100px'}} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                  <i style={{marginLeft:'100px'}}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>

                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <textarea
                   placeholder=" phase 1"
                   label="phase1"
                   onChange={event => handleChangeInput(inputField.id, event)}
                   name="text1"
                   defaultValue=''
                   margin="normal"
                   fullWidth
                 />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                              <div className="collapse" id="collapseExamplepdf1">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>
                  
              </div>
              <div className=" col-sm-12 col-md-1"></div>
            <div className=" col-sm-12 col-md-4" >
              <img loading="lazy" style={{width:'8000px',height:'320px'}} src="assets/kolbG.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /> 


              </div>
                                              </div> 
                                              </div></div></div></div>
  <div className="accordion" id="accordionExample">

<div className="cardd">
    <div className="cardd-header" id="headingOnev">

        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOnev" aria-expanded="true" aria-controls="collapseOnev">
            <h5>Phase 8:  </h5>
        </button>

    </div>
    <div id="collapseOnev" className="collapse " aria-labelledby="headingOnev" data-parent="#accordionExample">
        <div className="card-body">
                                              <div className="row">
              <div className="card col-sm-12 col-md-7" style={{backgroundColor:'#EFEFEF'}} >
                <h5 style={{color:'black'}}> <b style={{color:'#D23941',fontSize:'18px'}}> Perform? </b> </h5>
                <p style={{color:'black'}}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                <div >
                                                      {/* Tab 1 */}
                                                    

                                                      <div >

                                                          <>
                                                              <section >
                                                                  <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                  <i style={{marginLeft:'100px'}}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                  <i style={{marginLeft:'100px'}} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                  <i style={{marginLeft:'100px'}}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>

                                                              </section>






                                                              <div className="collapse" id="collapseExample4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <textarea
                   placeholder=" phase 1"
                   label="phase1"
                   onChange={event => handleChangeInput(inputField.id, event)}
                   name="text1"
                   defaultValue=''
                   margin="normal"
                   fullWidth
                 />
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleImg4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>

                                                              <div className="collapse" id="collapseExampleVid4">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                              <div className="collapse" id="collapseExamplepdf1">
                                                                  <div className="cardd card-body">
                                                                      <div className="form-group">
                                                                      <input type="file"
                                      name="file"
                                      id="file_up"
                                       ></input> 
                                                                      </div>    </div>
                                                              </div>
                                                          </>


                                                      </div>


                                                  </div>
                  
              </div>
              <div className=" col-sm-12 col-md-1"></div>
            <div className=" col-sm-12 col-md-4" >
              <img loading="lazy" style={{width:'8000px',height:'320px'}} src="assets/kolbb.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /> 


              </div>
                                              </div> 

                                              </div></div></div></div>
                                 

                              </div>






                          </div>
 

                          )) };
                          <br />

                         



                          <Button
            color="secondary"
            variant="contained"
            style={{marginLeft:'600px'}}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={Continue}
            
          >Continue</Button>

                        

                          <br />

                      </>
                  </MuiThemeProvider>
              </div>
          </div>
     
     
       
          </form>
  </div>
    );
  }


export default ChapitresCourzelo;
