import React, { Component } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


export function BlogPage() {
  let state = {
    blogList: []
  };

  function fetchBlogList() {
    let { id } = useParams();
    var encodedURI = 'http://localhost:5000/api/posts';
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

    return (
      <div>
        lets try this agian
        {id}
      </div>
    );
  };
}


// class BlogPage extends Component {
//   state = {
//     blogList: []
//   };


//   fetchBlogList = () => {

//     var encodedURI = 'http://localhost:5000/api/posts';
//     console.log(encodedURI)
//     return axios.get(encodedURI).then(response => {
//       console.log(response.data)
//       this.setState({
//         blogList: response.data
//       });
//     });
//   };

//   componentDidMount() {
//     console.log("componentDidMount")
//     this.fetchBlogList();

//   }
//   render() {
//     let { id } = useParams();
//     return (
//       <div>
//         lets try this agian
//         {id}
//       </div>
//     );
//   };
// };

export default BlogPage;

// import React from 'react'
// import PropTypes from 'prop-types'

// const BlogPage = props => {
//     return (
//         <div>
//             lets try this agian
//         </div>
//     )
// }

// BlogPage.propTypes = {

// }

// export default BlogPage
