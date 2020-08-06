import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const history = useHistory();

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
    <div className='container col-9 col-md-5 mb-3'>
      <div class='card row justify-content-center'>
        <div class='card-header'>
          <div className='h3 card-title'>Create Admin</div>
          <div class='h6 card-subtitle mb-2 text-muted'>It's that simple</div>
        </div>
        <div class='card-body'>
          <form
            className='form'
            id='regForm'
            method='POST'
            onSubmit={e => onSubmit(e)}
          >
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
                minLength='6'
                name='password2'
                value={password2}
                onChange={e => onChange(e)}
                required
              />
            </div>
          </form>
          <button
            className=' btn-sm btn-primary'
            type='submit'
            form='regForm'
            onClick={() => {
              history.push('/');
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
