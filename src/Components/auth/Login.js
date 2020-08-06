import React, { Fragment, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const loginUser = {
        email,
        password,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(loginUser);
      const res = await axios.post(
        'http://localhost:5000/api/auth',
        body,
        config
      );

      const token = res.data;
      localStorage.setItem('jwtToken', JSON.stringify(token));
      localStorage.getItem('jwtToken');
      // <Redirect to='/home' />;
    } catch (error) {
      return alert('Invalid Credentials');
    }
  };

  return (
    <Fragment>
      <div className='container col-9 col-md-5 mb-3'>
        <div class='card row justify-content-center'>
          <div class='card-header'>
            <div className='h3 card-title'>Admin Sign In</div>
            <dive class='h6 card-subtitle mb-2 text-muted'>
              for our amazing team only, thank you.
              <p>username: admin1 password: 123456</p>
            </dive>
          </div>
          <div className='card-body'>
            <form onSubmit={e => onSubmit(e)}>
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
                  name='email'
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
              </div>

              <div className='form-group'>
                <label for='inputPassword'>Password</label>
                <input
                  type='password'
                  id='inputPassword'
                  className='form-control'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className='row'>
                <button className='ml-3 btn-lg  btn-primary ' type='submit'>
                  Sign In
                </button>
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
