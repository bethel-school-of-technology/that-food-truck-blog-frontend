import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../pictures/foodTruck2.png';

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light  '>
        <img src={logo} alt='logo' />
        <div className="d-flex flex-grow-1 justify-content-end">
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
        </div>

        <div className='collapse navbar-collapse flex-grow-1 justify-content-end text-right' id='navbarSupportedContent'>
          <ul className='navbar-nav '>
            <li className='nav-item font-weight-bold'>
              <Link className='nav-link text-reset' to='/'>
                HOME<span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item font-weight-bold'>
              <Link className='nav-link text-reset' to='/About'>
                ABOUT
                </Link>
            </li>
            <li className='nav-item font-weight-bold'>
              <Link className='nav-link text-reset ' to='/BlogList'>
                BLOG
                </Link>
            </li>
            <li className='nav-item font-weight-bold'>
              <Link className='nav-link text-reset ' to='/ContactForm'>
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
                <Link className='dropdown-item' to='/SpringMenu'>
                  SPRING
                  </Link>
                <Link className='dropdown-item' to='/SummerMenu'>
                  SUMMER
                  </Link>
                <Link className='dropdown-item' to='/FallMenu'>
                  FALL
                  </Link>
                <Link className='dropdown-item' to='/WinterMenu'>
                  WINTER
                  </Link>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
