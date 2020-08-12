import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const CreateBlog = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  //const user = JSON.parse(localStorage.getItem('user'));
  // is for getting the token from storage...i think

  //console.log(user);
  const [formData, setFormData] = useState({
    text: '',
    title: '',
  });

  const { title, text } = formData;

  const history = useHistory();
  // const history = useHistory(); is for redirect to whatever page you would like

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async e => {
    e.preventDefault();
    // console.log(formData);
    const newBlog = {
      title,
      text,
    };

    if (!user) {
      //if there is NOT(!) a user

      alert('not authorized');
    } else {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('user'),
          },
        };
        const body = JSON.stringify(newBlog);
        const res = await axios.post(
          'http://localhost:5000/api/posts',
          body,
          config
        );
        history.push('/bloglist');
        console.log(res.data);
      } catch (err) {
        console.error(err.res.data);
      }
    }
  };

  return (
    <div className='container col-9 col-md-7 mb-3 shadow-lg  bg-white rounded'>
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
              <label for='title'>Title</label>
              <input
                type='text'
                id='title'
                className='form-control'
                placeholder='Title'
                //for the onchange to work you must have the name and value properties
                name='title'
                value={title}
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
                name='text'
                value={text}
                rows='9'
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
