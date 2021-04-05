import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getCourses } from '../../../../redux/actions/courseAction';

function Courses() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [ dispatch]);
  
  const coursecard=(
    <Fragment>
    <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="single-course wow fadeInUp" data-wow-delay=".2s">
          <div className="course-img">
            <a href="course-single.html">
              <img src="assets/images/course/full-stack.jpg" alt />
            </a>
          </div>
          <div className="course-info">
            <h4><a href="course-single.html">titre</a></h4>
            <h4><a href="course-single.html">description</a></h4>
            <div className="course-meta">
              <div className="meta-item">
                <i className="lni lni-user" />
                <span>3.5k</span>
              </div>
              <div className="meta-item">
                <i className="lni lni-eye" />
                <span>12k</span>
              </div>
              <div className="meta-item">
                <i className="lni lni-star" />
                <span>5.0</span>
              </div>
              <div className="price">
                <span>$99.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>

)
    return (
        <div>
          <section className="page-banner pt-200 pb-100 bg_cover" style={{backgroundImage: 'url("assets/images/hero-bg.jpg")'}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center banner-content">
          <h1 className="text-white">Courses Page</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Courses</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

            <section id="courses" className="course-area pt-140 pb-170">
  <div className="container">
    <div className="row">
      <div className="mx-auto col-xl-6 col-lg-7 col-md-10">
        <div className="text-center section-title mb-50">
          <h2 className="mb-15 wow fadeInUp" data-wow-delay=".2s">Popular Courses</h2>
          <p className="wow fadeInUp" data-wow-delay=".4s">eStore UI Kit comes with all essential features, sections and elements you need
            to design and develop web UI efficiently.</p>
        </div>
      </div>
    </div>
    <div className="row mb-30">

    {courses.map((course) => (
          <Fragment>
          <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-course wow fadeInUp" data-wow-delay=".2s">
                <div className="course-img">
                  <a href="course-single.html">
                    <img src="assets/images/course/full-stack.jpg" alt />
                  </a>
                </div>
                <div className="course-info">
                  <h4><a href="course-single.html">{course.title}</a></h4>
                  <h4><a href="course-single.html">{course.description}</a></h4>
                  <div className="course-meta">
                    <div className="meta-item">
                      <i className="lni lni-user" />
                      <span>3.5k</span>
                    </div>
                    <div className="meta-item">
                      <i className="lni lni-eye" />
                      <span>12k</span>
                    </div>
                    <div className="meta-item">
                      <i className="lni lni-star" />
                      <span>5.0</span>
                    </div>
                    <div className="price">
                      <span>$99.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Fragment>
        ))}

      
      
      
      
    </div>
    <div className="row">
      <div className="col-xl-12">
        <div className="text-center view-all-btn">
          <a href="courses.html" className="main-btn">View All Course</a>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Courses
