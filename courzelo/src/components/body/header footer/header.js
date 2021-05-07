import React, {Fragment,useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
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
      <div  className="content-pusher creative-right bg-type-color">
  
  <header id="masthead" className="site-header affix-top template-layout-2 sticky-header has-retina-logo has-retina-logo-sticky palette-custom header-overlay custom-sticky">
    <div id="thim-header-topbar">
      <div className="container">
        <div id="thim_layout_builder-8" className="widget widget_thim_layout_builder"><p />
        <div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-7"><div className="vc_column-inner"><div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <ul className="list-inline">
                        <li className="list-inline-item">Have any question?</li>
                        <li className="list-inline-item"><a href="tel:00123456789"><i className="ion-android-call" /> (00) 123 456 789</a></li>
                        <li className="list-inline-item"><a href="https://wordpresslms.thimpress.com/cdn-cgi/l/email-protection#7a13141c153a0e1213170a081f090954191517"><i className="ion-android-mail" /> <span className="__cf_email__" data-cfemail="fb92959d94bb8f9392968b899e8888d5989496">Info@Courzelo.com</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div></div></div>
            <div className="pull-right wpb_column vc_column_container vc_col-sm-5"><div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="thim-sc-login ">
                    <div className="widget widget_thim-login">
                      <div className="thim-link-login thim-login-popup" style={{marginTop: 20}}>
                      
                        
                      <Link to="/profile" className="header-btn btn-hover" >Profile        /</Link>
                        <Link to="/" onClick={handleLogout}  className="header-btn btn-hover" >Logout</Link>
                      
                      </div>
                    </div></div>
                </div></div></div></div><p />
        </div> </div>
    </div>
    <div className="header-wrapper header-v2 default" style={{height:'60px'}}>
      <div className="main-header container">
        <div className="menu-mobile-effect navbar-toggle" data-effect="mobile-effect">
          <div className="icon-wrap">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </div>
        </div>
        <div className="width-logo">
          <a href="../index.html" title="Demo eLearning II - WordPress LMS theme 2018" rel="home" className="sticky-logo" /> </div>
        <div className="width-navigation">
          <ul id="primary-menu" className="main-menu" style={{marginTop:'10px'}}>
          <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{marginRight:'40px'}}><Link to="/" className="header-btn btn-hover" >Home</Link></li>
            <li  className=" menu-item-type-custom menu-item-object-custom menu-item-has-children " >
              <a >Courses</a>
              <ul className="sub-menu">
                <li id="menu-item-23" className=" menu-item-type-post_type menu-item-object-page menu-item-23 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/courses" className="header-btn btn-hover" >All Courses</Link></li>
                <li id="menu-item-3992" className=" menu-item-type-custom menu-item-object-custom menu-item-3992 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/" className="header-btn btn-hover" >become Instructor</Link></li>
                <li id="menu-item-6818" className=" menu-item-type-post_type menu-item-object-page menu-item-6818 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/GererCourses" className="header-btn btn-hover" >Instructor Profile</Link></li>
              </ul>
            </li>
            <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{marginRight:'10px'}}><Link to="/blog" className="header-btn btn-hover" >Blog</Link></li>
            
            <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{marginRight:'10px'}}><Link to="/DetailAddCourse" className="header-btn btn-hover" >Teacher </Link></li>

            <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{marginRight:'10px'}}><Link to="/AboutUS" className="header-btn btn-hover" >About us</Link></li>
         
            <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"  style={{marginRight:'10px'}}><Link to="/contact" className="header-btn btn-hover" >Contact</Link></li>
            { 
                isAdmin?
                <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"  style={{marginRight:'10px'}}><Link to="/index" className="header-btn btn-hover" >Dashboard</Link></li>
                
                :
                <Fragment/>
                }
          </ul> </div>
      </div>
    </div> 
  </header>
  
  <nav className="visible-xs mobile-menu-container mobile-effect" itemScope itemType="http://schema.org/SiteNavigationElement">
    <div className="inner-off-canvas">
      <div className="menu-mobile-effect navbar-toggle" data-effect="mobile-effect">
        Close <i className="fa fa-times" aria-hidden="true" />
      </div>
      <div className="thim-mobile-search-cart ">
        <div className="thim-search-wrapper hidden-lg-up">
          <form role="search" method="get" className="search-form" action="https://wordpresslms.thimpress.com/demo-elearning-2/">
            <input type="search" className="search-field" placeholder="What are you looking for ?" defaultValue name="s" title="Search for:" />
            <button type="submit" className="search-submit"><span className="ion-android-search" /></button>
          </form>
        </div>
        <div className="thim-mini-cart hidden-lg-up">
          <div className="widget woocommerce widget_shopping_cart"><div className="minicart_hover" id="header-mini-cart"><span className="cart-items-number"><span className="text">My Cart</span> <i className="ion ion-android-cart" /><span className="wrapper-items-number "><span className="items-number">0</span></span></span><div className="clear" /></div><div className="widget_shopping_cart_content" style={{display: 'none'}} /></div> </div>
      </div>
     
      <div className="off-canvas-widgetarea">
        <div className="widget widget_text"> <div className="textwidget"><ul>
              <li><i className="fa fa-phone" aria-hidden="true" /> <a href="tel:0123456789">+(0123) 456 789</a></li>
              <li><i className="fa fa-envelope-o" aria-hidden="true" /> <a href="https://wordpresslms.thimpress.com/cdn-cgi/l/email-protection#86efe8e0e9c6f2eeefebf6f4e3f5f5a8e5e9eb"><span className="__cf_email__" data-cfemail="620b0c040d22160a0b0f12100711114c010d0f">[email&nbsp;protected]</span></a></li>
            </ul></div>
        </div><div className="widget widget_thim_layout_builder"><p /><div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="thim-sc-social-links ">
                    <ul className="socials"><li><a target="_blank" href="https://facebook.com/thimpress">facebook</a></li><li><a target="_blank" href="https://twitter.com/thimpress">twitter</a></li></ul></div></div></div></div></div><p />
        </div> </div>
    </div>
  </nav>
  
