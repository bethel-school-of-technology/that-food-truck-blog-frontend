import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../pictures/foodTruck2.png';

class Header extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light  '>
          <img width='100' height='100' src={logo} alt='logo' />
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto '>
              <li className='nav-item active font-weight-bold'>
                <Link className='nav-link' to='/'>
                  HOME<span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item active font-weight-bold'>
                <Link className='nav-link' to='/About'>
                  ABOUT
                </Link>
              </li>
              <li className='nav-item font-weight-bold'>
                <Link className='nav-link active' to='/BlogList'>
                  BLOG
                </Link>
              </li>
              <li className='nav-item font-weight-bold'>
                <Link className='nav-link active' to='/ContactForm'>
                  CONTACT
                </Link>
              </li>
              <div className='dropdown '>
                <button
                  className='btn dropdown-toggle font-weight-bold'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  SEASONAL MENUS
                </button>
                <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <Link className='dropdown-item' to='#'>
                    SPRING
                  </Link>
                  <Link className='dropdown-item' to='#'>
                    SUMMER
                  </Link>
                  <Link className='dropdown-item' to='#'>
                    FALL
                  </Link>
                  <Link className='dropdown-item' to='#'>
                    WINTER
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
