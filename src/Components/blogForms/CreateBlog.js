import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    text: '',
    title: '',
  });


  const { title, text } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    }); 
    ///refers to the name attribute and value of the attribute being passed to it

  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    const newBlog = {
      title,
      text,
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(newBlog);
      const res = await axios.post(
        'http://localhost:5000/api/posts',
        body,
        config
      );
      console.log(res.data);
    } catch (err) {
      console.error(err.res);
    }
  }

  return (
    <div className='container col-9 col-md-7 mb-3'>
      <div class='card row justify-content-center'>
        <div class='card-header'>
          <div className='h3 card-title'>Create a New Blog Form</div>
          <dive class='h6 card-subtitle mb-2 text-muted'>
<<<<<<< HEAD
            Create a blog here!
        </dive>
=======
            Create your next blog. make it Great!
          </dive>
>>>>>>> 678ee04e0103e73990e501746961781e01d3c46a
        </div>
        <div className='card-body'>
          <form
            onSubmit={e => onSubmit(e)}
          >
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
                placeholder='Title'
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
                placeholder='Body'
                rows="9"
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

CreateBlog.propTypes = {};

export default CreateBlog;
