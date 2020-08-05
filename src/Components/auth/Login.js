import React, { Fragment, useState } from 'react';
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
          Authorization: localStorage.getItem('jwtToken'),
        },
      };
      const body = JSON.stringify(loginUser);
      const res = await axios.post(
        'http://localhost:5000/api/auth',
        body,
        config
      );
      localStorage.setItem('user', 'token');
      console.log(res.data);
    } catch (error) {
      return console.log(error);
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
