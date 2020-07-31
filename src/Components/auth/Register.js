import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { queryAllByAttribute } from '@testing-library/react';

const Register = ({ register }) => {

  return (
    <div class='justify-content-center'>
      <section class='container '>
        <h1 class='large text-primary'>Welcome Admin</h1>
        <p class='lead'>
          <i class='fas fa-user'>Create Admin</i>
        </p>
        <form
          class='form'
          action='http://localhost:5000/api/users'
          method="POST"

        >
          <div class='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              required

            />
          </div>
          <div class='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'

              required
            />
            <small class='form-text'></small>
          </div>
          <div class='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              required

            />
          </div>
          <div class='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
              required

            />
          </div>
          <input type='submit' class='btn-lg btn-primary' ></input>
        </form>
      </section>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;






























