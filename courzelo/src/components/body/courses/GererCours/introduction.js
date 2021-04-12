import React, { Component } from 'react';
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




export class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction:
      {
        video1: [],
        img1:[],
        video2: [],
        img2:[],
        video3: [],
        img3:[],
        video4: [],
        

      }
    }
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { course, handleChangePhase1, handleChangePhase2, handleChangePhase3, handleChangePhase4, uploadHandlerVideo1, uploadHandlerVideo2, uploadHandlerVideo3, uploadHandlerVideo4,uploadHandlerImg1,uploadHandlerImg2,uploadHandlerImg3,uploadHandlerImg4 } = this.props;
    return (
      <div className="main">

        <div className="side"></div>
        <div className="userform">
          <MuiThemeProvider>
            <>
              <h2>Introduction</h2>
              <p className="parag">Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.</p>
              <div className="card">
                <h5>Phase 1: <b> Why? </b> </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


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
                      </section>






                      <div className="collapse" id="collapseExample1">
                        <div className="cardd card-body">
                          <div className="form-group">
                            <CKEditor
                              editor={ClassicEditor}

                              onChange={handleChangePhase1}

                            />
                          </div>    </div>
                      </div>


                      <div className="collapse" id="collapseExampleImg1">
                        <div className="cardd card-body">
                          <div className="form-group">
                            
                          </div> <input type="file" 
          name="file"
          id="file_up" 
         onChange={(e)=>uploadHandlerImg1(e)}
         Value={course.introduction.img1} />
    </div>
                      </div>

                      <div className="collapse" id="collapseExampleVid1">
                        <div className="cardd card-body">
                          <div className="form-group">

                          </div> <input type="file"
                            name="file"
                            id="file_up"
                            onChange={(e) => uploadHandlerVideo1(e)} ></input>   </div>
                      </div>
                    </>


                  </div>


                </div>


              </div>

              <br />
              <div className="card">
                <h5>Phase 2: <b> What? </b> </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


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
                      </section>






                      <div className="collapse" id="collapseExample2">
                        <div className="cardd card-body">
                          <div className="form-group">
                            <CKEditor
                              editor={ClassicEditor}

                              onChange={handleChangePhase2}

                            />
                          </div>    </div>
                      </div>

                      <div className="collapse" id="collapseExampleImg2">
                        <div className="cardd card-body">
                          <div className="form-group">
                            
                          </div>  <input type="file" 
          name="file"
          id="file_up" 
         onChange={(e)=>uploadHandlerImg2(e)}
         Value={course.introduction.img2} />
       </div>
                      </div>

                      <div className="collapse" id="collapseExampleVid2">
                        <div className="cardd card-body">
                          <div className="form-group">
                            
                          </div><input type="file"
                            name="file"
                            id="file_up"
                            onChange={(e) => uploadHandlerVideo2(e)} ></input>     </div>
                      </div>
                    </>


                  </div>


                </div>


              </div>
              <br />
              <div className="card">
                <h5>Phase 3: <b> How? </b> </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


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
                      </section>






                      <div className="collapse" id="collapseExample3">
                        <div className="cardd card-body">
                          <div className="form-group">
                            <CKEditor
                              editor={ClassicEditor}

                              onChange={handleChangePhase3}

                            />
                          </div>    </div>
                      </div>

                      <div className="collapse" id="collapseExampleImg3">
                        <div className="cardd card-body">
                          <div className="form-group">
                            
                          </div><input type="file" 
          name="file"
          id="file_up" 
         onChange={(e)=>uploadHandlerImg3(e)}
         Value={course.introduction.img3} />    </div>
                      </div>

                      <div className="collapse" id="collapseExampleVid3">
                        <div className="cardd card-body">
                          <div className="form-group">
                            
                          </div> <input type="file"
                            name="file"
                            id="file_up"
                            onChange={(e) => uploadHandlerVideo3(e)} ></input>    </div>
                      </div>
                    </>


                  </div>


                </div>


              </div>
              <br />
              <div className="card">
                <h5>Phase 4: <b> if? </b> </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


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

                              onChange={handleChangePhase4}

                            />
                          </div>    </div>
                      </div>

                      <div className="collapse" id="collapseExampleImg4">
                        <div className="cardd card-body">
                          <div className="form-group">
                           
                          </div>   <input type="file" 
          name="file"
          id="file_up" 
         onChange={(e)=>uploadHandlerImg4(e)}
         Value={course.introduction.img4} /> </div>
                      </div>

                      <div className="collapse" id="collapseExampleVid4">
                        <div className="cardd card-body">
                          <div className="form-group">
                            
                          </div> <input type="file"
                            name="file"
                            id="file_up"
                            onChange={(e) => uploadHandlerVideo4(e)} ></input>    </div>
                      </div>
                    </>


                  </div>


                </div>


              </div>











              <br />
              <br />

              <br />



              <Button
                color="secondary"
                variant="contained"
                onClick={this.back}
              >Back</Button>

              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Continue</Button>

            </>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default Introduction;