import React from 'react'
import {link} from 'react-router-dom'
function Header() {
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
              <ul id="nav" className="ml-auto navbar-nav">
                <li className="nav-item">
                  <a className="page-scroll" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#courses">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#blog">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="header-btn btn-hover" href="">Sign in</a>
                  <a className="header-btn btn-hover" href="">Sign up</a>
                </li>
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
