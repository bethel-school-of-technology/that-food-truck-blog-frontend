import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

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
        if (res) return <Redirect to='/login' />;
        //console.log(res.data);
      } catch (err) {
        const errors = err.res.data;
        if (errors) {
          alert('Server Error');
        } else {
          return '';
        }
      }
    }
  };

  return (
    <Fragment>
      <div className='container col-9 col-md-5 mb-3'>
        <div class='card row justify-content-center'>
          <div class='card-header'>
            <div className='h3 card-title'>Create Admin</div>
            <dive class='h6 card-subtitle mb-2 text-muted'>
              It's that simple
            </dive>
          </div>
          <div class='card-body'>
            <form className='form' method='POST' onSubmit={e => onSubmit(e)}>
              <div className='form-group'>
                <label for='name'>Name</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Name'
                  name='name'
                  required
                  //value = {name} is associating to the name value in the state
                  value={name}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label for='email'>Email</label>
                <input
                  className='form-control'
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
                <label for='password'>Password</label>
                <input
                  className='form-control'
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
                <label for='password2'>Confirm Password</label>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Confirm Password'
                  name='password2'
                  minLength='6'
                  required
                  value={password2}
                  onChange={e => onChange(e)}
                />
              </div>

              <input
                className='form-control'
                type='submit'
                className='btn-sm btn-primary'
                value='Register'
              ></input>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