</div>
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
     

     
  
      {
                  
                  isLogged? userLink:
  <div className="content-pusher creative-right bg-type-color">
  
    <header id="masthead" className="site-header affix-top template-layout-2 sticky-header has-retina-logo has-retina-logo-sticky palette-custom header-overlay custom-sticky">
      <div id="thim-header-topbar">
        <div className="container">
          <div id="thim_layout_builder-8" className="widget widget_thim_layout_builder"><p />
          <div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-7"><div className="vc_column-inner"><div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                        <ul className="list-inline">
                          <li className="list-inline-item">Have any question?</li>
                          <li className="list-inline-item"><a href="tel:00123456789"><i className="ion-android-call" /> (00) 123 456 789</a></li>
                          <li className="list-inline-item"><a href="https://wordpresslms.thimpress.com/cdn-cgi/l/email-protection#7a13141c153a0e1213170a081f090954191517"><i className="ion-android-mail" /> <span className="__cf_email__" data-cfemail="fb92959d94bb8f9392968b899e8888d5989496">Info@Courzelo.com</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div></div></div>
              <div className="pull-right wpb_column vc_column_container vc_col-sm-5"><div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="thim-sc-login ">
                      <div className="widget widget_thim-login">
                        <div className="thim-link-login thim-login-popup" style={{marginTop: 20}}>
                        
                          
                          <Link id="signin"  onClick={handleShow} className="header-btn btn-hover">Sign in   /</Link>
                          <Link id="signup"  onClick={(e) => handleShow(e)} className="header-btn btn-hover">Sign up</Link>
                          {isForgetPassword ? popupR : isRegister ? popupp : show ? popup : null }
                        </div>
                      </div></div>
                  </div></div></div></div><p />
          </div> </div>
      </div>
      <div className="header-wrapper header-v2 default" style={{height:'60px'}}>
        <div className="main-header container">
          <div className="menu-mobile-effect navbar-toggle" data-effect="mobile-effect">
            <div className="icon-wrap">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </div>
          </div>
          <div className="width-logo">
            <a href="../index.html" title="Demo eLearning II - WordPress LMS theme 2018" rel="home" className="sticky-logo" /> </div>
          <div className="width-navigation">
            <ul id="primary-menu" className="main-menu" style={{marginTop:'10px'}}>
              <li  className=" menu-item-type-custom menu-item-object-custom menu-item-has-children " >
                <a >Courses</a>
                <ul className="sub-menu">
                  <li id="menu-item-23" className=" menu-item-type-post_type menu-item-object-page menu-item-23 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../about-us/index.html" className="tc-menu-inner tc-megamenu-title">All courses</a></li>
                  <li id="menu-item-3992" className=" menu-item-type-custom menu-item-object-custom menu-item-3992 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../forums/index.html" className="tc-menu-inner tc-megamenu-title">become Instructor</a></li>
                  <li id="menu-item-6818" className=" menu-item-type-post_type menu-item-object-page menu-item-6818 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../account/index.html" className="tc-menu-inner tc-megamenu-title">Instructor Profile</a></li>
                </ul>
              </li>
              <li id="menu-item-25" className=" menu-item-type-post_type menu-item-object-page menu-item-25 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../blog/index.html" className="tc-menu-inner" style={{marginRight:'40px'}}>Blog</a></li>

              <li id="menu-item-3816" className=" menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3816 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="#" className="tc-menu-inner">Pages</a>
                <ul className="sub-menu">
                  <li id="menu-item-23" className=" menu-item-type-post_type menu-item-object-page menu-item-23 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../about-us/index.html" className="tc-menu-inner tc-megamenu-title">About us</a></li>
                  <li id="menu-item-3992" className=" menu-item-type-custom menu-item-object-custom menu-item-3992 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../forums/index.html" className="tc-menu-inner tc-megamenu-title">Forums</a></li>
                </ul>
              </li>
              <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../contact/index.html" className="tc-menu-inner">Contact</a></li>
            </ul> </div>
        </div>
      </div> 
    </header>
    
    <nav className="visible-xs mobile-menu-container mobile-effect" itemScope itemType="http://schema.org/SiteNavigationElement">
      <div className="inner-off-canvas">
        <div className="menu-mobile-effect navbar-toggle" data-effect="mobile-effect">
          Close <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div className="thim-mobile-search-cart ">
          <div className="thim-search-wrapper hidden-lg-up">
            <form role="search" method="get" className="search-form" action="https://wordpresslms.thimpress.com/demo-elearning-2/">
              <input type="search" className="search-field" placeholder="What are you looking for ?" defaultValue name="s" title="Search for:" />
              <button type="submit" className="search-submit"><span className="ion-android-search" /></button>
            </form>
          </div>
          <div className="thim-mini-cart hidden-lg-up">
            <div className="widget woocommerce widget_shopping_cart"><div className="minicart_hover" id="header-mini-cart"><span className="cart-items-number"><span className="text">My Cart</span> <i className="ion ion-android-cart" /><span className="wrapper-items-number "><span className="items-number">0</span></span></span><div className="clear" /></div><div className="widget_shopping_cart_content" style={{display: 'none'}} /></div> </div>
        </div>
        <ul className="nav navbar-nav">
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3824 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="#" className="tc-menu-inner">Demos</a>
            <ul className="sub-menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3823 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://wordpresslms.thimpress.com/" className="tc-menu-inner tc-megamenu-title">Demo Edu Institute</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3822 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://wordpresslms.thimpress.com/demo-coursify/" className="tc-menu-inner tc-megamenu-title">Demo Coursify</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-3821 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../index.html" className="tc-menu-inner tc-megamenu-title">Demo eLearning II</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3933 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://wordpresslms.thimpress.com/demo-single-instructor/" className="tc-menu-inner tc-megamenu-title">Demo Single Instructor</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4067 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://wordpresslms.thimpress.com/demo-test-prep/" className="tc-menu-inner tc-megamenu-title">Demo Test Prep</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4115 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://wordpresslms.thimpress.com/demo-corporate-learning/" className="tc-menu-inner tc-megamenu-title">Demo Corporate Learning</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6937 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://wordpresslms.thimpress.com/demo-techcamp" className="tc-menu-inner tc-megamenu-title">Demo Courses TechCamps</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6945 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://wordpresslms.thimpress.com/demo-kit" className="tc-menu-inner tc-megamenu-title">Demo Kit Builder</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4133 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://wordpresslms.thimpress.com/demo-rtl/" className="tc-menu-inner tc-megamenu-title">Demo RTL</a></li>
            </ul>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-builder"><a href="../courses/index.html" className="tc-menu-inner">Courses</a><div className="tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu"><p /><div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-4"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="vc_wp_custommenu wpb_content_element"><div className="widget widget_nav_menu"><h2 className="widgettitle">ABOUT COURSES</h2><div className="menu-mega-menu-container"><ul id="menu-mega-menu-1" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4204 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../courses/index.html" className="tc-menu-inner">All Courses</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-4201 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../courses/the-ultimate-ethical-hacking-boot-camp/index.html" className="tc-menu-inner">Free Access Courses</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-4202 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../courses/aws-certified-solutions-architect/index.html" className="tc-menu-inner">Paid Courses</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4205 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../all-teachers/index.html" className="tc-menu-inner">Our Teachers</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-228 current_page_item menu-item-4206 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="index.html" className="tc-menu-inner">Become an Instructor</a></li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4207 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../lp-profile/admin/index.html" className="tc-menu-inner">Instructor Profile</a></li>
                              <li className="menu-item menu-item-type-post_type_archive menu-item-object-lp_collection menu-item-6800 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../collections/index.html" className="tc-menu-inner">Collections</a></li>
                            </ul></div></div></div></div></div></div><div className="wpb_column vc_column_container vc_col-sm-4"><div className="vc_column-inner"><div className="wpb_wrapper"> <div className="thim-courses-megamenu row">
                        <div className="course-item col-sm-12">
                          <div className="feature-img">
                            <img width={300} height={300} src="../wp-content/uploads/sites/5/2017/06/Half-Marathon-2014-70-1-300x300.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /><a href="../courses/the-ultimate-ethical-hacking-boot-camp/index.html" className="img-link" /> </div>
                          <div className="course-detail">
                            <h3 className="title">
                              <a href="../courses/the-ultimate-ethical-hacking-boot-camp/index.html">The Ultimate Ethical Hacking Boot Camp</a>
                            </h3>
                            <div className="price">
                              <span className="course-price">Free</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></div></div><div className="wpb_column vc_column_container vc_col-sm-4"><div className="vc_column-inner"><div className="wpb_wrapper">
                      <div className="wpb_single_image wpb_content_element vc_align_left">
                        <figure className="wpb_wrapper vc_figure">
                          <a href="#" target="_blank" className="vc_single_image-wrapper   vc_box_border_grey"><img width={252} height={359} src="../wp-content/uploads/sites/5/2017/06/menu-image_360.jpg" className="vc_single_image-img attachment-full" alt loading="lazy" srcSet="https://wordpresslms.thimpress.com/demo-elearning-2/wp-content/uploads/sites/5/2017/06/menu-image_360.jpg 252w, https://wordpresslms.thimpress.com/demo-elearning-2/wp-content/uploads/sites/5/2017/06/menu-image_360-211x300.jpg 211w" sizes="(max-width: 252px) 100vw, 252px" /></a>
                        </figure>
                      </div>
                    </div></div></div></div><p />
            </div></li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../blog/index.html" className="tc-menu-inner">Blog</a></li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3816 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="#" className="tc-menu-inner">Pages</a>
            <ul className="sub-menu">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../about-us/index.html" className="tc-menu-inner tc-megamenu-title">About us</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-392 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../membership/index.html" className="tc-menu-inner tc-megamenu-title">Membership</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-301 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../landing-page/index.html" className="tc-menu-inner tc-megamenu-title">Landing Page</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3992 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../forums/index.html" className="tc-menu-inner tc-megamenu-title">Forums</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3993 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../events/index.html" className="tc-menu-inner tc-megamenu-title">Events</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4152 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../shop/index.html" className="tc-menu-inner tc-megamenu-title">Shop</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6818 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../account/index.html" className="tc-menu-inner tc-megamenu-title">Account</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6643 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="../gallery/index.html" className="tc-menu-inner tc-megamenu-title">Gallery</a></li>
            </ul>
          </li>
          <li className="menu-item menu-item-type-post_type_archive menu-item-object-portfolio menu-item-6644 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../portfolio/index.html" className="tc-menu-inner">Portfolio</a></li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="../contact/index.html" className="tc-menu-inner">Contact</a></li>
        </ul>
        <div className="off-canvas-widgetarea">
          <div className="widget widget_text"> <div className="textwidget"><ul>
                <li><i className="fa fa-phone" aria-hidden="true" /> <a href="tel:0123456789">+(0123) 456 789</a></li>
                <li><i className="fa fa-envelope-o" aria-hidden="true" /> <a href="https://wordpresslms.thimpress.com/cdn-cgi/l/email-protection#86efe8e0e9c6f2eeefebf6f4e3f5f5a8e5e9eb"><span className="__cf_email__" data-cfemail="620b0c040d22160a0b0f12100711114c010d0f">[email&nbsp;protected]</span></a></li>
              </ul></div>
          </div><div className="widget widget_thim_layout_builder"><p /><div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="thim-sc-social-links ">
                      <ul className="socials"><li><a target="_blank" href="https://facebook.com/thimpress">facebook</a></li><li><a target="_blank" href="https://twitter.com/thimpress">twitter</a></li></ul></div></div></div></div></div><p />
          </div> </div>
      </div>
    </nav>
    
  </div>

}


        </div>
    )
}

export default Header;
