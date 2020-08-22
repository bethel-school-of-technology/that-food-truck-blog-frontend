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
    const url = `${baseUrl}/posts/` + blogId;


    if (!token) {
        alert('UNAUTHORIZED');
    } else {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
            };

            return axios.delete(url, config).then(response => {
                history.push('/BlogList');
            });
        } catch (err) {
            history.push('/BlogList');
        }
    }



    return (
        <Fragment>
            <div> This should never show up. </div>
        </Fragment>
    );
};

export default DeleteBlog;
