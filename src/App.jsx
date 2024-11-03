import React from 'react'
import { Route,Routes,useNavigate } from "react-router-dom"
import Login from '../src/pages/login'
import Home from '../src/pages/home'
import SignUp from '../src/pages/signup'
import '../src/App.css'


function App () {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
  ) 
}

export default App
