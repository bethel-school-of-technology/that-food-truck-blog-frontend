import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const BlogPage = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    date: '',
    text: '',
  });

  const { title, date, text } = blogData;
  let { blogId } = useParams();
  // console.log(blogId)
  // console.log(useParams())

  const fetchBlogList = () => {
    var encodedURI = 'http://localhost:5000/api/posts/' + blogId;
    console.log(encodedURI)
    return axios.get(encodedURI).then(response => {
      // console.log(response.data)
      setBlogData({
        title: response.data.title,
        date: response.data.date,
        text: response.data.text
      });
      // console.log(blogData)
    });
  };

  useEffect(() => { fetchBlogList() }, [])


  return (
    <div className="card text-center m-3">
      <div className="card-header">
        {title}
      </div>
      <div className="card-horizontal">
        <div className="card-body">
          <p className="card-text">{date}</p>
          <p className="card-text"> {text}</p>
        </div>

      </div>
    </div>
  );
};


export default BlogPage;


