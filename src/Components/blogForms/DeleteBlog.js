import React, { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteBlog = () => {
  const token = JSON.parse(localStorage.getItem('jwtToken'))
    ? JSON.parse(localStorage.getItem('jwtToken')).token
    : false;

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const history = useHistory();
  // const history = useHistory(); is for redirect to whatever page you would like

  if (!token) {
    history.push('/BlogList');
  }
  // if(!token) { history.push(''); }

  let { blogId } = useParams();
  console.log(blogId);
  const url = `${baseUrl}/posts/` + blogId;

  const onDelete = () => {
    if (!token) {
      alert('UNAUTHORIZED');
    } else {
      console.log(url);
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        };
        // const res = await axios.delete(
        //     url,
        //     config
        // );
        return axios.delete(url, config).then(response => {
          console.log(response.data);
          history.push('/BlogList');
        });
      } catch (err) {
        console.log(err);
        history.push('/BlogList');
      }
    }
  };

  onDelete(url);

  return (
    <Fragment>
      <div> This should never show up. </div>
    </Fragment>
  );
};

export default DeleteBlog;
