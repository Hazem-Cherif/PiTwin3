import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Introduction extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { course, handleChangePhase1,handleChangePhase2,handleChangePhase3,handleChangePhase4 } = this.props;
    return (
     <div>
           <br /><br /><br /><br />
          
            <TextField
              placeholder=" phase 1"
              label="phase1"
              onChange={(e)=>handleChangePhase1(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder=" phase 2"
              label="phase2"
              onChange={(e)=>handleChangePhase2(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder=" phase 3"
              label="phase3"
              onChange={(e)=>handleChangePhase3(e)}
              defaultValue=''
              margin="normal"
              fullWidth
            /><br />
            <TextField
              placeholder=" phase 4"
              label="phase4"
              onChange={(e)=>handleChangePhase4(e)}
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
              onClick={this.continue}
            >Continue</Button>
            </div>
          
    );
  }
}

export default Introduction;
