import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; 
import axios from 'axios';

const Register = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { username, password, email })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          alert('Successfully registered'); 
        navigate('/login')
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="register-button">Register</button>
      </form>
      <div className="login-link-container">
        <span>Already have an account?</span>
        <Link to="/login" className="login-link">Login</Link>
      </div>
    </div>
  );
};

export default Register;
