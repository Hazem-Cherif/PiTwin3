import React, {Fragment,useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import Login from '../authentification/login'
import Register from '../authentification/register'
import ForgotPassword from '../authentification/ForgetPassword'

function Header() {
  
  
  const auth = useSelector(state => state.auth)

  const {isLogged,isAdmin} = auth


  const [isRegister, setIsRegister] = useState(false);

  const [show, setShow] = useState(false);
  const [isForgetPassword, setisForgetPassword] = useState(false);
  const handleClose = (isForgetPassword) => { setShow(false);setisForgetPassword(isForgetPassword)}
  const handleShow = (e) => {
    setShow(true);
    setisForgetPassword(false);
    setIsRegister(e.target.id === "signup" ? true : false)
    console.log(e.target.id)
};
  
  const handleLogout = async () => {
      try {
          await axios.get('/user/logout')
          localStorage.removeItem('firstLogin')
          window.location.href = "/";
      } catch (err) {
          window.location.href = "/";
      }
  }

  const userLink = (
    <Fragment>
      <li className="drop-nav">
      <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
              
              <ul  id="nav" className="ml-auto navbar-nav">
              <li className="nav-item">
                  <Link to="/DetailAddCourse" className="header-btn btn-hover" >Teacher in courzelo</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="header-btn btn-hover" >Profile</Link>
                </li>
                { 
                isAdmin?
                 <li className="nav-item">
                  <Link to="/index" className="header-btn btn-hover" >Dashboard</Link>
                </li>
                :
                <Fragment/>
                }
                <li className="nav-item" style={{marginRight : '-200px'}}>
                  <Link to="/" onClick={handleLogout}  className="header-btn btn-hover" >Logout</Link>
                </li>
            
              </ul>
            </div> 
            
        </li>
    </Fragment>
  );
  const popup = (
    <Fragment >
      <div id="thim-popup-login" >
  <div className="thim-login-container">
    <div className="login-html">
      
      <div className="login-banner" >
      <img style={{height:'560px'}} src="assets/h.jpg" alt="fd"></img>
      
        <div className="login-banner-wrap">
          
          <h2>Hello!</h2><h3>We are happy to see you again!</h3>
        </div>
      </div>
      <div className="link-to-form">
        <p className="content-register wrapper">
          Not a member yet? <a href="account/index0ddc.html?action=register" className="register-link">Register Now</a> </p>
        <p className="content-login wrapper">
          Already a member? <a href="/login" className="login-link">Login Now</a> </p>
      </div>   
         <Login  clickHandler={(value) =>handleClose(value)} />
    </div>
  </div>
</div>

  </Fragment>
  )
  const popupp = (
    <Fragment>
    <div id="thim-popup-login">
  <div className="thim-login-container">
    <div className="login-html">
      
      <div className="login-banner" >
      <img style={{height:'560px'}} src="assets/h.jpg" alt="bcv"></img>
      
        <div className="login-banner-wrap">
          
          <h2>Hello!</h2><h3>We are happy to see you again!</h3>
        </div>
      </div>
      <div className="link-to-form">
        <p className="content-register wrapper">
          Not a member yet? <a href="account/index0ddc.html?action=register" className="register-link">Register Now</a> </p>
        <p className="content-login wrapper">
          Already a member? <a href="/login" className="login-link">Login Now</a> </p>
      </div>  
         <Register/>    
    </div>
  </div>
</div>
  </Fragment>
  )
  const popupR = (
    <Fragment >
      <div id="thim-popup-login"  show={show}>
  <div className="thim-login-container">
    <div className="login-html">
      
      <div className="login-banner" >
      <img style={{height:'560px'}} src="assets/h.jpg" alt="fgdf"></img>
      
        <div className="login-banner-wrap">
          
          <h2>Hello!</h2><h3>We are happy to see you again!</h3>
        </div>
      </div>
      <div className="link-to-form">
        <p className="content-register wrapper">
          Not a member yet? <a href="account/index0ddc.html?action=register" className="register-link">Register Now</a> </p>
        <p className="content-login wrapper">
          Already a member? <a href="/login" className="login-link">Login Now</a> </p>
      </div>   
         <ForgotPassword/>
    </div>
  </div>
</div>

  </Fragment>
  )
const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0
}

 
  

    return (
        <div>
            <header className="header_area">
  <div id="header_navbar" className="header_navbar"  style={{backgroundColor: '#f2a92c'}}>
    <div className="container"  style={{backgroundColor: '#f2a92c'}}>
      <div className="row align-items-center">
        <div className="col-xl-12">
          <nav className="navbar navbar-expand-lg"  style={{backgroundColor: '#f2a92c'}}>
            <a className="navbar-brand" href="index.html">
              <img id="logo" src="" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="toggler-icon" />
              <span className="toggler-icon" />
              <span className="toggler-icon" />
            </button>
            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
              
              <ul style={transForm} id="nav" className="ml-auto navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="header-btn btn-hover">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/courses" className="header-btn btn-hover" >Courses</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="header-btn btn-hover" >Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="header-btn btn-hover" >Contact</Link>
                </li>
                {
                  
                  isLogged? userLink:
                  <li className="nav-item">
                  
                  <div className="thim-link-login thim-login-popup">
                    
                  <Link id="signin"  onClick={handleShow} className="header-btn btn-hover">Sign in</Link> 
                                   
                  <Link id="signup"  onClick={(e) => handleShow(e)} className="header-btn btn-hover">Sign up</Link>
                  {isForgetPassword ? popupR : isRegister ? popupp : show ? popup : null }
                  </div>
                </li>
                }
                
              </ul>
            </div> 
          </nav> 
        </div>
      </div> 
    </div> 
  </div> 
  
</header>

       


        </div>
    )
}

export default Header;
