import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const CreateBlog = () => {
  const token = JSON.parse(localStorage.getItem('jwtToken'))
    ? JSON.parse(localStorage.getItem('jwtToken')).token
    : false;

  const [formData, setFormData] = useState({
    text: '',
    title: '',
  });
  const { title, text } = formData;

  const history = useHistory();

  if (!token) {
    history.push('/');
  }

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async e => {
    e.preventDefault();

    if (!token) {
      alert('not authorized');
    } else {
      try {
        const newBlog = {
          title,
          text,
        };

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        };
        const body = JSON.stringify(newBlog);
        const res = await axios.post(`${baseUrl}/posts`, body, config);
        let id = res.data._id;
        let url = '/BlogList/7/' + id;
        history.push(url);
      } catch (err) {
        return alert('Create Blog Failed');
      }
    }
  };

  return (
    <div className='container col-9 col-md-7 mb-3 mt-3 shadow-lg  bg-white rounded'>
      <div className='card row justify-content-center'>
        <div className='card-header'>
          <div className='h3 card-title'>Create Blog Form</div>
          <div className='h6 card-subtitle mb-2 text-muted'>
            Create your next blog. make it Great!
          </div>
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
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                className='form-control'
                placeholder='Title'
                name='title'
                value={title}
                name='title'
                onChange={e => onChange(e)}
                required
                autoFocus
              />
            </div>

            <div className='form-group'>
              <label htmlFor='body'>Body</label>
              <textarea
                type='text'
                id='body'
                className='form-control'
                placeholder='Body'
                rows='9'
                value={text}
                name='text'
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className='row'>
              <input
                className='ml-3 btn-lg  btn-primary '
                type='submit'
                value='Create Blog'
              />
              <p className='col-8 mb-3 text-muted text-right'>
                &copy; 2017-2020
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
