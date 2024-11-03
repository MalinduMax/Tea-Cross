import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.png'
import '../pages/login.css'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={Logo} className="logo1" alt="logo" />
        </a>
      </div>
      <div className="card">
        <h1>Login</h1>
        <text>Account Number</text><br />
        <input name="myInput" /><br /><br />
        <text>Password</text><br />
        <input name="myInput" /><br /><br />
        <button onClick={() => setCount((count) => count + 1)}>
          Login {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Login
