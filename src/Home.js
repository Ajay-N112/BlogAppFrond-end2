
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; 
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getposts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="blog-container">
      <h1>WELCOME TO THE BLOG</h1>
      <div className="posts">
        {posts.map(post => (
          <div key={post._id} className="post">
            <Link to={`/post/${post._id}`}>
              <img src={`http://localhost:3001/Images/${post.file}`} alt={post.title} />
              <div className="post-details">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

