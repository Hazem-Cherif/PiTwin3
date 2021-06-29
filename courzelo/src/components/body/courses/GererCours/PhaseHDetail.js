import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getCourses } from '../../../../redux/actions/courseAction';
import {useParams, useHistory} from 'react-router-dom'
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import QueuePlayNextTwoToneIcon from '@material-ui/icons/QueuePlayNextTwoTone';
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ReactPlayer from 'react-player'
import { Markup } from 'interweave';

function PhaseHDetail() {
  
  const {id} = useParams();
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);
    const{n}=1;
    console.log('j',courses);
    const [postcourse, setCourseData] = useState({ 
      title: '',
      description: '',
      introduction:
      {
        text1: '',
        video1: '',
        img1: '',
        filePath1:'',
  
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
  
     });
    const load = () => {
      n=0;
      document.location.reload()
    };
    useEffect(() => {
      if(courses.length !== 0){
        courses.forEach(course => {
              if(course._id === id){
                setCourseData(course)
                document.location.reload();
              }
          })
      }
  },[courses, id])
 
    return (
     
        <div >
           {n==1?
        load
          
         :
     <body  className="bp-nouveau lp_course-template-default single single-lp_course postid-458 wp-embed-responsive theme-wordpress-lms wordpress-lms learnpress learnpress-page pmpro-body-has-access woocommerce-no-js pagetitle-show bg-type-color thim-body-visual-composer responsive lp_login_popup box-shadow auto-login ltr learnpress-v3 in-membership course-free header-template-overlay thim-lp-layout-1 lp-landing wpb-js-composer js-comp-ver-6.4.1 vc_responsive course-item-popup viewing-course-item viewing-course-item-459 course-item-lp_lesson no-js">
 
     <div id="main-content">
  <section className="content-area">
    <div className="container site-content "><div className="row"><main id="main" className="site-main col-sm-12 full-width">
          <article id="post-486" className="post-486 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-business course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
            <div className="entry-content" >
              <div id="lp-single-course" className="lp-single-course" >
                <div id="learn-press-course" className="course-summary">
                  <div id="tab-curriculum" style={{height: 68}} />
                  <div className="course-curriculum" id="learn-press-course-curriculum"   style={{marginTop:'28px'}}>
                    <nav className="thim-font-heading learn-press-breadcrumb" itemProp="breadcrumb">
                      <a href="https://wordpresslms.thimpress.com/demo-elearning-2">Home</a> <span className="delimiter">/</span> <a href="../../../index.html">Courses</a>
                      <span className="delimiter">/</span> <a href="../../../../course-category/business/index.html">Business</a> <span className="delimiter">/</span>
                      <span className="item-name">The Ultimate Ethical Hacking Boot Camp</span></nav>
                    <ul className="curriculum-sections">
                      <li className="section" id="section-255" data-id={255}>
                        <h4 className="section-header">
                          <span className="collapse" />
                          Section 1&nbsp;
                          <span className="section-description">Introduction</span>
                          <span className="meta">
                            <span className="step">
                              0/7</span>
                          </span>
                        </h4>
                        <ul className="section-content">
                          <li className="course-item course-item-lp_lesson course-item-487 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>1.1</div>
                            </div>
                            <a className="section-item-link" href="index.html">
                              <span className="item-name">Phase 1</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-488 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>1.2</div>
                            </div>
                            <a className="section-item-link" href="../introducing-our-ta-copy-copy-copy-copy-copy-copy/index.html">
                              <span className="item-name">Phase 2</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-489 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-play" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>1.3</div>
                            </div>
                            <a className="section-item-link" href="../our-class-chat-room-copy-copy-copy-copy-copy-copy/index.html">
                              <span className="item-name">Phase 3</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-490 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>1.4</div>
                            </div>
                            <a className="section-item-link" href="../why-this-course-copy-copy-copy-copy-copy-copy/index.html">
                              <span className="item-name">Phase 4</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="section" id="section-256" data-id={256}>
                        <h4 className="section-header">
                          <span className="collapse" />
                          Section 2&nbsp;
                          <span className="section-description">Chapitres</span>
                          <span className="meta">
                            <span className="step">
                              0/4</span>
                          </span>
                        </h4>
                        <ul className="section-content">
                          <li className="course-item course-item-lp_lesson course-item-492 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>2.1</div>
                            </div>
                            <a className="section-item-link" href="../unit-objectives-copy-copy-copy-copy-copy-copy/index.html">
                              <span className="item-name">Unit Objectives – Big Video</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="section" id="section-255" data-id={255}>
                        <h4 className="section-header">
                          <span className="collapse" />
                          Section 3&nbsp;
                          <span className="section-description">Conclusion</span>
                          <span className="meta">
                            <span className="step">
                              0/7</span>
                          </span>
                        </h4>
                        <ul className="section-content">
                          <li className="course-item course-item-lp_lesson course-item-487 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>3.1</div>
                            </div>
                            <a className="section-item-link" href="index.html">
                              <span className="item-name">Phase 1</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-488 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>3.2</div>
                            </div>
                            <a className="section-item-link" href="../introducing-our-ta-copy-copy-copy-copy-copy-copy/index.html">
                              <span className="item-name">Phase 2</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-489 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-play" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>3.3</div>
                            </div>
                            <a className="section-item-link" href="../our-class-chat-room-copy-copy-copy-copy-copy-copy/index.html">
                              <span className="item-name">Phase 3</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-490 current item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>3.4</div>
                            </div>
                            <a className="section-item-link" href="../why-this-course-copy-copy-copy-copy-copy-copy/index.html">
                              <span className="item-name">Phase 4</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div id="learn-press-content-item"  style={{marginTop:'27px'}}>
                    <div className="content-item-scrollable">
                      <div id="course-item-content-header" className="thim-course-item-header">
                        <div className="course-item-search">
                          <form>
                            <input type="text" placeholder="Search item" />
                            <button type="button" />
                          </form>
                        </div>
                        <div className="thim-course-item-popup-logo">
                          <a className="lesson-logo" href="../../../../index.html" title="Demo eLearning II - WordPress LMS theme 2018" rel="home">
                            <img className="logo" src="../../../../../demo-3/wp-content/themes/wordpress-lms/assets/images/logo-2.png" alt width={131} height={45} />
                          </a>
                        </div>
                        <a  className="back_course"><i className="fa fa-close" /></a>
                        
                      </div>
                      <div className="content-item-wrap">
                        <div className="learn-press-video-intro thim-lesson-media" style={{height:'550px'}}>
                          <div className="wrapper" >
                            <iframe style={{width:'980px',height:'550px'}}  src="https://www.youtube.com/embed/TtoHkSuKJwE?rel=0&showinfo=0" frameBorder={0} allowFullScreen /> </div>
                        </div>
                        <div className="content-item-summary">
                          <h3 className="course-item-title question-title">A Note On Asking For Help</h3>
                          <div className="content-item-description lesson-description"><h3>Course Description</h3>
                            <p>If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with us because we are going to introduce you one of the most basic knowledge when owning a WordPress page: how to find your site the best WordPress Hosting service. This process is often overlooked by most of the website owners. But it can be considered the most important key point to bring your site to stand out of the crowd. A great hosting service could help you to improve SEO and increase sales as well.</p>
                            <h4><img loading="lazy" className="aligncenter wp-image-3983 size-full" src="../../../../../wp-content/uploads/2017/08/formula_screenshot.png" alt width={594} height={378} /></h4>
                            <h4>Learning Outcomes</h4>
                            <ul>
                              <li>Over 37 lectures and 55.5 hours of content!</li>
                              <li>LIVE PROJECT End to End Software Testing Training Included.</li>
                              <li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li>
                              <li>Information packed practical training starting from basics to advanced testing techniques.</li>
                              <li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
                              <li>Course content designed by considering current software testing technology and the job market.</li>
                              <li>Practical assignments at the end of every session.</li>
                              <li>Practical learning experience with live project work and examples.</li>
                            </ul>
                            <p>Learn how to use <a href="https://wordpress.org/plugins/learnpress/"><strong>LearnPress</strong> </a>WordPress Learning Management System to Create an online course for your own website. Creating courses with LearnPress is easy, fast and convenience. There are many options, features that can fit any of your purpose.</p>
                            <p>LearnPress LMS is the best WordPress LMS Plugin that is being used by more than 20,000 websites, schools, universities and educational institutions around the world.</p>
                            <p>Using LearnPress with a nice theme, you can create online course websites like Udemy, Coursera and other popular onlince course websites. Please read this tutorial: How to create a Udemy or Coursera clone easily with LearnPress: How to create a Udemy or Coursera clone easily with LearnPress</p>
                            <h3>The best education WordPress themes:</h3>
                            <ul>
                              <li><a href="https://themeforest.net/item/education-wordpress-theme-education-wp/14058034?ref=thimpress">Education WP</a></li>
                              <li><a href="https://themeforest.net/item/speaker-and-life-coach-wordpress-theme-coaching-wp/17097658?ref=thimpress">Coaching WordPress Theme</a></li>
                              <li><a href="https://themeforest.net/item/lms-wordpress-theme-elearning-wp/11797847?ref=thimpress">eLearning WordPress Theme</a></li>
                            </ul>
                            <h3>ONLINE COURSE CREATION TUTORIALS:</h3>
                            <p>1. <a href="https://thewpcourse.com/adding-membership-plans-in-learnpress-for-your-education-wordpress-website/"><em>Adding Membership plans in LearnPress for your education WordPress website</em></a></p>
                            <p>2. <a href="https://thewpcourse.com/how-coupon-works-in-learnpress-and-eduma/"><em>How Coupon works in LearnPress and Eduma</em></a><br />
                              3. <a href="https://thewpcourse.com/how-instructor-feature-works-in-learnpress-and-eduma/"><em>How instructor feature works in LearnPress and Eduma</em></a><br />
                              4. <a href="https://thewpcourse.com/how-coupon-works-in-learnpress-and-eduma/"><em>How Coupon works in LearnPress and Eduma</em></a><br />
                              5. <a href="https://thewpcourse.com/how-to-create-certificate-in-learnpress-and-get-more-students-to-your-course/"><em>How to create Certificate in LearnPress and get more students to your course</em></a></p>
                          </div>
                        </div>
                        <div className="course-item-nav">
                          <div className="next">
                            <span>Next</span>
                            <a href="../introducing-our-ta-copy-copy-copy-copy-copy-copy/index.html">
                              Phase 2</a>
                          </div>
                        </div>
                      </div>
                      <div id="course-item-content-footer">
                      </div>
                    </div>
                  </div></div>
              </div> </div>
          </article>
        </main></div></div> </section>
</div>


</body>
 }
        </div>
     
    )
}

export default PhaseHDetail
