import React from 'react'
import { Route,Routes,useNavigate } from "react-router-dom"
import Login from '../pages/login'
import Logo from '../assets/logo.png'
import '../pages/home.css'


function Home () {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div>
          <img src={Logo} className="logo" alt="logo" />
        </div>
        <button className='button' onClick={handleClick}>
          Start
        </button>
      </div>
    </> 
  ) 
}

export default Home