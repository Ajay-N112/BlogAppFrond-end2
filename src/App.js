
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './Register';
import Navbar from './NavBar';
import Login from './Login';
import Home from './Home';
import axios from 'axios';
import Create from './Create';
import Post from './Post';
import EditPost from './EditPost';

export const userContext = createContext(); 

function App() {
const [user,setUser]=useState({})

  axios.defaults.withCredentials = true;

  useEffect(()=>{
    axios.get('http://localhost:3001')
      .then(user=>{
        setUser(user.data)
      })
      .catch(err=>console.log(err));
  }, []);

  return (
    <Router> 
      
        <userContext.Provider value={user}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create' element={<Create></Create>}></Route>
            <Route path='/Post/:id' element={<Post></Post>}></Route>
            <Route path='/editpost/:id' element={<EditPost></EditPost>}></Route>


          </Routes>
        </userContext.Provider>
  
    </Router>
  );
}

export default App;

