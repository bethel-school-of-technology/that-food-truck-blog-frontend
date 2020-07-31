import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
<<<<<<< HEAD

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
      register({
        name,
        email,
        password,
      });
    }
  };
=======
import { queryAllByAttribute } from '@testing-library/react';

const Register = ({ register }) => {
  
>>>>>>> LoginForm
  return (
    <div class='justify-content-center'>
      <section class='container '>
        <h1 class='large text-primary'>Welcome Admin</h1>
        <p class='lead'>
          <i class='fas fa-user'>Create Admin</i> 
        </p>
        <form
          class='form'
<<<<<<< HEAD
          action='create-profile.html'
          onChange={e => onChange(e)}
=======
          action='http://localhost:5000/api/users'
          method="POST"
          
>>>>>>> LoginForm
        >
          <div class='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              required
<<<<<<< HEAD
              value={name}
              onChange={e => onChange(e)}
=======
              
>>>>>>> LoginForm
            />
          </div>
          <div class='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
<<<<<<< HEAD
              value={email}
              onChange={e => onChange(e)}
=======
              
              required
>>>>>>> LoginForm
            />
            <small class='form-text'></small>
          </div>
          <div class='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
<<<<<<< HEAD
              value={password}
              onChange={e => onChange(e)}
=======
              required
              
>>>>>>> LoginForm
            />
          </div>
          <div class='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
<<<<<<< HEAD
              value={password2}
              onChange={e => onChange(e)}
=======
              required
              
>>>>>>> LoginForm
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






























