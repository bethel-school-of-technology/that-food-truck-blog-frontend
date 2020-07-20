import React, { Component } from 'react'

interface Blogs {
    title: string;
    catagory: string;
    about: string;
    body: string;
  }
  
  const Blogs: Blogs[] = [
      {
          title: "Summer Menu",
          catagory: "menu",
          about: "come join us for some summer fun with our all new sumer Menu",
          body: "this summer we will be serving item 1, item 2, item 3, item 4, and item 5"
      }
  ]

export class BlogList extends Component {
    render() {
        return (
            <div>
                {Blogs.map((blog, index) => {
                    return(
                        <div> {blog.title}</div>

                        
                    )
                 })}
               
            </div>
        )
    }
}

export default BlogList
