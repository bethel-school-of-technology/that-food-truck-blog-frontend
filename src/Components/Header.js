import React, { Component } from 'react';
import './Header.css';
import logo from './foodTruck2.png';

class Header extends Component {
    render() { 
        return ( 
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent border-0">
          <img className="img-fluid" src={logo} alt="logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">HOME<span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/about">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/Blog List">BLOG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/Contact">CONTACT</a>
              </li>
              <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                SEASONAL MENUS
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">SPRING</a>
                <a className="dropdown-item" href="#">SUMMER</a>
                <a className="dropdown-item" href="#">FALL</a>
                <a className="dropdown-item" href="#">WINTER</a>
              </div>
            </div>
            </ul>            

          </div>
        </nav>

          
        ); 
    };
}
 

 
export default Header;