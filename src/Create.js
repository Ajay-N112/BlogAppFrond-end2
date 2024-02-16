import React, { useContext, useState } from 'react';
import './Create.css';
import axios from 'axios';
import { userContext } from './App';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const user = useContext(userContext);
  // const navigate = useNavigate();
  const navigate = useNavigate(); // Initialize navigate


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('title', title);
  //   formData.append('description', description);
  //   formData.append('email', user.email);
  //   formData.append('file', image);
  
  //   axios.post('http://localhost:3001/create', formData)
  //     .then(res => {
  //       console.log('Response from server:', res.data); // Log response from server
  //       if (res.data === 'success') {
  //         alert('Post created successfully');
  //         navigate('/');
  //       } else {
  //         alert('Post created successfully');
  //       }
  //     })
  //     .catch(err => {
  //       console.log('Error:', err); // Log any errors
  //       alert('An error occurred while creating the post');
  //     });
  // };
  



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('email', user.email);
    formData.append('file', image);
  
    axios.post('http://localhost:3001/create', formData)
      .then(res => {
        console.log('Response from server:', res.data); 
        if (res.data.trim().toLowerCase() === 'success') { 
          alert('Post created successfully');
          navigate('/');
         
        } else {
          alert('Post created successfully');
          navigate('/');
        }
      })
      .catch(err => {
        console.log('Error:', err);
        alert('An error occurred while creating the post');
      });
  };
  

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="create-post-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Choose Image:</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="submit-button">Post</button>
      </form>
    </div>
  );
}

export default Create;
