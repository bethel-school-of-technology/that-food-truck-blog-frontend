import React, { Component } from 'react';
import {nav} from 'react-bootstrap';


class Header extends Component {
    render() { 
        return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <h1 className="text-secondary">THAT FOODTRUCK BLOG
            </h1>
            <ul className="row navbar-nav">
              <li className="nav-item active col-3">
                <a className="nav-link" href="#">ABOUT</a>
              </li>
              <li className="nav-item active col-3">
                <a className="nav-link " href="#">BLOG</a>
              </li>
              <li className="nav-item active col-3">
                <a className="nav-link" href="#">FORM</a>
              </li>
            </ul>
        </nav>

          
        ); 
    };
}
 
export default Header;