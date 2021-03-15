import React, {Fragment} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'


function Header() {

  const auth = useSelector(state => state.auth)

  const {user, isLogged} = auth


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
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    </Fragment>
  );

const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0
}

    return (
        <div>
            <header className="header_area">
  <div id="header_navbar" className="header_navbar">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-12">
          <nav className="navbar navbar-expand-lg">
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
                  <Link to="/" className="page-scroll" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/courses" className="page-scroll" >Courses</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="page-scroll" >Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="page-scroll" >Contact</Link>
                </li>
                {
                  isLogged? userLink:
                <li className="nav-item">
                  <Link to="/login" className="header-btn btn-hover">Sign in</Link>
                  <Link to="/register" className="header-btn btn-hover">Sign up</Link>
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
