import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import './footer.css'

const Footer = () => {
  const token = JSON.parse(localStorage.getItem('jwtToken')) ? JSON.parse(localStorage.getItem('jwtToken')).token : false

  return (
    <footer className='footer navbar-fixed-bottom'>
      <div className='container'>
        <div className='row'>
          {/* column 1 */}
          <div className='col-md-4 col-sm-6'>
            <h4> Contact Info </h4>
            <ul className='list-unstyled'>
              <li> The Food Truck Blog Inc. </li>
              <li> 2244 Golden Sunset Dr.</li>
              <li> 530-222-9448 </li>
              <li> foodtruckblogs@gmail.com </li>
            </ul>
          </div>
          {/* column 2 */}
          <div className='col-md-4 col-sm-6'>
            <h4> Social Media Links </h4>
            <ul className='list-unstyled'>
              <li> @FoodTruckBlog</li>
              {/* Warning: Each child in a list should have a unique "key" prop. */}
              {/*Warning: Failed prop type: The prop `to` is marked as required in `Link`, but its value is `undefined`.  */}
              <Link
                to='https://www.facebook.com'
                className='facebook social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faFacebook} size='2x' />{' '}
              </Link>

              <Link
                to='https://www.twitter.com'
                className='twitter social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faTwitter} size='2x' />{' '}
              </Link>

              <Link
                to='https://www.Instagram.com'
                className='instagram social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faInstagram} size='2x' />{' '}
              </Link>
            </ul>
          </div>
          {/* column 2 */}
          <div className='col-md-4 col-sm-6'>
            <h4> Pages </h4>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' className='text-reset '>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/About' className='text-reset '>
                  About
                </Link>
              </li>
              <li>
                <Link to='/BlogList' className='text-reset '>
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/ContactForm' className='text-reset '>
                  Contact
                </Link>
              </li>
              <li>
                <Link to='/Login' className='text-reset '>
                  {token ? "Sign Out" : "Sign in"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
