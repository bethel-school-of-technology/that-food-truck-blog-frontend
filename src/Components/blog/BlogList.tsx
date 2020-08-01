import React, { Component } from 'react';
import axios from 'axios';


class BlogList extends Component {
  state = {
    blogList: []
  };

  fetchBlogList = () => {
    var encodedURI = 'http://localhost:5000/api/posts';
    console.log(encodedURI)
    return axios.get(encodedURI).then(response => {
      console.log(response.data)
      this.setState({
        blogList: response.data
      });
    });
  };

  componentDidMount() {
    console.log("componentDidMount")
    this.fetchBlogList();

  }



  render() {
    return (
      <div className='container mb-3'>
        <div className='card text-center mt-3'>
          <div className='card-header'>
            <h5 className='card-title'>Blogs</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              Come and get to know us with some of our recent blogs
            </h6>
            <p className='card-subtitle'>Meet the team or find our sesonal Menu!</p>
          </div>
          <div className="card-body">
            <ul className='list-group list-group-flush'>
              {Object.keys(this.state.blogList).map((blog, index) => {
                return (
                  <div>{blog}</div>
                  // <li className='list-group-item' key={blog.id}>
                  //   <div className='card'>
                  //     <div className='card-blogId'>
                  //       <h5 className='card-title'>{blog.title}</h5>
                  //       <h6 className='card-subtitle mb-2 text-muted'>
                  //         {blog.date}
                  //       </h6>
                  //       <p className='card-text'>{blog.text}</p>
                  //     </div>
                  //   </div>
                  //   <a
                  //     href={blog.id}
                  //     className='card-link stretched-link'
                  //   ></a>
                  // </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogList;
