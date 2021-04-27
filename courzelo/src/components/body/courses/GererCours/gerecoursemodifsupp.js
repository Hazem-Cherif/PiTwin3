import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getAllCoursesByUser, getCourses } from '../../../../redux/actions/courseAction';
import {Link} from 'react-router-dom'
function Gerercoursemodifsupp() {
    const token = useSelector(state => state.token);
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getAllCoursesByUser(token))
  }, [ dispatch(getAllCoursesByUser(token))]);
  
    return (
        <div style={{width: 1400,marginLeft:50,marginBottom:180}}>
        <div id="main-content"> <section className="content-area">
    <div className="page-title layout-1"  style={{marginLeft:'-50px',marginRight:'-80px',marginBottom:'100px'}}>
      <div className="main-top parallax" style={{backgroundImage: 'url(../../../../wp-content/uploads/sites/5/2018/10/page_title_7.jpg)'}}>
        <span className="overlay-top-header" style={{backgroundColor: 'rgba(0,0,0,0.6)'}} />
        <div className="content container">
          <div className="row">
            <div className="text-title col-md-6">
              <h1>Profile</h1> </div>
            <div className="text-description col-md-6">
              <div className="banner-description"><strong className="br">The best demo education </strong> It is a long established fact that a reader.</div> </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container site-content "><div className="row"><main id="main" className="site-main col-sm-12 full-width">
          <article id="post-42" className="post-42 page type-page status-publish hentry pmpro-has-access">
            <div className="entry-content">
              <div className="learnpress">
                <div className="learn-press-user-profile profile-container" id="learn-press-user-profile">
                  <div className="user-tab">
                    <div className="user-info">
                      <div className="author-avatar">
                        <img src="../../../../wp-content/uploads/learn-press-profile/1/21232f297a57a5a743894a0e4a801fc3.jpg" />
                      </div>
                      <div className="user-information">
                        <ul className="profile-list-social breadcrumbs" itemProp="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList" id="breadcrumbs">
                          <li className="item" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                            <a itemProp="item" href="https://facebook.com/thimpress" title="Facebook"><i className="fa fa-facebook" /></a>
                          </li>
                          <li className="item" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                            <a itemProp="item" href="https://twitter.com/thimpress" title="Twitter"><i className="fa fa-twitter" /></a>
                          </li>
                          <li className="item" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                            <a itemProp="item" href="skype:hotamdhv?call" title="Skype"><i className="fa fa-skype" /></a>
                          </li>
                        </ul>
                        <h3 className="author-name">Courzelo</h3>
                        <ul className="list-contact">
                          <li><a href="tel:0975877906">0975877906</a></li>
                          <li><a href="https://wordpresslms.thimpress.com/cdn-cgi/l/email-protection#3f495651577f5950505d535e115c5052"><span className="__cf_email__" data-cfemail="7a0c1314123a1c151518161b54191517">[email&nbsp;protected]</span></a></li>
                        </ul>
                        <p className="description">If you are a newbie to managing a WordPress website, then congratulations! You are here...</p>
                      </div>
                    </div>
                  </div>
                  <div className="profile-tabs">
                    <a id="profile-mobile-menu" className="fa fa-bars" />
                    <ul className="learn-press-tabs">
                      <li className="courses active">
                             <Link to={`/addcourse/${token}`}>Add Course</Link> 
                      </li>
                    
                    </ul>
                    <div id="learn-press-profile-content" className="tab-content">
                      <div id="profile-content-courses">
                      <ul className="lp-tab-sections">
                          <li className="section-tab owned active">
                            <span> <Link to="/GererCourses">Gerer Course</Link> </span>
                          </li>
                          <li className="section-tab purchased">
                           <Link to="/Gerercoursemodifsupp">Gerer Course</Link> 
                          </li>
                        </ul>
                        <div className="learn-press-subtab-content">
                         
                          <table className="lp-list-table profile-list-courses profile-list-table">
                            <thead>
                              <tr>
                                <th className="column-course">Course</th>
                              
                               
                                <th className="column-status">Progress</th>
                                <th className="column-passing-grade">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="column-course">
                                  <a href="https://wordpresslms.thimpress.com/demo-elearning-2/courses/the-complete-sql-bootcamp/">
                                    The Complete SQL Bootcamp </a>
                                </td>
                            
                                
                                <td className="column-status">
                                  <span className="result-percent">0%</span>
                                  <span className="lp-label label-failed">
                                    Failed </span>
                                </td>
                                <td className="column-passing-grade"> <ul className="lp-tab-sections">
                          <li className="section-tab owned active">
                            <span> <Link to="/GererCourses">Gerer</Link> </span>
                          </li></ul></td>
                              </tr>
                            
                            
                            </tbody>
                            <tfoot>
                              <tr className="list-table-nav">
                               <td></td>
                                <td colSpan={2} className="nav-pages">
                                  <div className="learn-press-pagination">
                                    <ul className="page-numbers">
                                      <li><span aria-current="page" className="page-numbers current">1</span></li>
                                      <li><a className="page-numbers" href="2/index.html">2</a></li>
                                      <li><a className="next page-numbers" href="2/index.html">&gt;</a></li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main></div></div> </section>
</div>

 

        </div>
    )
}

export default Gerercoursemodifsupp
