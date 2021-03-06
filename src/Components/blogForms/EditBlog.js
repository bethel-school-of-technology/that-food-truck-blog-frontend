import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const EditBlog = () => {
  const token = JSON.parse(localStorage.getItem('jwtToken'))
    ? JSON.parse(localStorage.getItem('jwtToken')).token
    : false;

  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });
  const history = useHistory();

  const { title, text } = formData;

  let { blogId } = useParams();

  if (!token) {
    history.push('/');
  }
  let encodedURI = `${baseUrl}/posts/` + blogId;

  const fetchEditBlog = () => {
    return axios.get(encodedURI).then(response => {
      setFormData({
        title: response.data.title,
        text: response.data.text,
      });
    });
  };

  useEffect(() => {
    fetchEditBlog();
  }, []);

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
      try {
        const updateBlog = {
          title,
          text,
        };

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        };
        const body = JSON.stringify(updateBlog);

        await axios.put(encodedURI, body, config);

        history.push('/BlogList');
      } catch (error) {
        return alert('error of something');
      }
    }
  };

  return (
    <div className='container col-9 col-md-7 mb-3 mt-3 shadow-lg  bg-white rounded'>
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
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                className='form-control'
                value={title}
                name='title'
                onChange={e => onChange(e)}
                required
                autoFocus
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='body'>Body</label>
              <textarea
                type='text'
                id='body'
                className='form-control'
                value={text}
                name='text'
                rows='9'
                onChange={e => onChange(e)}
                required
              ></textarea>
            </div>
            <div className='row'>
              <button className='ml-3 btn-lg  btn-primary ' type='submit'>
                Submit
              </button>

              <Link
                className='ml-3 btn-lg  btn-danger '
                type='submit'
                to='/DeleteBlog'
              >
                Delete
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
