import './App.css';
import React from "react";
import { Route,Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Layout from './Layout/Layout';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
