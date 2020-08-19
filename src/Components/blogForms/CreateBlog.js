import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

 //Get User token from Local Storage and set it to token
// json.parse turns the string into an object to return the token
const CreateBlog = () => {
  const token = JSON.parse(localStorage.getItem('jwtToken'))
    ? JSON.parse(localStorage.getItem('jwtToken')).token
    : false;

  const [formData, setFormData] = useState({
    text: '',
    title: '',
  });
  // formData is an empty the state. setFormData is called and what changes the state to be - the NEW state.
  // text and title are the required fields from the backendroute. 

 

  //log Create Blog then log the token to the console 
  console.log("Create Blog")
  console.log(token);

  // destructering formdata to keep clean and short code 
  const { title, text } = formData;

  const history = useHistory();
//react router hook that pulls data

  if (!token) {
    history.push('/');
  }
  //token used to pass

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    //const onChange changes the state 

  ///refers to the name attribute and value of the attribute being passed to it

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
        const res = await axios.post(
          'http://localhost:5000/api/posts',
          body,
          config
        );
        let id = res.data._id;
        let url = '/BlogList/7/' + id;
        history.push(url);
      } catch (err) {
        //need an error message here
        console.log(err);
      }
    }
  }
  //im axios and i make a post request to this localhost. body and config is the http request body.

  return (
    <div className='container col-9 col-md-7 mb-3 mt-3 shadow-lg  bg-white rounded'>
      <div className='card row justify-content-center'>
        <div className='card-header'>
          <div className='h3 card-title'>Create Blog Form</div>
          <div className='h6 card-subtitle mb-2 text-muted'>
            Create your next blog. Make it Great!
          </div>
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

export default CreateBlog;
