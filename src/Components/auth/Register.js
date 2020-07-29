import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  // ^ the above name, email ect. are the default state values
  // formData = this is the actual state. this is an object with all the field values
  //setFormData = this is a function used to update the state.

  const { name, email, password, password2 } = formData;
  // the above const is deconstructing formData so we do not have to type out formData.name ect... every time we need a value

  // holy Ghost help me

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/users')
  //     .then(data => data.json())
  //     .then(data => setFormData(data));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .post('http://localhost:5000/api/users')
  //     .then(response => setFormData(response.data));
  // }, []);

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  // ... formData is using the spread opperator to make a copy of the formData
  //[e.target.name]: e.target.value will target the name attribute attached to each input. ie in the email input the name is email so on and so forth.
  //
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      alert('passwords do not match', 'danger');
    } else {
      // console.log(formData);
      const newUser = {
        name,
        email,
        password,
      };

      // i want to clear the form after how would i do that?

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post(
          'http://localhost:5000/api/users',
          body,
          config
        );
        //console.log(res.data);
      } catch (err) {
        console.error(err.res.data);
      }
    }
  };
  return (
    <Fragment>
      <div className='justify-content-center'>
        <section className='container '>
          <h1 className='large text-primary'>Welcome Admin</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Create Admin
          </p>
          <form className='form' method='POST' onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                required
                value={name}
                //value = {name} is associating to the name value in the state
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                required
                onChange={e => onChange(e)}
              />
              <small className='form-text'></small>
            </div>
            <div className='form-group'>
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
            <div className='form-group'>
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
            <input type='submit' className='btn btn-primary' value='Register' />
          </form>
        </section>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  //register: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  //
});

export default Register;
