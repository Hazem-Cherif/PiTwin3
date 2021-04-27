import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getCourses } from '../../../../redux/actions/courseAction';
import { Link } from 'react-router-dom'
function Courses() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [ dispatch]);
  
 
    return (
        <div>
        
  <div id="main-content"> <section className="content-area">
      <div className="page-title layout-1">
        <div className="main-top parallax" style={{backgroundImage: 'url(../wp-content/uploads/sites/5/2018/10/page_title_7.jpg)'}}>
          <span className="overlay-top-header" style={{backgroundColor: 'rgba(0,0,0,0.6)'}} />
          <div className="content container">
            <div className="row">
              <div className="text-title col-md-6">
                <h1>Courses</h1> </div>
              <div className="text-description col-md-6">
                <div className="banner-description"><p><strong className="br">The best demo education </strong> Be successful with Course Builder theme.</p></div> </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-content breadcrumb-plus">
          <div className="breadcrumbs-wrapper container">
            <ul itemProp="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList" id="breadcrumbs" className="breadcrumbs"><li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><a itemProp="item" href="../index.html" title="Home"><span itemProp="name">Home</span></a><meta itemProp="position" content={1} /><span className="breadcrum-icon"><i className="fa fa-angle-right" aria-hidden="true" /></span></li><li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><span itemProp="name" title="All courses">All courses</span><meta itemProp="position" content={2} /></li></ul> </div>
        </div>
      </div>
      <div id="top-sidebar-courses">
        <div >

          <div  className="vc_row wpb_row vc_row-fluid overflow top-courses-overflow vc_custom_1502273625937 vc_row-has-fill vc_row-no-padding"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="thim-sc-heading text-center layout-2 ">
                    <div className="heading-content">
                      <h3 className="primary-heading">Popular Courses</h3> </div>
                    <p className="secondary-heading">
                      Learn to develop Android and iOS applications and Web Development within six weeks from a teacher
                      with real-world experience. Get a 75% discount if you buy it here! </p>
                    <span className="underline" />
                  </div>
                 </div></div></div></div> </div>
      </div>
      <div className="container site-content " >
        <div className="row">
        <main id="main" className="site-main col-sm-12 col-md-9 flex-first">

            <article id="post-0" className="post-0 post type-post status-publish format-standard hentry pmpro-no-access page type-page">
              <div className="entry-content">
                <div style={{marginTop:'100px'}} id="lp-archive-courses" className="lp-archive-courses" data-all-courses-url="index.html">
                  <div className="thim-course-top">
                    <div className="display grid-list-switch lpr_course-switch " data-cookie="lpr_course-switch" data-layout="grid">
                      <a href="javascript:;" className="grid switchToGrid switcher-active"><i className="fa fa-th" /></a>
                      <a href="javascript:;" className="list switchToList"><i className="fa fa-th-list" /></a>
                    </div>
                    <div className="course-index">
                      <span>Showing 1-9 of 19 results</span>
                    </div>
                    <div className="courses-searching">
                      <form method="get" action="https://wordpresslms.thimpress.com/demo-elearning-2/courses/">
                        <input type="text" defaultValue name="s" placeholder="Search our courses" className="form-control course-search-filter" autoComplete="off" />
                        <input type="hidden" defaultValue="course" name="ref" />
                        <input type="hidden" name="post_type" defaultValue="lp_course" />
                        <button type="submit"><i className="ion-android-search" /></button>
                        <span className="widget-search-close" />
                      </form>
                      <ul className="courses-list-search list-unstyled" />
                    </div>
                  </div>
                  <div className="archive-courses course-grid archive_switch" itemScope itemType="http://schema.org/ItemList">
                    <div className="learn-press-courses row">
                    {courses.map((course) => (
          <Fragment>
                      <article id="post-486" className="col-md-4 col-12 col-sm-6 col-xs-6 lpr-course post-486 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-business course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
                        <div className="content">
                          <div className="thumbnail">
                            <a href="the-ultimate-ethical-hacking-boot-camp/index.html" className="img_thumbnail">
                              <img loading="lazy" width={365} height={405} src="../wp-content/uploads/sites/5/2017/06/Half-Marathon-2014-70-1-365x405.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /> </a>
                            <span className="price">
                              <span className="course-price">{course.title}</span>
                            </span>
                            <div className="review ">
                              <div className="sc-review-stars">
                                <div className="review-stars-rated" title="0 out of 5 stars">
                                  <div className="review-stars empty" />
                                  <div className="review-stars filled" style={{width: '0%'}} />
                                </div> </div>
                              <span className="vote">(0 vote)</span>
                            </div>
                            <div className="button-when-logged has-wishlist">
                            </div>
                          </div>
                          <div className="sub-content">
                            <h3 className="title">
                              <a href="the-ultimate-ethical-hacking-boot-camp/index.html">Added on 12/32/52</a>
                            </h3>
                            
                            <div className="thim-sc-button text-right hide-separator " style={{marginRight:'60px'}}>
                  <a   href="courses/index.html" target="_self" className="btn btn-primary btn-lg">
                    <span className="text" style={{color:'#FFFFFF'}}>Detail</span>
                  </a>
                </div>
                      
                          </div>
                        </div>
                       </article>
                        </Fragment>
                            ))}
                    
                    </div>
                    <nav className="learn-press-pagination">
                      <ul className="page-numbers">
                        <li><span aria-current="page" className="page-numbers current">1</span></li>
                        <li><a className="page-numbers" href="page/2/index.html">2</a></li>
                        <li><a className="page-numbers" href="page/3/index.html">3</a></li>
                        <li><a className="next page-numbers" href="page/2/index.html">&gt;</a></li>
                      </ul>
                    </nav>
                    <div className="thim-loading-icon">
                      <div className="sk-three-bounce">
                        <div className="sk-child sk-bounce1" />
                        <div className="sk-child sk-bounce2" />
                        <div className="sk-child sk-bounce3" />
                      </div></div>
                  </div>
                </div> </div>
            </article>
          </main> <aside className="sidebar-courses widget-area col-md-3 sticky-sidebar flex-last">
            <aside><h4 className="widget-title">Categories</h4> <ul className="courses-categories">
                <li className="cat-item ">
                  <a href="../course-category/business/index.html">Business</a>
                </li>
                <li className="cat-item ">
                  <a href="../course-category/design/index.html">Design</a>
                </li>
                <li className="cat-item ">
                  <a href="../course-category/marketing/index.html">Marketing</a>
                </li>
                <li className="cat-item ">
                  <a href="../course-category/mba-courses/index.html">MBA Courses</a>
                </li>
                <li className="cat-item ">
                  <a href="../course-category/photography/index.html">Photography</a>
                </li>
                <li className="cat-item ">
                  <a href="../course-category/photography-and-designs/index.html">Photography and Designs</a>
                </li>
                <li className="cat-item ">
                  <a href="../course-category/technology/index.html">Technology</a>
                </li>
                <li className="cat-item ">
                  <a href="../course-category/web-development/index.html">Web Development</a>
                </li>
              </ul>
            </aside><aside id="thim-recent-courses-3" className="widget widget_thim-recent-courses"><h4 className="widget-title">Latest Courses</h4> <div className="thim-recent-courses-widget">
                <ul className="recent-courses-wrapper">
                  <li className="course-item">
                    <div className="feature-img">
                      <img width={109} height={109} src="../wp-content/uploads/sites/5/2017/06/Half-Marathon-2014-70-1-109x109.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /><a href="the-ultimate-ethical-hacking-boot-camp/index.html" className="img-link" /> </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="the-ultimate-ethical-hacking-boot-camp/index.html">The Ultimate Ethical Hacking Boot Camp</a>
                      </h4>
                      <div className="price">
                        <span className="course-price">Free</span>
                      </div>
                    </div>
                  </li>
                  <li className="course-item">
                    <div className="feature-img">
                      <img width={109} height={109} src="../wp-content/uploads/sites/5/2017/08/layer-86-e1503482220669-109x109.jpg" alt="Affiliate Marketing – A Beginner’s Guide" className /><a href="affiliate-marketing-a-beginners-guide/index.html" className="img-link" /> </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="affiliate-marketing-a-beginners-guide/index.html">Affiliate Marketing – A Beginner’s Guide</a>
                      </h4>
                      <div className="price" />
                    </div>
                  </li>
                  <li className="course-item">
                    <div className="feature-img">
                      <img width={109} height={109} src="../wp-content/uploads/sites/5/2017/06/shutterstock_184641842-5-e1503481994491-109x109.jpg" alt="AWS Certified Solutions  Architect" className /><a href="aws-certified-solutions-architect/index.html" className="img-link" /> </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="aws-certified-solutions-architect/index.html">AWS Certified Solutions Architect</a>
                      </h4>
                      <div className="price">
                        <span className="course-origin-price"> $44.00</span>
                        <span className="course-price">$33.00</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
            <aside id="media_image-3" className="widget widget_media_image"><a href="http://thimpress.com/"><img width={360} height={392} src="../wp-content/uploads/sites/5/2017/08/wordpress-theme.jpg" className="image wp-image-795  attachment-full size-full" alt loading="lazy" style={{maxWidth: '100%', height: 'auto'}} srcSet="https://wordpresslms.thimpress.com/demo-elearning-2/wp-content/uploads/sites/5/2017/08/wordpress-theme.jpg 360w, https://wordpresslms.thimpress.com/demo-elearning-2/wp-content/uploads/sites/5/2017/08/wordpress-theme-276x300.jpg 276w" sizes="(max-width: 360px) 100vw, 360px" /></a></aside> <aside id="recent-posts-3" className="widget widget_recent_entries">
               
            </aside>
          </aside>
        </div></div> </section>
  </div>
 

        </div>
    )
}

export default Courses
