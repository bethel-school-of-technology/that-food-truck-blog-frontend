import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    text: '',
    title: '',
  });
// formData is an empty the state. setFormData is called and what changes the state to be - the NEW state.
    // text and title are the required fields from the backendroute. 

    // ask Ethan
  const token = JSON.parse(localStorage.getItem('jwtToken')) ? JSON.parse(localStorage.getItem('jwtToken')).token : false
  console.log(token);

  // destructering formdata to keep clean and short code 
  const { title, text } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // onChange event changes the state. ... is a spread opperator that copies and pastes the state.
    // e is an event that is being triggured and and we are targeting the name and value to assign an event 
  ///refers to the name attribute and value of the attribute being passed to it

  const onSubmit = async e => {
    e.preventDefault();
    const newBlog = {
      title,
      text,
    };
        //e.preventDefault is a non cancelable event. when its clicked it is good to go. without this it would automatically submit.
        //prevents this from happening until requested to run


//the try has a const of config that holds header, token and content-type.
//then const body stringifying newblog. taking it from plain text and making it JSON to submit to the backend.
// const response. we have await axios -taking in the body and config. we are callin in the config an
//passing in the config and the body.

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          token: token
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
  //im axios and i make a post request to this localhost. body and config is the http request body.

  return (
    <div className='container col-9 col-md-7 mb-3'>
      <div class='card row justify-content-center'>
        <div class='card-header'>
          <div className='h3 card-title'>Create a New Blog Form</div>
          <div class='h6 card-subtitle mb-2 text-muted'>
            Create a blog here!
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


export default CreateBlog;
