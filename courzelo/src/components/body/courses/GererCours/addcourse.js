import React, { Component } from 'react';
import FormCourseDetails from './FormCourseDetails';
import Introduction from './introduction';
import Conclusion from './conclusion';
import Chapitre from './Chapitre';
import ChapitresCourzelo from './chapitreCourzelo';

import axios from 'axios'
export class AddCourse extends Component {

  state = {
    token: this.props.match.params.token,
    step: 1,
    idUser: '',
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

  handleChangePhase0 = e => {
    const intro = this.state.introduction;
    intro.text1 = e.target.value;
    this.setState({
      introduction: intro

    });

  };


  uploadHandler = async e => {
    e.preventDefault()

    const data = this.state

    const token = this.props.token;

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

      this.setState({ CourseImg: res.data.url })
    })
  }
  uploadHandlerImg1 = async e => {
    e.preventDefault()

    const data = this.state

    const token = this.props.token;

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

      const int = this.state.introduction;
      int.img1 = res.data.url;
      this.setState({ introduction: int })
    })
  }
  uploadHandlerImg2 = async e => {
    e.preventDefault()

    const data = this.state

    const token = this.props.token;

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

      const int = this.state.introduction;
      int.img2 = res.data.url;
      this.setState({ introduction: int })
    })
  }
  uploadHandlerImg3 = async e => {
    e.preventDefault()

    const data = this.state

    const token = this.props.token;

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

      const int = this.state.introduction;
      int.img3 = res.data.url;
      this.setState({ introduction: int })
    })
  }
  uploadHandlerImg4 = async e => {
    e.preventDefault()

    const data = this.state

    const token = this.props.token;

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

      const int = this.state.introduction;
      int.img4 = res.data.url;
      this.setState({ introduction: int })
    })
  }
  uploadHandlerImg5 = async e => {
    e.preventDefault()

    const data = this.state

    const token = this.props.token;

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

      const conc = this.state.conclusion;
      conc.img1 = res.data.url;
      this.setState({ conclusion: conc })
    })
  }
  uploadHandlerImg6 = async e => {
    e.preventDefault()

    const data = this.state

    const token = this.props.token;

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

      const conc = this.state.conclusion;
      conc.img2 = res.data.url;
      this.setState({ conclusion: conc })
    })
  }
  uploadHandlerImg7 = async e => {
    e.preventDefault()

    const data = this.state

    const token = this.props.token;

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

      const conc = this.state.conclusion;
      conc.img3 = res.data.url;
      this.setState({ conclusion: conc })
    })
  }
  uploadHandlerImg8 = async e => {
    e.preventDefault()

    const data = this.state

    const token = this.props.token;

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

      const conc = this.state.conclusion;
      conc.img4 = res.data.url;
      this.setState({ conclusion: conc })
    })
  }
  uploadHandlerVideo1 = async e => {
    e.preventDefault()

    const token = this.props.token;

    const file = e.target.files[0]

    if (!file) return this.state;


    if (file.type !== 'video/mp4')
      return this.state;

    let formData = new FormData()
    formData.append('file', file)


    const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
      const intro = this.state.introduction;
      intro.video1 = res.data.url;
      this.setState({ introduction: intro })
    })
  }

  handleChangePhase1 = (e, editor) => {
    const data = editor.getData()
    const intro = this.state.introduction;
    intro.text1 = data;
    this.setState({
      introduction: intro

    });


  };
  uploadHandlerVideo2 = async e => {
    e.preventDefault()

    const token = this.props.token;

    const file = e.target.files[0]

    if (!file) return this.state;


    if (file.type !== 'video/mp4')
      return this.state;

    let formData = new FormData()
    formData.append('file', file)


    const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
      const intro = this.state.introduction;
      intro.video2 = res.data.url;
      this.setState({ introduction: intro })
    })
  }
  handleChangePhase2 = (e, editor) => {
    const data = editor.getData()
    const intro = this.state.introduction;
    intro.text2 = data;
    this.setState({
      introduction: intro

    });


  };
  uploadHandlerVideo3 = async e => {
    e.preventDefault()

    const token = this.props.token;

    const file = e.target.files[0]

    if (!file) return this.state;


    if (file.type !== 'video/mp4')
      return this.state;

    let formData = new FormData()
    formData.append('file', file)


    const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
      const intro = this.state.introduction;
      intro.video3 = res.data.url;
      this.setState({ introduction: intro })
    })
  }
  handleChangePhase3 = (e, editor) => {
    const data = editor.getData()
    const intro = this.state.introduction;
    intro.text3 = data;
    this.setState({
      introduction: intro

    });


  };
  uploadHandlerVideo4 = async e => {
    e.preventDefault()

    const token = this.props.token;

    const file = e.target.files[0]

    if (!file) return this.state;


    if (file.type !== 'video/mp4')
      return this.state;

    let formData = new FormData()
    formData.append('file', file)


    const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
      const intro = this.state.introduction;
      intro.video4 = res.data.url;
      this.setState({ introduction: intro })
    })
  }
  handleChangePhase4 = (e, editor) => {
    const data = editor.getData()
    const intro = this.state.introduction;
    intro.text4 = data;
    this.setState({
      introduction: intro

    });


  };


  handleChangePhase5 = (e, editor) => {
    const data = editor.getData()
    const conc = this.state.conclusion;
    conc.text1 = data;
    this.setState({
      conclusion: conc

    });


  };
  uploadHandlerVideo5 = async e => {
    e.preventDefault()

    const token = this.props.token;

    const file = e.target.files[0]

    if (!file) return this.state;


    if (file.type !== 'video/mp4')
      return this.state;

    let formData = new FormData()
    formData.append('file', file)


    const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
      const conc = this.state.conclusion;
      conc.video1 = res.data.url;
      this.setState({ conclusion: conc })
    })
  }
  uploadHandlerVideo6 = async e => {
    e.preventDefault()

    const token = this.props.token;

    const file = e.target.files[0]

    if (!file) return this.state;


    if (file.type !== 'video/mp4')
      return this.state;

    let formData = new FormData()
    formData.append('file', file)


    const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
      const conc = this.state.conclusion;
      conc.video2 = res.data.url;
      this.setState({ conclusion: conc })
    })
  }
  handleChangePhase6 = (e, editor) => {
    const data = editor.getData()
    const conc = this.state.conclusion;
    conc.text2 = data;
    this.setState({
      conclusion: conc

    });


  };
  uploadHandlerVideo7 = async e => {
    e.preventDefault()

    const token = this.props.token;

    const file = e.target.files[0]

    if (!file) return this.state;


    if (file.type !== 'video/mp4')
      return this.state;

    let formData = new FormData()
    formData.append('file', file)


    const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
      const conc = this.state.conclusion;
      conc.video3 = res.data.url;
      this.setState({ conclusion: conc })
    })
  }
  handleChangePhase7 = (e, editor) => {
    const data = editor.getData()
    const conc = this.state.conclusion;
    conc.text3 = data;
    this.setState({
      conclusion: conc

    });


  };
  uploadHandlerVideo8 = async e => {
    e.preventDefault()

    const token = this.props.token;

    const file = e.target.files[0]

    if (!file) return this.state;


    if (file.type !== 'video/mp4')
      return this.state;

    let formData = new FormData()
    formData.append('file', file)


    const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
      const conc = this.state.conclusion;
      conc.video4 = res.data.url;
      this.setState({ conclusion: conc })
    })
  }
  handleChangePhase8 = (e, editor) => {
    const data = editor.getData()
    const conc = this.state.conclusion;
    conc.text4 = data;
    this.setState({
      conclusion: conc

    });


  };
  handleChangePhase1ch =  e => {
    
    alert('ch phase1');
     
   };
   handleChangePhase2ch =  e => {
    
    alert('ch phase2');
     
   };
   handleSubmit =  chapitre => {
    
    let stater=this.state;
    
   this.state.chapitres.push(chapitre);
   /*console.log('testetstet',this.state.chapitres);*/
    this.setState({...stater,chapitres:this.state.chapitres});
    /*console.log('tttttttt',this.state);*/
   };
  render() {
    const { step } = this.state;
    const { title, description, introduction,chapitres, conclusion, CourseImg } = this.state;
    const course = { title, description, introduction,chapitres, conclusion, CourseImg };
    console.log('testkakakakakak', this.props.match.params.token);
    switch (step) {
      case 1:
        return (
          <FormCourseDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            uploadHandler={this.uploadHandler}
            course={course}
            token={this.props.match.params.token}

          />
        );
      case 2:
        return (
          <Introduction
            nextStep={this.nextStep}
            handleChangePhase1={this.handleChangePhase1}
            uploadHandlerVideo1={this.uploadHandlerVideo1}
            uploadHandlerImg1={this.uploadHandlerImg1}
            handleChangePhase2={this.handleChangePhase2}
            uploadHandlerVideo2={this.uploadHandlerVideo2}
            uploadHandlerImg2={this.uploadHandlerImg2}
            handleChangePhase3={this.handleChangePhase3}
            uploadHandlerVideo3={this.uploadHandlerVideo3}
            uploadHandlerImg3={this.uploadHandlerImg3}
            handleChangePhase4={this.handleChangePhase4}
            uploadHandlerVideo4={this.uploadHandlerVideo4}
            uploadHandlerImg4={this.uploadHandlerImg4}
            course={course}
            token={this.props.match.params.token}
          />
        );
      case 3:
        return (
          <ChapitresCourzelo
          nextStep={this.nextStep}
          handleSubmit={this.handleSubmit}
          course={course}
        />
        );
      case 4:
        return (
          <Conclusion
            nextStep={this.nextStep}
            handleChangePhase5={this.handleChangePhase5}
            uploadHandlerVideo5={this.uploadHandlerVideo5}
            uploadHandlerImg5={this.uploadHandlerImg5}
            handleChangePhase6={this.handleChangePhase6}
            uploadHandlerVideo6={this.uploadHandlerVideo6}
            uploadHandlerImg6={this.uploadHandlerImg6}
            handleChangePhase7={this.handleChangePhase7}
            uploadHandlerVideo7={this.uploadHandlerVideo7}
            uploadHandlerImg7={this.uploadHandlerImg7}
            handleChangePhase8={this.handleChangePhase8}
            uploadHandlerVideo8={this.uploadHandlerVideo8}
            uploadHandlerImg8={this.uploadHandlerImg8}
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
