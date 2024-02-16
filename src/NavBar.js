import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import { userContext } from './App';
import axios from 'axios';



const Navbar = () => {
  const user = useContext(userContext)
  const navigate = useNavigate()
const handleLout =()=>{
axios.get('http://localhost:3001/logout')
.then(res=>{
  if(res.data === 'success')
  navigate('/')
  window.location.reload();
}).catch(err=>console.log(err))
}


  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__brand">BlogApp</Link>
      </div>
      <div className="navbar__center">
        <Link to="/" className="navbar__link">Home</Link>
{
  user.username?
  <Link to="/create" className="navbar__link">Create</Link>
:  <></>
}

      </div>
      {
        user.username  ? 
        <div>
<button onClick={handleLout} className="navbar__button">Logout</button>
        </div>
        :
        <div className="navbar__right">
        <Link to="/register" className="navbar__button">Register</Link>
        <Link to="/login" className="navbar__button">Login</Link>
      </div>
      }
    
    </nav>
  );
};

export default Navbar;
