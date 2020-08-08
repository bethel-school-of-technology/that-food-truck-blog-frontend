import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import falafelWrap from '../../pictures/FalafelWrap.jpg';
import chxTacos from '../../pictures/grilledChxTacos.jpg';
import kaleSalad from '../../pictures//kaleSalad.jpg'
import lambGyro from '../../pictures/Lamb-Gyro.jpg';
import burger from '../../pictures/classicburger.jpg';
import friedChicken from '../../pictures/friedChxSand.jpg';
import healthyBowl from '../../pictures/healthyBowl.jpg';
import smoothie from '../../pictures/smoothie.jpg';

import "./BlogPage.css"

let images = [
  falafelWrap, chxTacos, kaleSalad, lambGyro, burger, friedChicken, healthyBowl, smoothie,
  falafelWrap, chxTacos, kaleSalad, lambGyro, burger, friedChicken, healthyBowl, smoothie,
];

const BlogPage = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    date: '',
    text: '',
  });

  const { title, date, text } = blogData;
  let { blogId, index } = useParams();
  // console.log(blogId)
  // console.log(useParams())

  const fetchBlogList = () => {
    var encodedURI = 'http://localhost:5000/api/posts/' + blogId;
    console.log(encodedURI);
    return axios.get(encodedURI).then(response => {
      // console.log(response.data)
      setBlogData({
        title: response.data.title,
        date: response.data.date,
        text: response.data.text,
      });
      // console.log(blogData)
    });
  };
  useEffect(() => {
    fetchBlogList();
  }, []);

  return (
    <div className='container mb-3 '>

      <div className="row justify-content-center">
        <div class="card  bg-dark text-center text-white col-10 ">
          <img class="card-img" src={images[index]} alt="Card image" style={{ height: 500 }}></img>
          <div class="card-img-overlay blogShadow" >
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{date}</p>
            <p class="card-text">{text}</p>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-6">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z" />
          </svg>
        Pre blog <Link to="/" className=' stretched-link'></Link>
        </div>

        <div className="float-right col-6">Next blog <Link to="/" className=' stretched-link'></Link>
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z" />
          </svg>
        </div>
      </div> */}
    </div>



  );
};

export default BlogPage;
