import React, { Component } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


class BlogPage extends Component {
  state = {
    blogList: []
  };

  fetchBlogList() {
    var encodedURI = 'http://localhost:5000/api/posts/5f147b920a17ff173018aae3';
    console.log(encodedURI)
    return axios.get(encodedURI).then(response => {
      console.log(response.data)
      this.setState({
        blogList: response.data
      });
    });
  };

  componentDidMount = () => {
    console.log("componentDidMount")
    this.fetchBlogList();

  }
  render = () => {
    const { blogList = [] } = this.state;
    return (
      <div className="card text-center m-3">
        <div className="card-header">
          {blogList.title}
        </div>
        <div className="card-horizontal">
          <div className="card-body">
            <p className="card-text">{blogList.date}</p>
            <p className="card-text"> {blogList.text}</p>
          </div>

        </div>
      </div>
    );
  };
};


export default BlogPage;


