import React, { Component } from 'react';

interface ContainerProps {
  blogId: number;
}

const BlogPage: React.FC = blogId => {
  return (
    <div>
      lets try this agian
      {blogId}
    </div>
  );
};

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
