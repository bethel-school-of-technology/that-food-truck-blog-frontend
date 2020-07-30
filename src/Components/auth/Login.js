import React, { Fragment, useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import './Login.css';
// import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // const { email, password } = formData;

  useEffect(() => {
    fetch('http://localhost:5000/api/auth')
      .then(data => data.json())
      .then(data => {
        setFormData(data);
        console.log(data);
      });
  }, []);
  //console.log(formData);

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     };
  //     const body = JSON.stringify(formData);
  //     const res = await axios.post(
  //       'http://localhost:5000/api/auth',
  //       body,
  //       config
  //     );
  //     console.log(res.data);
  //   } catch (err) {
  //     console.error(err.res.data);
  //   }
  // };

  return (
    <Fragment>
      <div className='row justify-content-center'>
        <div class='col-9 col-md-4'>
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
            <h1 className='h3 m-3 font-weight-normal'>Admin Sign In</h1>
            <div className='form-group'>
              <label for='inputEmail' className='sr-only'>
                Email address
              </label>
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
              <label for='inputPassword' className='sr-only'>
                Password
              </label>
              <input
                type='password'
                id='inputPassword'
                className='form-control'
                placeholder='Password'
                onChange={e => onChange(e)}
                required
              />
            </div>
            <input
              className=' btn-lg  btn-primary '
              type='submit'
              value='Sign in'
            />
            <p className='mt-5 mb-3 text-muted'>&copy; 2017-2020</p>
          </form>
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
