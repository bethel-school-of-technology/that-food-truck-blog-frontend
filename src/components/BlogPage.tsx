import React, { Component } from 'react'

interface ContainerProps {
    blogId: number;
  }


const BlogPage: React.FC = (blogId) => {
    
    return (
        <div>
            lets try this agian
            {blogId}
        </div>
    )
}


export default BlogPage
