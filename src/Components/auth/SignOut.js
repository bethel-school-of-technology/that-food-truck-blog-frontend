import React from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const SignOut = () => {
  const token = JSON.parse(localStorage.getItem('jwtToken'))
    ? JSON.parse(localStorage.getItem('jwtToken')).token
    : false;

  const history = useHistory();

  if (token) {
    localStorage.setItem('jwtToken', null);
    history.push('/');
  } else {
    history.push('/Login');
  }

  return <div>If you are seeing this, something went wrong</div>;
};

export default SignOut;
