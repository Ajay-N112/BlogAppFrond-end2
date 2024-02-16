import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Post.css';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
import { userContext } from './App';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate(); 
  const user = useContext(userContext)

  useEffect(() => {
    axios.get(`http://localhost:3001/getPostbyid/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  const handleDelete = (postId) => {
    axios.delete(`http://localhost:3001/deletePost/${postId}`)
      .then(result => {
        navigate('/'); 
      })
      .catch(err => console.log(err));
  };

  if (!post) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="post-container">
      <div className="post-content">
        <div className="post-header">
          <h2>{post.title}</h2>
          <div className="action-buttons">
            {
              user.email ===post.email?
              <>
               <Link to={`/editpost/${post._id}`} className="edit-button"><FaEdit /></Link>
            <Link className="delete-button" onClick={() => handleDelete(post._id)}><FaTrash /></Link>
            </>
            :
            <></>
            }
           
          </div>
        </div>
        <img src={`http://localhost:3001/Images/${post.file}`} alt={post.title} />
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default Post;
