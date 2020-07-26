import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Register = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   password2: '',
  // });

  // const { name, email, password, password2 } = formData;

  // const onChange = e =>
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   if (password !== password2) {
  //     setAlert('passwords do not match', 'danger');
  //   } else {
  //     register({
  //       name,
  //       email,
  //       password,
  //     });
  //   }
  // };

  // if (isAuthenticated) {
  //   return <Redirect to='/bloglist' />;
  // }

  return (
    <Fragment class='justify-content-center'>
      <section class='container '>
        <h1 class='large text-primary'>Welcome Admin</h1>
        <p class='lead'>
          <i class='fas fa-user'></i> Create Admin
        </p>
        <form
          class='form'
          action='create-profile.html'
          // onChange={e => onChange(e)}
        >
          <div class='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              required
              // value={name}
              // onChange={e => onChange(e)}
            />
          </div>
          <div class='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              // value={email}
              // onChange={e => onChange(e)}
            />
            <small class='form-text'></small>
          </div>
          <div class='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              // value={password}
              // onChange={e => onChange(e)}
            />
          </div>
          <div class='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
              // value={password2}
              // onChange={e => onChange(e)}
            />
          </div>
          <input type='submit' class='btn btn-primary' value='Register' />
        </form>
      </section>
    </Fragment>
  );
};
export default Register;






























