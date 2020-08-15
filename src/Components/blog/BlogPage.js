import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import falafelWrap from '../../pictures/FalafelWrap.jpg';
import chxTacos from '../../pictures/grilledChxTacos.jpg';
import kaleSalad from '../../pictures//kaleSalad.jpg';
import lambGyro from '../../pictures/Lamb-Gyro.jpg';
import burger from '../../pictures/classicburger.jpg';
import friedChicken from '../../pictures/friedChxSand.jpg';
import healthyBowl from '../../pictures/healthyBowl.jpg';
import smoothie from '../../pictures/smoothie.jpg';

let images = [
  falafelWrap,
  chxTacos,
  kaleSalad,
  lambGyro,
  burger,
  friedChicken,
  healthyBowl,
  smoothie,
  falafelWrap,
  chxTacos,
  kaleSalad,
  lambGyro,
  burger,
  friedChicken,
  healthyBowl,
  smoothie,
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
    // console.log(encodedURI);
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
    <div className='container mb-3 shadow card mt-3 mb-3'>
      <div className='row justify-content-center'>
        <div className='card border-0 text-center col-10  p-3'>
          <img
            src={images[index]}
            alt='menue item'
            style={{ height: 500 }}
          ></img>
          <h5 className='card-title m-3'>{title}</h5>
          <p className='card-text'>{date}</p>
          <p className='card-text'>{text}</p>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;
