import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  // holy Ghost help me
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/users')
  //     .then(data => data.json())
  //     .then(data => setFormData(data));
  // }, []);
  useEffect(() => {
    axios
      .post('http://localhost:5000/api/users')
      .then(response => setFormData(response.data));
  }, []);

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      return 'passwords do not match', 'danger';
    } else {
      axios
        .post('http://localhost:5000/api/users')
        .then(response => setFormData(response.data));
    }
  };
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
          method='POST'
          // onChange={e => onChange(e)}
          onSubmit={e => onSubmit(e)}
        >
          <div class='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              required
              value={name}
              onChange={e => onChange(e)}
            />
          </div>
          <div class='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              required
              onChange={e => onChange(e)}
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
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <div class='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
              required
              value={password2}
              onChange={e => onChange(e)}
            />
          </div>
          <input type='submit' class='btn btn-primary' value='Register' />
        </form>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
