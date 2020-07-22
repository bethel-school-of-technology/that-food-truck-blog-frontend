import React from 'react';
import PropTypes from 'prop-types';

const Register = props => {
  return (
    <div class='justify-content-center'>
      <section class='container '>
        <h1 class='large text-primary'>Welcome Admin</h1>
        <p class='lead'>
          <i class='fas fa-user'></i> Create Admin
        </p>
        <form class='form' action='create-profile.html'>
          <div class='form-group'>
            <input type='text' placeholder='Name' name='name' required />
          </div>
          <div class='form-group'>
            <input type='email' placeholder='Email Address' name='email' />
            <small class='form-text'></small>
          </div>
          <div class='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
            />
          </div>
          <div class='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
            />
          </div>
          <input type='submit' class='btn btn-primary' value='Register' />
        </form>
      </section>
    </div>
  );
};

Register.propTypes = {};

export default Register;
