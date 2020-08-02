import React, { Fragment, useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import './Login.css';
import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';
// import jwt_decode from 'jwt-decode';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  // authenticate user

  // Get the JWT token

  //store jwt token in localStorage

  //give user access to protected routes createBlog, editBlog, register

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:5000/api/auth', {
          headers: { Authorization: localStorage.getItem('jwtToken') },
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));

      // // console.log(res.data);
    } catch (err) {
      console.error(err.res.data);
    }
  };

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <Fragment>
      <div className='container col-9 col-md-5 mb-3'>
        <div class='card row justify-content-center'>
          <div class='card-header'>
            <div className='h3 card-title'>Admin Sign In</div>
            <dive class='h6 card-subtitle mb-2 text-muted'>
              for our amazing team only, thank you.
            </dive>
          </div>
          <div className='card-body'>
            <form
            //  onSubmit={e => onSubmit(e)}
            >
              <img
                className='mb-4'
                src='../assets/brand/bootstrap-solid.svg'
                alt=''
                width='72'
                height='72'
              />
              <div className='form-group'>
                <label for='inputEmail'>Email address</label>
                <input
                  type='email'
                  id='inputEmail'
                  className='form-control'
                  placeholder='Email address'
                  onChange={e => onChange(e)}
                  required
                  autoFocus
                />
              </div>

              <div className='form-group'>
                <label for='inputPassword'>Password</label>
                <input
                  type='password'
                  id='inputPassword'
                  className='form-control'
                  placeholder='Password'
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className='row'>
                <input
                  className='ml-3 btn-lg  btn-primary '
                  type='submit'
                  value='Sign in'
                />
                <p className='col-8 mb-3 text-muted text-right'>
                  &copy; 2017-2020
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// Login.propTypes = {
//   //proptypes
// };

// const mapStateToProps = state => ({
//   //
// });

export default Login;
