import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Cards {
  blogList: Array<Blog>
}

interface Blog {
  title: string;
  text: string;
  _id: string;
  date: string;
  name: string;
  user: string;

}


class BlogList extends Component {
  state: Cards = {
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
    const { blogList = [] } = this.state;


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
              {blogList.map((blog, index) => {
                let url = "/BlogList/" + blog._id.toString();
                return (
                  <li className='list-group-item' key={blog._id}>
                    <div className='card'>
                      <div className='card-blogId'>
                        <h5 className='card-title'>{blog.title}</h5>
                        <h6 className='card-subtitle mb-2 text-muted'>

                        </h6>
                        <p className='card-text'>{blog.text}</p>
                      </div>
                    </div>
                    <Link
                      to={url}
                      className='card-link stretched-link'
                    ></Link>
                  </li>
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
