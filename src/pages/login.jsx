import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Logo from '../assets/logo.png'
import '../pages/login.css'

function Login() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <div>
        <img src={Logo} className="logo1" alt="logo" />
      </div>
      <div className="card">
        <h1>Login</h1>
        <div>
        <p className='p'>Account Number</p>
        <input className="input" name="Account No." />
        </div>
        <div>
        <p className='p'>Password</p>
        <input className="input" name="Password" />
        </div>
        <div className='div'>
        <button className="button">
          Login
        </button>
        </div>
        <p>
          Create New Account <button className="button1" onClick={handleClick}> Click Here </button>
        </p>
      </div>
    </>
  )
}

export default Login
