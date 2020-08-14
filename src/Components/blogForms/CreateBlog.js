import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const CreateBlog = () => {
  const token = JSON.parse(localStorage.getItem('jwtToken'))
    ? JSON.parse(localStorage.getItem('jwtToken')).token
    : false;

  //console.log(user);
  const [formData, setFormData] = useState({
    text: '',
    title: '',
  });
  // formData is an empty the state. setFormData is called and what changes the state to be - the NEW state.
  // text and title are the required fields from the backendroute. 

  //Get User token from Local Storage and set it to token
  const token = JSON.parse(localStorage.getItem('jwtToken')) ? JSON.parse(localStorage.getItem('jwtToken')).token : false
  //log Create Blog then log the token to the console 
  console.log("Create Blog")
  console.log(token);

  const history = useHistory();
  //If no token is found redirect user to Home Page
  if (!token) {
    history.push('/');
  }



  // destructering formdata to keep clean and short code 
  const { title, text } = formData;

  const history = useHistory();
  // const history = useHistory(); is for redirect to whatever page you would like

  if (!token) {
    history.push('/');
  }

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });


  ///refers to the name attribute and value of the attribute being passed to it

  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);

    if (!token) {
      //if there is NOT(!) a user
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
            'x-auth-token': token
          },
        };
        const body = JSON.stringify(newBlog);
        const res = await axios.post(
          'http://localhost:5000/api/posts',
          body,
          config
        );
        console.log(res.data._id);
        let id = res.data._id;
        let url = "/BlogList/7/" + id
        history.push(url);
      } catch (err) {
        console.log(err);
      }
    }
  }
  //im axios and i make a post request to this localhost. body and config is the http request body.

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
                //for the onchange to work you must have the name and value properties
                name='title'
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
