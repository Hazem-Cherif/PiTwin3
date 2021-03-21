import React, {Fragment,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import ResetPass from '../authentification/ResetPassword'

const Home = () => {
  const {token} = useParams()
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
   
    
    console.log("test")
};
  const popup = (
    
    <Fragment>
      <div id="thim-popup-login" Show={handleShow}>
  <div className="thim-login-container">
    <div className="login-html">
      
      <div className="login-banner" >
      <img style={{height:'560px'}} src="assets/h.jpg"></img>
      
        <div className="login-banner-wrap">
          
          <h2>Hello!</h2><h3>We are happy to see you again!</h3>
        </div>
      </div>
      <div className="link-to-form">
        <p className="content-register wrapper">
          Not a member yet? <a href="account/index0ddc.html?action=register" className="register-link">Register Now</a> </p>
        <p className="content-login wrapper">
          Already a member? <a href="#" className="login-link">Login Now</a> </p>
      </div>   
         <ResetPass token={token}/>
         
    </div>
  </div>
</div>

  </Fragment>
  )
  
  return (
    <div >
  <section id="home" className="hero-area bg_cover">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-5 offset-xl-7 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div className="hero-content">
            <h2 className="mb-30 wow fadeInUp" data-wow-delay=".2s">Education and Online Course Site Template</h2>
            <p className="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam diam voluptua.</p>
            <div className="hero-btns">
              <a href="#courses" className="main-btn wow fadeInUp" data-wow-delay=".6s">Courses</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-left">
      <img src="assets/images/hero-img.png" alt />
      <img src="assets/images/dot-shape.svg" alt className="shape" />
    </div>
  </section>
  <section id="skill" className="skill-area pt-170">
    <div className="container">
      <div className="row">
        <div className="mx-auto col-xl-6 col-lg-7 col-md-10">
          <div className="text-center section-title">
            <h2 className="mb-15 wow fadeInUp" data-wow-delay=".2s">Learn New Skills</h2>
            <p className="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabo</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-skill wow fadeInUp" data-wow-delay=".2s">
            <div className="skill-icon">
              <i className="lni lni-pencil-alt" />
            </div>
            <div className="skill-content">
              <h4>Learn Anything</h4>
              <p>Lorem ipsum dolor sit amet, consetetu sadi
                ps cinelitr, sed diam nonumy eirtem Lorem ipsum dolor sit amet, consetetur.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-skill wow fadeInUp" data-wow-delay=".4s">
            <div className="skill-icon">
              <i className="lni lni-grid-alt" />
            </div>
            <div className="skill-content">
              <h4>Large Collection</h4>
              <p>Lorem ipsum dolor sit amet, consetetu sadi
                ps cinelitr, sed diam nonumy eirtem Lorem ipsum dolor sit amet, consetetur.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-skill wow fadeInUp" data-wow-delay=".6s">
            <div className="skill-icon">
              <i className="lni lni-certificate" />
            </div>
            <div className="skill-content">
              <h4>Certified Instructors</h4>
              <p>Lorem ipsum dolor sit amet, consetetu sadi
                ps cinelitr, sed diam nonumy eirtem Lorem ipsum dolor sit amet, consetetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    </div>
  );
};

export default Home;
