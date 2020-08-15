import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const EditBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });

  const token = JSON.parse(localStorage.getItem('jwtToken'))
    ? JSON.parse(localStorage.getItem('jwtToken')).token
    : false;

  console.log("Edit blog");
  console.log(token);

  const history = useHistory();
  //If no token is found redirect user to Home Page
  if (!token) {
    history.push('/');
  }

  const { title, text } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async e => {
    e.preventDefault();

    if (!token) {
      alert('UNAUTHORIZED');
    } else {
      const updateBlog = {
        title,
        text,
      };
      try {
        //stringify token
        //pull id frmom url
        //

        const config = {
          headers: {
            'Content-Type': 'application/json',
            token: JSON.stringify(token),
          },
        };
        const body = JSON.stringify(updateBlog);
        await axios.put(
          'http://localhost:5000/api/posts/:id',
          body,
          config
        );
        //history.push('/');
        //
        //
        //
      } catch (error) {
        console.log(error);
        return alert('error of something');
        //------------this error is getting triggered so the error is in the try above---------------------
      }
    }
  };

  const onDelete = async e => {
    e.preventDefault();
    if (!token) {
      alert('unauthorized');
    } else {
      //get token
      //stringify token ?
      //get id from post
      //config
      //body stringify post

      const config = {
        Authorization: 'token',
      };
      const body = {
        foo: 'bar',
      };

      await axios.delete('http://localhost:5000/api/posts/:id', {
        config,
        body,
      });
    }
  };

  return (
    <div className='container col-9 col-md-7 mb-3 shadow-lg  bg-white rounded'>
      <div className='card row justify-content-center'>
        <div className='card-header'>
          <div className='h3 card-title'>Edit Blog </div>
          <div className='h6 card-subtitle mb-2 text-muted'>
            Lets fix this Blog!
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
              <button className='ml-3 btn-lg  btn-primary ' type='submit'>
                Submit
              </button>

              <button
                onDelete={e => onDelete(e)}
                className='ml-3 btn-lg  btn-danger '
                type='submit'
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
