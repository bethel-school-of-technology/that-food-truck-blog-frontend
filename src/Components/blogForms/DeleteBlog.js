import React, { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteBlog = () => {
    const token = JSON.parse(localStorage.getItem('jwtToken')) ?
        JSON.parse(localStorage.getItem('jwtToken')).token :
        false;

    const history = useHistory();

    if (!token) {
        history.push('/BlogList');
    }


    let { blogId } = useParams();
    console.log(blogId);
    const url = 'http://localhost:5000/api/posts/' + blogId;
    console.log(url)

    const onDelete = () => {
        if (!token) {
            alert('UNAUTHORIZED');

        } else {
            console.log(url);
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': token
                    },
                };
                return axios.delete(url, config).then(response => {
                    console.log(response.data);
                    history.push('/BlogList');

                })

            } catch (err) {
                console.log(err);
                history.push('/BlogList');
            }
        };
    }

    onDelete(url)

    return (
        <Fragment>

            <div> This should never show up. </div>

        </Fragment>
    )
};


export default DeleteBlog;