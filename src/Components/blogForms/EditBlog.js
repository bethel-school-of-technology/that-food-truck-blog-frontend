import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const EditBlog = props => {
  //validate user
  //check localstoreage for jwt token
  //get JWT token

  //input for each field.
  //title
  //text

  //send data to backend

  //after submission send admin user to the blog/:id

  return (
    <div className='container col-9 col-md-7 mb-3'>
      <div class='card row justify-content-center'>
        <div class='card-header'>
          <div className='h3 card-title'>Edit Blog </div>
          <dive class='h6 card-subtitle mb-2 text-muted'>
            Lets fix this Blog!
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
              <label for='title'>Title</label>
              <input
                type='text'
                id='title'
                className='form-control'
                value='This is where the old title goes'
                // onChange={e => onChange(e)}
                disabled
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
                value='This is where the old body will go'
                disabled
                rows="9"
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

EditBlog.propTypes = {};

export default EditBlog;
