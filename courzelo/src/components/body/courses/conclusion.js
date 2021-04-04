import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addCourse } from '../../../redux/actions/courseAction';
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
     <div>
           <br /><br /><br /><br />
          
            <TextField
              placeholder=" phase 1"
              label="phase1"
              onChange={(e)=>handleChangePhase5(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder=" phase 2"
              label="phase2"
              onChange={(e)=>handleChangePhase6(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder=" phase 3"
              label="phase3"
              onChange={(e)=>handleChangePhase7(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            /><br />
            <TextField
              placeholder=" phase 4"
              label="phase4"
              onChange={(e)=>handleChangePhase8(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            /><br />
           

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={(e) => this.handleSubmit(e)}
            >Add course</Button>
            </div>
          
    );
  }
}

export default connect()(Conclusion)

