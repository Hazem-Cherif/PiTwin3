import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getAllCoursesByUser, deleteCourse } from '../../../../redux/actions/courseAction';
import Swal from 'sweetalert2'
import {
  Alert,
  Button,
  Card,
  Modal,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {Link} from 'react-router-dom'
function Gerercoursemodifsupp() {
    const token = useSelector(state => state.token);
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  
  useEffect(() => {
    
    dispatch(getAllCoursesByUser(token))
  }, [ dispatch(getAllCoursesByUser(token))]);
  const notif = async e => {
    Swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Click to Add A COURSE',
        text: 'The blue button on left',
        imageUrl: 'https://i.pinimg.com/736x/61/62/5b/61625b91c47e4a58d0b1d338a8fd0596.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      },{
        title: 'fill the blanks',
        text: 'Scroll on the picture, a button will appear',
        imageUrl: 'https://i.pinimg.com/736x/61/62/5b/61625b91c47e4a58d0b1d338a8fd0596.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image'
     
      },{
        title: 'Select add Score Button',
        text: 'A PoP UP will appear , be free to add your score between 0 & 100',
        imageUrl: 'https://i.pinimg.com/736x/61/62/5b/61625b91c47e4a58d0b1d338a8fd0596.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image'
        
      }
    ]).then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value)
        Swal.fire({
      title: '<strong>We are here to <u>HELP YOU</u></strong>',
      icon: 'info',
      html:
        'You can use <b>HELP SECTION</b>, ' +
        'for more details, hope it was clear for you', 
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Clear!',
      confirmButtonAriaLabel: 'Great! Enjoy it!',
    })
      }
    })
  }
    return (
        <div style={{width: 1400,marginLeft:50,marginBottom:180}}>
        <div id="main-content"> <section className="content-area">
    <div className="page-title layout-1"  style={{marginLeft:'-50px',marginRight:'-250px',marginBottom:'100px'}}>
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
                         
                        </ul>
                        <h3 className="author-name">Courzelo</h3>
                        <ul className="list-contact">
                          <li><a href="tel:0975877906">+21650347045</a></li>
                          <li><a ><span className="__cf_email__" data-cfemail="7a0c1314123a1c151518161b54191517">Info@Courzelo.com</span></a></li>
                        </ul>
                        <p className="description">If you are a newbie to managing a Courzelo website, then congratulations! You are here...</p>
                      </div>
                    </div>
                  </div>
                  <div className="profile-tabs">
                    <a id="profile-mobile-menu" className="fa fa-bars" />
                    <ul className="learn-press-tabs">
                      <li className="courses active">
                             <Link to={`/addcourse/${token}`}>Add Course</Link> 
                      </li>
                      <li className="courses active">
                             <Link  onClick={notif} > Help me</Link> 
                      </li>
                    </ul>
                    <div id="learn-press-profile-content" className="tab-content">
                      <div id="profile-content-courses">
                      <ul className="lp-tab-sections">
                          <li className="section-tab owned active">
                            <span> <Link to="/GererCourses">My Courses</Link> </span>
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
                                <th className="column-passing-grade"></th>
                              </tr>
                            </thead>
                            <tbody>
                            {courses.map((course) => (
          <Fragment>
                              <tr>
                                <td className="column-course">
                                  <a >
                                  {course.title} </a>
                                </td>
                            
                                
                                <td className="column-status">
                                  <span className="result-percent">{course.pourcentage}%</span>
                                  {course.pourcentage==100 ?
                                  <span className="lp-label label-sucess" style ={{backgroundColor:'#008000'
                                  }}>
                                    sucess </span> 
:   <span className="lp-label label-failed">
Failed </span>}
                                </td>
                                <td className="column-passing-grade"> <ul className="lp-tab-sections">
                          <li className="section-tab owned active">
                            <span> <Link to={`/modifiersupcoursform/${course._id}`} >Update</Link> </span>
                          </li></ul></td>
                          <td className="column-passing-grade"> <ul className="lp-tab-sections">
                          
                          <Row>
              <Col className="text-center" md="12">
               
                <Button
                  className="btn-fill btn-wd"
                  variant="info"
                  onClick={() => setShowModal(true)}
                  style ={{backgroundColor :'#4BDFD2'}}
                >
                  Delete
                </Button>
              </Col>
            </Row>
            
                          </ul></td>
                              </tr>
                              <Modal
          className="modal-mini modal-primary"
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <Modal.Header className="justify-content-center">
            <div className="modal-profile">
              <i className="nc-icon nc-bulb-63"></i>
            </div>
          </Modal.Header>
          <Modal.Body className="text-center">
            <p>DO you really want to delete this course</p>
          </Modal.Body>
          <div className="modal-footer">
            <Button
              className="btn-simple"
              type="button"
              variant="link"
              style ={{backgroundColor :'#FF0000'}}
           
              
              onClick={() => dispatch(deleteCourse(course._id))}
            >
              yes
            </Button>
            <Button
              className="btn-simple"
              type="button"
              variant="link"
              style ={{backgroundColor :'#008000'}}
              onClick={() => setShowModal(false)}
             
            >
              no
            </Button>
          </div>
        </Modal>
                              </Fragment>

                              
          ))}
           
                            
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
