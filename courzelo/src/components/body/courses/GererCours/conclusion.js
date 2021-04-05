import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import QueuePlayNextTwoToneIcon from '@material-ui/icons/QueuePlayNextTwoTone';
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';
import TextField from '@material-ui/core/TextField';
import { addCourse } from '../../../../redux/actions/courseAction';
import { connect } from 'react-redux'



export class Conclusion extends Component {

 handleSubmit = async  (dispatch) => {
    
    alert('test');
        //e.preventDefault();
    this.props.dispatch(addCourse(this.props.token,this.props.course));
         // dispatch(addCourse(this.props.token,this.props.course));
        
      };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { course, handleChangePhase5,handleChangePhase6,handleChangePhase7,handleChangePhase8,token } = this.props;
    return (
      <div className="main">
           
      <div className="side"></div>
<div className="userform">
      <MuiThemeProvider>
        <>
          <h2>Conclusion</h2>
          <p>Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.</p>
          <div className="card">
            <h5>Phase 1: Why? </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>
<TextField
              placeholder=" phase 1"
              label="phase1"
              onChange={(e)=>handleChangePhase5(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            />

            <div className="tabset">
              {/* Tab 1 */}
              <input type="radio" name="tabset" id="tab1" aria-controls="marzen" defaultChecked />
              <label htmlFor="tab1">Select content type</label>

              <div className="tab-panels">
                <section id="marzen" className="tab-panel">
                <i> < DescriptionTwoToneIcon /> </i>
                <i>   <QueuePlayNextTwoToneIcon /> </i>
                <i><PermMediaTwoToneIcon /> </i>
                </section>

              </div>
            </div>


          </div>
         
         <br />
         <div className="card">
            <h5>Phase 2: What? </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>

 <TextField
              placeholder=" phase 2"
              label="phase2"
              onChange={(e)=>handleChangePhase6(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            />

            <div className="tabset">
              {/* Tab 1 */}
              <input type="radio" name="tabset" id="tab2" aria-controls="marzen" defaultChecked />
              <label htmlFor="tab2">Select content type</label>

              <div className="tab-panels">
                <section id="marzen" className="tab-panel">
                <i>     < DescriptionTwoToneIcon /> </i> 
                <i> <QueuePlayNextTwoToneIcon /> </i> 
                <i>   <PermMediaTwoToneIcon /> </i>
                </section>

              </div>
            </div>


          </div>
          <br />
         <div className="card">
            <h5>Phase 3: How? </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>

 <TextField
              placeholder=" phase 3"
              label="phase3"
              onChange={(e)=>handleChangePhase7(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            />
            <div className="tabset">
              {/* Tab 1 */}
              <input type="radio" name="tabset" id="tab3" aria-controls="marzen" defaultChecked />
              <label htmlFor="tab3">Select content type</label>

              <div className="tab-panels">
                <section id="marzen" className="tab-panel">
                <i> < DescriptionTwoToneIcon /> </i> 
                <i>  <QueuePlayNextTwoToneIcon /> </i> 
                <i>   <PermMediaTwoToneIcon /> </i> 
                </section>

              </div>
            </div>


          </div>
          <br />
         <div className="card">
            <h5>Phase 4: If? </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>

 <TextField
              placeholder=" phase 4"
              label="phase4"
              onChange={(e)=>handleChangePhase8(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            />
            <div className="tabset">
              {/* Tab 1 */}
              <input type="radio" name="tabset" id="tab4" aria-controls="marzen" defaultChecked />
              <label htmlFor="tab4">Select content type</label>

              <div className="tab-panels">
                <section id="marzen" className="tab-panel">
                <i> < DescriptionTwoToneIcon /> </i>
                  <i> <QueuePlayNextTwoToneIcon /> </i>
                  <i>  <PermMediaTwoToneIcon /> </i>
                </section>

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
                          onClick={(e) => this.handleSubmit(e)}

          >Continue</Button>

        </>
      </MuiThemeProvider>
      </div>
      </div>
    );
  }
}

export default connect()(Conclusion)

