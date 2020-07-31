import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
const Login = props => {
  return (
    <div className='container col-9 col-md-5 mb-3'>
        <div class="card row justify-content-center">
          <div class="card-header">
          <h1 class='h3 m-3 font-weight-normal'>Admin Sign In</h1>
          </div>
          <div class="card-body">
      <form >
        
        <img
          class='mb-4'
          src='../assets/brand/bootstrap-solid.svg'
          alt=''
          width='72'
          height='72'
        />
        
        <div class="form-group">
        <label for='inputEmail' class='sr-only'>
          Email address
        </label>
        <input
          type='email'
          id='inputEmail'
          class='form-control'
          placeholder='Email address'
          required
          autofocus
        />
        </div>
        
        <div class="form-group">
        <label for='inputPassword' class='sr-only'>
          Password
        </label>
        <input
          type='password'
          id='inputPassword'
          class='form-control'
          placeholder='Password'
          required
        />
        </div>
        <div class="form-group">
        <div class='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me how do i
            hook this up
          </label>
        </div>
        </div>
        <button class=' btn-lg  btn-primary ' type='submit'>
          Sign in
        </button>
        <p class='mt-5 mb-3 text-muted'>&copy; 2017-2020</p>
        
        
      </form>
      </div>
      </div>
      </div>
    
  );
};

Login.propTypes = {};

export default Login;
