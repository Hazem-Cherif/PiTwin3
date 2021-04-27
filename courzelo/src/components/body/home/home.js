import React, {Fragment,useState} from 'react'
import {useParams} from 'react-router-dom'
import ResetPass from '../authentification/ResetPassword'

const Home = () => {
  const {token} = useParams()
  const [setShow] = useState(false);
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
      <img style={{height:'560px'}} src="assets/h.jpg" alt="fgg"></img>
      
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
  <section >
  <div style={{backgroundImage: 'url(../wp-content/uploads/sites/5/2018/10/page_title_7.jpg)'}} className="vc_row wpb_row vc_row-fluid thim-header-slider-3 thim-background-overlay vc_row-has-fill vc_row-o-full-height vc_row-o-columns-stretch vc_row-o-equal-height vc_row-flex vc_general vc_parallax vc_parallax-content-moving">
  <div className="overlay" style={{backgroundColor: 'rgba(10,10,10,0.5)'}}>
  </div>
  <div className="wpb_column vc_column_container vc_col-sm-12">
    <div className="vc_column-inner" style={{marginLeft: 200}}>
      <div className="wpb_wrapper"><div className="thim-sc-text-box style-4 size-default ">
          <div className="title-1">Create and sell<br />
            online courses</div>
          <div className="title-2"><p>We pride ourselves on providing the most<br />
              up-to-date content. Everything you need </p>
          </div>
          <a href="index.html" className="btn btn-default"><span className="text">Read More</span></a></div>
      </div></div></div></div>


      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div >
            <div className="wpb_wrapper">
        <div className="thim-courses-collection-wrapper">
          <div className="thim-collection-info squared-colection-info">
            <h3 className="title">Course Collection</h3>
            <div className="description">Our 2,000 online course collection includes the most engaging courses for your employees' professional development.</div>
          </div>
          <div className="thim-courses-collection squared-courses-collection" >
            <div className="collection-frame items-10">
              <ul className="slidee">
                <li className="collection-item" style={{marginLeft:'70px'}}>
                  <div className="thumbnail">
                    <a href="collections/be-your-own-boss/index.html" className="collection-link" />
                    <img width={310} height={278} src="wp-content/uploads/sites/5/2017/08/pexels-photo-e1500018346477-1-310x278.jpg" alt="Be Your Own Boss" className /> <div className="wrapper">
                      <span className="ion-qr-scanner" />
                      <span className="view">view courses</span>
                    </div>
                  </div>
                  <div className="collection-wrapper">
                    <h4 className="name"><a href="collections/be-your-own-boss/index.html">Be Your Own Boss</a>
                    </h4>
                    <div className="number-courses">9 courses</div> </div>
                </li>
                <li className="collection-item" style={{marginLeft:'60px'}}>
                  <div className="thumbnail">
                    <a href="collections/be-your-own-boss/index.html" className="collection-link" />
                    <img width={310} height={278} src="wp-content/uploads/sites/5/2017/08/pexels-photo-e1500018346477-1-310x278.jpg" alt="Be Your Own Boss" className /> <div className="wrapper">
                      <span className="ion-qr-scanner" />
                      <span className="view">view courses</span>
                    </div>
                  </div>
                  <div className="collection-wrapper">
                    <h4 className="name"><a href="collections/be-your-own-boss/index.html">Be Your Own Boss</a>
                    </h4>
                    <div className="number-courses">9 courses</div> </div>
                </li>
                <li className="collection-item" style={{marginLeft:'60px'}}>
                  <div className="thumbnail">
                    <a href="collections/be-your-own-boss/index.html" className="collection-link" />
                    <img width={310} height={278} src="wp-content/uploads/sites/5/2017/08/pexels-photo-e1500018346477-1-310x278.jpg" alt="Be Your Own Boss" className /> <div className="wrapper">
                      <span className="ion-qr-scanner" />
                      <span className="view">view courses</span>
                    </div>
                  </div>
                  <div className="collection-wrapper">
                    <h4 className="name"><a href="collections/be-your-own-boss/index.html">Be Your Own Boss</a>
                    </h4>
                    <div className="number-courses">9 courses</div> </div>
                </li>
                <li className="collection-item" style={{marginLeft:'60px'}}>
                  <div className="thumbnail">
                    <a href="collections/be-your-own-boss/index.html" className="collection-link" />
                    <img width={310} height={278} src="wp-content/uploads/sites/5/2017/08/pexels-photo-e1500018346477-1-310x278.jpg" alt="Be Your Own Boss" className /> <div className="wrapper">
                      <span className="ion-qr-scanner" />
                      <span className="view">view courses</span>
                    </div>
                  </div>
                  <div className="collection-wrapper">
                    <h4 className="name"><a href="collections/be-your-own-boss/index.html">Be Your Own Boss</a>
                    </h4>
                    <div className="number-courses">9 courses</div> </div>
                </li>
           
              </ul>
             
            </div>
          </div>
          
        </div>
      </div></div></div></div>








  <div className="vc_row wpb_row vc_row-fluid vc_custom_1502096185436 vc_row-no-padding">
    <div className="wpb_column vc_column_container vc_col-sm-6">
      <div className="vc_column-inner vc_custom_1502095063222">
        <div className="wpb_wrapper">
          <div className="thim-sc-video-box   layout-3">
            <div className="video">
              <div className="video-box" style={{backgroundImage: 'url(wp-content/uploads/sites/5/2017/08/home-1-bg-e1503482222736.jpg)'}}>
                <div className="play-button">
                  <a href="https://www.youtube.com/watch?v=TtoHkSuKJwE" className="video-thumbnail"><i className="icon-play" /></a>
                </div>
              </div>
            </div>
          </div>
        </div></div>
    </div>
    <div className="wpb_column vc_column_container vc_col-sm-6">
      <div className="vc_column-inner vc_custom_1502095072725">
        <div className="wpb_wrapper">
          <div className="vc_empty_space" style={{height: 76}}>
            <span className="vc_empty_space_inner">
            </span></div>
          <div className="thim-sc-counter-box demo-elearning-2 style-1" data-line="has-line">
            <h3 className="sc-title">About W-elearning</h3>
            <div className="counter_box has-line">
              <div className="number" style={{color: '#1ea69a'}}>
                <span className="number_counter" /><span className="text-number">76m+</span>
              </div>
              <div className="title_counter">
                <h4 className="title" style={{color: '#202121'}}>STUDENTS LEARNING</h4>
              </div>
            </div>
            <div className="counter_box has-line">
              <div className="number" style={{color: '#1ea69a'}}>
                <span className="number_counter" /><span className="text-number">80k+</span> </div>
              <div className="title_counter">
                <h4 className="title" style={{color: '#202121'}}>ACTIVE COURSES</h4>
              </div>
            </div>
            <div className="counter_box has-line">
              <div className="number" style={{color: '#1ea69a'}}>
                <span className="number_counter"  /><span className="text-number">990+</span> </div>
              <div className="title_counter">
                <h4 className="title" style={{color: '#202121'}}>INSTRUCTORS ONLINE</h4>
              </div>
            </div>
          </div>
          <div className="vc_empty_space" style={{height: 38}}>
            <span className="vc_empty_space_inner" />
          </div>
          <div className="thim-sc-text-box style-4 size-small ">
            <div className="title-2"><p>Students in class on time, spending longer learning and handing their homework in when<br />
                it’s due – the obvious ones, but these aren’t the only ways My Study Life helps increase<br />
                attainment. The dashboard gives students an overview of their day,</p>
            </div>
            <a href="#" className="btn btn-default"><span className="text">Learn more</span></a></div>
        </div></div></div></div>
  <div className="vc_row-full-width vc_clearfix">
  </div>
  <div className="vc_row wpb_row vc_row-fluid overflow-visible vc_custom_1502163012164 vc_row-has-fill vc_row-no-padding">
    <div className="text-right wpb_column vc_column_container vc_col-sm-6">
      <div className="vc_column-inner vc_custom_1502096768858">
        <div className="wpb_wrapper">
          <div className="vc_empty_space" style={{height: 86}}><span className="vc_empty_space_inner" />
          </div><div className="vc_wp_text wpb_content_element"><div className="widget widget_text">
              <div className="textwidget">
                <h3 className="thim-custom-title" style={{fontSize: 42, fontWeight: 300}}>Share your knowledge in<br />
                  Five simple steps</h3>
              </div>
            </div></div><div className="vc_empty_space" style={{height: 11}}>
            <span className="vc_empty_space_inner" /></div>
          <div className="thim-sc-text-box style-4 size-small ">
            <div className="title-1">Create a course for free in minutes with Teachable</div>
            <div className="title-2"><p>Students in class on time, spending longer learning and handing their homework in when<br />
                it’s due – the obvious ones, but these aren’t the only ways My Study Life helps increase<br />
                attainment. The dashboard gives students an overview of their day,</p>
            </div>
            <a href="#" className="btn btn-default">
              <span className="text">Learn more</span></a></div>
        </div>
      </div></div>
    <div className="wpb_column vc_column_container vc_col-sm-6">
      <div className="vc_column-inner vc_custom_1502163002858">
        <div className="wpb_wrapper">
          <div className="thim-sc-testimonials layout-5 ">
            <div >
              <div >
                <div className="item">
                  <div className="image">
                    <img width={743} height={456} src="wp-content/uploads/sites/5/2017/06/blog-2-743x456.jpg"  alt="layer-86" /> </div>
                  <div className="content-wrap">
                    <div className="content">
                      “ You dont need a whole ecommerce system to sell your
                      online courses. Paypal, Stripe payment methods integration
                      can help you sell your use WooCommerce. ” </div>
                    <div className="user-info">
                      Jenny Kate, Usa
                      <div className="thim-sc-social-links">
                        <ul className="socials">
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div></div>
        </div></div></div>
  </div>



  <div className="vc_row wpb_row vc_row-fluid">
  <div className="wpb_column vc_column_container vc_col-sm-12">
    <div className="vc_column-inner"><div $>
        <div className="thim-course-block-3  title-center  has-filter	">
          <div className="wrapper-title">
            <h3 className="title title-center">Browse Our Top Courses</h3>
          </div>
          <div className="masonry-filter">
            <a className="filter is-checked" data-filter="*" href="javascript:;">All</a><a className="filter" href="javascript:;" data-filter=".business">Business</a><a className="filter" href="javascript:;" data-filter=".design">Design</a><a className="filter" href="javascript:;" data-filter=".web-development">Web Development</a><a className="filter" href="javascript:;" data-filter=".photography">Photography</a> </div>
          <div className="masonry-items" style={{marginLeft:'10px',marginRight:'10px'}}>
            <div className="row" >
           


              <div className="course-item col-sm-3  free   business "  >
              <div >
                <div className="featured-img"><img width={342} height={299} src="wp-content/uploads/sites/5/2017/06/Half-Marathon-2014-70-1-342x299.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /><a href="courses/the-ultimate-ethical-hacking-boot-camp/index.html" className="img-link" /><div className="course-meta"><div className="price">
                        <span className="course-price">Free</span>
                      </div><div className="course-rating"><div className="review-stars-rated" title="0 out of 5 stars">
                          <div className="review-stars empty" />
                          <div className="review-stars filled" style={{width: '0%'}} />
                        </div><span>(0 vote)</span></div></div></div>
                        <h4 className="course-title"><a href="courses/the-ultimate-ethical-hacking-boot-camp/index.html">The Ultimate Ethical Hacking Boot Camp</a></h4><div className="participants"><a href="lp-profile/admin/index.html" className="instructor">ThimPress</a><span className="students">167 students</span>
                        </div></div>
                        </div>
                        <div className="course-item col-sm-3  free   business "  >
              <div >
                <div className="featured-img"><img width={342} height={299} src="wp-content/uploads/sites/5/2017/06/Half-Marathon-2014-70-1-342x299.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /><a href="courses/the-ultimate-ethical-hacking-boot-camp/index.html" className="img-link" /><div className="course-meta"><div className="price">
                        <span className="course-price">Free</span>
                      </div><div className="course-rating"><div className="review-stars-rated" title="0 out of 5 stars">
                          <div className="review-stars empty" />
                          <div className="review-stars filled" style={{width: '0%'}} />
                        </div><span>(0 vote)</span></div></div></div>
                        <h4 className="course-title"><a href="courses/the-ultimate-ethical-hacking-boot-camp/index.html">The Ultimate Ethical Hacking Boot Camp</a></h4><div className="participants"><a href="lp-profile/admin/index.html" className="instructor">ThimPress</a><span className="students">167 students</span>
                        </div></div>
                        </div>
                        <div className="course-item col-sm-3  free   business "  >
              <div >
                <div className="featured-img"><img width={342} height={299} src="wp-content/uploads/sites/5/2017/06/Half-Marathon-2014-70-1-342x299.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /><a href="courses/the-ultimate-ethical-hacking-boot-camp/index.html" className="img-link" /><div className="course-meta"><div className="price">
                        <span className="course-price">Free</span>
                      </div><div className="course-rating"><div className="review-stars-rated" title="0 out of 5 stars">
                          <div className="review-stars empty" />
                          <div className="review-stars filled" style={{width: '0%'}} />
                        </div><span>(0 vote)</span></div></div></div>
                        <h4 className="course-title"><a href="courses/the-ultimate-ethical-hacking-boot-camp/index.html">The Ultimate Ethical Hacking Boot Camp</a></h4><div className="participants"><a href="lp-profile/admin/index.html" className="instructor">ThimPress</a><span className="students">167 students</span>
                        </div></div>
                        </div>
                        <div className="course-item col-sm-3  free   business "  >
              <div >
                <div className="featured-img"><img width={342} height={299} src="wp-content/uploads/sites/5/2017/06/Half-Marathon-2014-70-1-342x299.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /><a href="courses/the-ultimate-ethical-hacking-boot-camp/index.html" className="img-link" /><div className="course-meta"><div className="price">
                        <span className="course-price">Free</span>
                      </div><div className="course-rating"><div className="review-stars-rated" title="0 out of 5 stars">
                          <div className="review-stars empty" />
                          <div className="review-stars filled" style={{width: '0%'}} />
                        </div><span>(0 vote)</span></div></div></div>
                        <h4 className="course-title"><a href="courses/the-ultimate-ethical-hacking-boot-camp/index.html">The Ultimate Ethical Hacking Boot Camp</a></h4><div className="participants"><a href="lp-profile/admin/index.html" className="instructor">ThimPress</a><span className="students">167 students</span>
                        </div></div>
                        </div>
                   
            </div></div> </div>
        <div >
          <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
            < div className="wpb_wrapper">
              <div className="thim-sc-button text-right hide-separator ">
                  <a href="courses/index.html" target="_self" className="btn btn-primary btn-lg">
                    <span className="text" style={{color:'#FFFFFF'}}>Start My Free Trial</span>
                  </a>
                </div>
              </div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
              <div className="wpb_wrapper"><div className="thim-sc-button text-left hide-separator ">
                  <a href="course-category/web-development/index.html" target="_self" className="btn btn-basic btn-lg">
                    <span className="text">Browse Developer Course</span>
                  </a>
                </div>
              </div></div></div></div>
      </div></div></div></div>






      <div className="vc_row wpb_row vc_row-fluid vc_custom_1502265070316 thim-background-overlay">
  <div className="overlay" style={{backgroundColor: '#1ea69a'}} />
  <div className="wpb_column vc_column_container vc_col-sm-12">
    <div className="vc_column-inner"><div className="wpb_wrapper">
        <div className="vc_empty_space" style={{height: 80}}>
          <span className="vc_empty_space_inner" />
        </div></div></div></div>
  <div className="wpb_column vc_column_container vc_col-sm-6">
    <div className="vc_column-inner vc_custom_1502183302752"><div className="wpb_wrapper">
        <div className="wpb_single_image wpb_content_element vc_align_right  vc_custom_1502187435885">
          <figure className="wpb_wrapper vc_figure">
            <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={475} height={395} src="wp-content/uploads/sites/5/2017/08/mb.png" className="vc_single_image-img attachment-full" alt loading="lazy" srcSet="https://wordpresslms.thimpress.com/demo-elearning-2/wp-content/uploads/sites/5/2017/08/mb.png 475w, https://wordpresslms.thimpress.com/demo-elearning-2/wp-content/uploads/sites/5/2017/08/mb-300x249.png 300w" sizes="(max-width: 475px) 100vw, 475px" /></div>
          </figure>
        </div>
      </div></div></div><div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
      <div className="wpb_wrapper">
        <div className="vc_wp_text wpb_content_element thim-textbox-2"><div className="widget widget_text"> <div className="textwidget">
              <p className="sub-title">&nbsp;Learn on the go</p>
              <h3 className="title">Access your courses anywhere,<br />
                anytime &amp; prepare with practice tests</h3>
             
              <p>
              </p></div>
          </div></div></div></div></div></div>



  </section>
 
  
    </div>
  );
};

export default Home;
