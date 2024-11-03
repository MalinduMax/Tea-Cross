import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Logo from '../assets/logo.png'
import '../pages/signup.css'

function SignUp() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        <img src={Logo} className="logo1" alt="logo" />
      </div>
      <div className="card">
        <h1>Sign Up</h1>
          <div>
            <p className='p1'>Enter your email</p>
            <input className="input" name="Email." />
          </div>
          <div>
            <p className='p1'>Enter your mobile number</p>
            <input className="input" name="Mobile No." />
          </div>
          <div>
            <p className='p1'>Enter your password</p>
            <input className="input" name="Password" />
          </div>
        <div className='div'>
        <button className="button" onClick={handleClick}>
          Sign Up
        </button>
        </div>
      </div>
    </>
  )
}

export default SignUp;
