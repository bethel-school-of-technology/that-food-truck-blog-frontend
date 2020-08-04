import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CreateBlog = props => {
  //validate user

  //check localstoreage for jwt token

  //get JWT token

  // input fields for title and text

  //refer to register page for submission to backend

  //after sumbission send admin user to /bloglist

  return (

    <div className='container col-9 col-md-5 mb-3'>
      <div class='card row justify-content-center'>
        <div class='card-header'>
          <div className='h3 card-title'>Create Blog Form</div>
          <dive class='h6 card-subtitle mb-2 text-muted'>
            Create your next blog. make it Great!
        </dive>
        </div>
        <div className='card-body'>
          <form
          //  onSubmit={e => onSubmit(e)}
          >
            <img
              className='mb-4'
              src='../assets/brand/bootstrap-solid.svg'
              alt=''
              width='72'
              height='72'
            />
            <div className='form-group'>
              <label for='inputEmail'>Title</label>
              <input
                type='text'
                id='inputEmail'
                className='form-control'
                placeholder='Title'
                // onChange={e => onChange(e)}
                required
                autoFocus
              />
            </div>

            <div className='form-group'>
              <label for='inputPassword'>Body</label>
              <textarea
                type='text'
                id='inputPassword'
                className='form-control'
                placeholder='Body'
                // onChange={e => onChange(e)}
                required
              />
            </div>
            <div className='row'>
              <input
                className='ml-3 btn-lg  btn-primary '
                type='submit'
                value='Sign in'
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
