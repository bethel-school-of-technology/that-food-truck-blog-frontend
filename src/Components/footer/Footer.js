import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer class='footer navbar-fixed-bottom'>
      <div class='container'>
        <div class='row'>
          {/* column 1 */}
          <div class='col-md-4 col-sm-6'>
            <h4> Contact Info </h4>
            <ul class='list-unstyled'>
              <li> The Food Truck Blog Inc. </li>
              <li> 2244 Golden Sunset Dr.</li>
              <li> 530-222-9448 </li>
              <li> foodtruckblogs@gmail.com </li>
            </ul>
          </div>
          {/* column 2 */}
          <div class='col-md-4 col-sm-6'>
            <h4> Social Media Links </h4>
            <ul class='list-unstyled'>
              <li> @FoodTruckBlog</li>

              <Link
                href='https://www.facebook.com'
                class='facebook social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faFacebook} size='2x' />{' '}
              </Link>

              <Link
                href='https://www.twitter.com'
                class='twitter social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faTwitter} size='2x' />{' '}
              </Link>

              <Link
                href='https://www.Instagram.com'
                class='instagram social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faInstagram} size='2x' />{' '}
              </Link>
            </ul>
          </div>
          {/* column 2 */}
          <div class='col-md-4 col-sm-6'>
            <h4> Pages </h4>
            <ul class='list-unstyled'>
            <li><Link to="/" className="text-reset ">Home</Link></li>
            <li><Link to="/About" className="text-reset ">About</Link></li>
            <li><Link to="/BlogList" className="text-reset ">Blog</Link></li>
            <li><Link to="/ContactForm" className="text-reset ">Contact</Link></li>
            <li><Link to="/Login" className="text-reset ">Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
