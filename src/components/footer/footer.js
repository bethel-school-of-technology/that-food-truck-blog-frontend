import React from 'react';
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
          <div class='col-md-3 col-sm-6'>
            <h4> Contact Info </h4>
            <ul class='list-unstyled'>
              <li> The Food Truck Blog Inc. </li>
              <li> 2244 Golden Sunset Dr.</li>
              <li> 530-222-9448 </li>
              <li> foodtruckblogs@gmail.com </li>
            </ul>
          </div>
          {/* column 2 */}
          <div class='col-md-3 col-sm-6'>
            <h4> Social Media Links </h4>
            <ul class='list-unstyled'>
              <li> @FoodTruckBlog</li>

              <a
                href='https://www.facebook.com'
                class='facebook social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faFacebook} size='2x' />{' '}
              </a>

              <a
                href='https://www.twitter.com'
                class='twitter social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faTwitter} size='2x' />{' '}
              </a>

              <a
                href='https://www.Instagram.com'
                class='instagram social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faInstagram} size='2x' />{' '}
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
