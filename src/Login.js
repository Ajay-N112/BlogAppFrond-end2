


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; 
import axios from 'axios';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { password, email })
      .then(res => {
        console.log('Response data:', res.data); 
        if (res.data.trim().toLowerCase() === 'success') { 
          alert('Login successful'); 
          navigate('/');
          window.location.reload();
        } else {
          alert('Login failed');
        }
      })
      .catch(err => {
        console.error('Error during login:', err);
        alert('An error occurred during login. Please try again.'); 
      });
  };
  
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="register-link-container">
        <span>Don't have an account?</span>
        <Link to="/register" className="register-link">Register</Link>
      </div>
    </div>
  );
};

export default Login;
