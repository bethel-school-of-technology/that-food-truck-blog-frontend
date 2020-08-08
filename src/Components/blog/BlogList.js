import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import falafelWrap from '../../pictures/FalafelWrap.jpg';
import chxTacos from '../../pictures/grilledChxTacos.jpg';
import kaleSalad from '../../pictures//kaleSalad.jpg'
import lambGyro from '../../pictures/Lamb-Gyro.jpg';
import burger from '../../pictures/classicburger.jpg';
import friedChicken from '../../pictures/friedChxSand.jpg';
import healthyBowl from '../../pictures/healthyBowl.jpg';
import smoothie from '../../pictures/smoothie.jpg';

let images = [
  falafelWrap, chxTacos, kaleSalad, lambGyro, burger, friedChicken, healthyBowl, smoothie,
  falafelWrap, chxTacos, kaleSalad, lambGyro, burger, friedChicken, healthyBowl, smoothie,
];

const BlogList = () => {
  const [blogListData, setBlogList] = useState({
    blogList: [],
  });

  const { blogList } = blogListData;

  const fetchBlogList = () => {
    var encodedURI = 'http://localhost:5000/api/posts';
    console.log(encodedURI);
    return axios.get(encodedURI).then(response => {
      console.log(response.data);
      setBlogList({
        blogList: response.data,
      });
    });
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  return (
    <div className='container mb-3'>
      <div className='card text-center mt-3'>
        <div className='card-header'>
          <h5 className='card-title'>Blogs</h5>
          <h6 className='card-subtitle mb-2 text-muted'>
            Come and get to know us with some of our recent blogs
          </h6>
          <p className='card-subtitle'>
            Meet the team or find our sesonal Menu!
          </p>
        </div>

        <div className='list-group list-group-flush'>
          {blogList.map((blog, index) => {
            let url = "/BlogList/" + index + "/" + blog._id.toString();
            let text = blog.text.substring(0, 400);
            return (
              <button className='list-group-item list-group-item-action' key={blog._id}>
                <div className="card-body ">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 mt-3">
                        <div className="card">
                          <div className="card-horizontal">

                            <div className="img-square-wrapper col-3">
                              <img src={images[index]} className="d-block w-100" style={{ height: 200 }} alt="this is photo one"></img>
                            </div>
                            <div className="card-body">

                              <h5 className='card-title'>{blog.title}</h5>
                              <h6 className='card-subtitle mb-2 text-muted'>

                              </h6>
                              <p className='card-text' >{text}...</p>

                            </div>
                          </div>
                          <Link
                            to={url}
                            className='card-link stretched-link'
                          ></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default BlogList;
