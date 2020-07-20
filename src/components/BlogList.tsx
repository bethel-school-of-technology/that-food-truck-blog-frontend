import React, { Component } from 'react'

interface Blogs {
    title: string;
    catagory: string;
    about: string;
    blogId: string;
}

const Blogs: Blogs[] = [
    {
        title: "Summer Menu",
        catagory: "menu",
        about: "come join us for some summer fun with our all new sumer Menu",
        blogId: "/Blog List/1"
    },{
        title: "Summer Menu",
        catagory: "menu",
        about: "come join us for some summer fun with our all new sumer Menu",
        blogId: "/Blog List/2"
    },{
        title: "Summer Menu",
        catagory: "menu",
        about: "come join us for some summer fun with our all new sumer Menu",
        blogId: "/Blog List/3"
    },{
        title: "Summer Menu",
        catagory: "menu",
        about: "come join us for some summer fun with our all new sumer Menu",
        blogId: "/Blog List/4"
    },{
        title: "Summer Menu",
        catagory: "menu",
        about: "come join us for some summer fun with our all new sumer Menu",
        blogId: "/Blog List/5"
    }
]

export class BlogList extends Component {
    render() {
        return (
            <div className="container">
                <div className="card text-center mt-3" >
                    <div className="card-blogId">
                        <h5 className="card-title">Blog List</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Come and get to know us with some of our recent blogs</h6>
                        <p className="card-text">
                            Meet the team or find our sesonal Menu!
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">

                        {Blogs.map((blog, index) => {
                            return (
                                
                                <li className="list-group-item" key={index}>
                                    <div className="card" >
                                        <div className="card-blogId">
                                            <h5 className="card-title">{blog.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{blog.catagory}</h6>
                                            <p className="card-text">{blog.about}</p>
                                        </div>
                                    </div>
                                    <a href={blog.blogId} className="card-link stretched-link"></a>
                                </li>
                                
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BlogList
