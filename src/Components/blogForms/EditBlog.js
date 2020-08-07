import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const EditBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });

  const { title, text } = formData;

  const history = useHistory();

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      //check local storage for jwt token
      //get JWT token
      //input for each field.
      //title
      //text
      //send data to backend using put request
      //after submission send admin user to the blog/:id {this is done in the onClick assigned to the submit button}
    } catch (error) {
      return alert('error of something');
    }
  };

  return (
    <div className='container col-9 col-md-7 mb-3'>
      <div className='card row justify-content-center'>
        <div className='card-header'>
          <div className='h3 card-title'>Edit Blog </div>
          <dive className='h6 card-subtitle mb-2 text-muted'>
            Lets fix this Blog!
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
              <label for='title'>Title</label>
              <input
                type='text'
                id='title'
                className='form-control'
                value={title}
                name='title'
                onChange={e => onChange(e)}
                required
                autoFocus
              />
            </div>

            <div className='form-group'>
              <label for='body'>Body</label>
              <textarea
                type='text'
                id='body'
                className='form-control'
                value={text}
                name='text'
                rows='9'
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className='row'>
              <button
                className='ml-3 btn-lg  btn-primary '
                type='submit'
                onClick={() => {
                  history.push('/blogList');
                }}
              >
                Submit
              </button>
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

export default EditBlog;
