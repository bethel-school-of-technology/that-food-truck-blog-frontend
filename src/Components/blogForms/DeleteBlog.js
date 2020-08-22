import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;


const DeleteBlog = () => {
    const token = JSON.parse(localStorage.getItem('jwtToken'))
        ? JSON.parse(localStorage.getItem('jwtToken')).token
        : false;

    const history = useHistory();

    if (!token) {
        history.push('/');
    }

    let { blogId } = useParams;

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
        },
    };

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
        const res = await axios.delete(
            `${baseUrl}/posts`,
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

    return (
        <div>If you are seeing this something went wrong</div>
    );
};


export default DeleteBlog;
