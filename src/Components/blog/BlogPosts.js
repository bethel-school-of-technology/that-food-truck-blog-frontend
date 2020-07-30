// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// //import PropTypes from 'prop-types';

// const BlogPosts = () => {
//   const [posts, setPosts] = useState([]);

//   // const { text, title } = posts;

//   useEffect(() => {
//     fetch('http://localhost:5000/api/posts')
//       .then(data => data.json())
//       .then(data => {
//         setPosts(data);
//         console.log(data);
//       });
//   }, []);

//   return (
//     <div className='container'>
//       <div className='card text-center mt-3'>
//         <div className='card-blogId'>
//           <h5 className='card-title'>Blogs</h5>
//           <h6 className='card-subtitle mb-2 text-muted'>
//             Come and get to know us with some of our recent blogs
//           </h6>
//           <p className='card-text'>Meet the team or find our sesonal Menu!</p>
//         </div>
//         <ul className='list-group list-group-flush'>
//           {posts.map((post, inx) => {
//             return (
//               <li key={inx}>
//                 ;
//                 <div className='card'>
//                   <div className='card-blogId'>
//                     <h5 className='card-title'>{post.title}</h5>
//                     <h6 className='card-subtitle mb-2 text-muted'>
//                       {post.catagory}
//                     </h6>
//                     <p className='card-text'>{post.text}</p>
//                   </div>
//                 </div>
//                 <Link to={'/:id'} className='card-link stretched-link' />
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BlogPosts;
