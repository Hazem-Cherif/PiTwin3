import React, { Component } from 'react';
import FormCourseDetails from './FormCourseDetails';
import Introduction from './introduction';
import Conclusion from './conclusion';

export class AddCourse extends Component {
  
  state = {
    token:this.props.match.params.token,
    step:1,
    idUser: '',
    title: '',
    description: '',
    introduction:
    {
      text1:'',
      text2:'',
      text3:'',
      text4:''
      },
      conclusion:
      {
        text1:'',
        text2:'',
        text3:'',
        text4:''
        }
    
     
};

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleChangePhase0 =  e => {
    const intro=this.state.introduction;
    intro.text1=e.target.value;
    this.setState({introduction:intro
   
    });
   
  };
  
  
 
  
  handleChangePhase1 =  e => {
    const intro=this.state.introduction;
    intro.text1=e.target.value;
    this.setState({introduction:intro
   
    });
   
    
  };
  handleChangePhase2 =  e => {
    const intro=this.state.introduction;
    intro.text2=e.target.value;
    this.setState({introduction:intro
   
    });
   
  };
  handleChangePhase3 =  e => {
    
    const intro=this.state.introduction;
    intro.text3=e.target.value;
    this.setState({introduction:intro
   
    });
    
  };
  handleChangePhase4 =  e => {
    
   const intro=this.state.introduction;
    intro.text4=e.target.value;
    this.setState({introduction:intro
   
    });
  
  };


  handleChangePhase5 =  e => {
    const conc=this.state.conclusion;
    conc.text1=e.target.value;
    this.setState({conclusion:conc
   
    });
  
  };
  handleChangePhase6 =  e => {
    const conc=this.state.conclusion;
    conc.text2=e.target.value;
    this.setState({conclusion:conc
   
    });
    
  };
  handleChangePhase7 =  e => {
    
    const conc=this.state.conclusion;
    conc.text3=e.target.value;
    this.setState({conclusion:conc
   
    });
   
  };
  handleChangePhase8 =  e => {
    
   const conc=this.state.conclusion;
    conc.text4=e.target.value;
    this.setState({conclusion:conc
   
    });
    
  };
  render() {
    const { step } = this.state;
    const { title, description, introduction, conclusion } = this.state;
    const course = { title, description, introduction,conclusion };
     console.log('testkakakakakak',this.props.match.params.token);
    switch (step) {
      case 1:
        return (
          <FormCourseDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            course={course}
            
          />
        );
      case 2:
        return (
          <Introduction
          nextStep={this.nextStep}
          handleChangePhase1={this.handleChangePhase1}
          handleChangePhase2={this.handleChangePhase2}
          handleChangePhase3={this.handleChangePhase3}
          handleChangePhase4={this.handleChangePhase4}
          course={course}
        />
        );
        case 3:
        return (
          <Conclusion
          nextStep={this.nextStep}
          handleChangePhase5={this.handleChangePhase5}
          handleChangePhase6={this.handleChangePhase6}
          handleChangePhase7={this.handleChangePhase7}
          handleChangePhase8={this.handleChangePhase8}
          course={course}
          token={this.props.match.params.token}
        />
        );
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default AddCourse;
