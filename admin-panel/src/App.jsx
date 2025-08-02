import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Ourprojects from './pages/Ourprojects'
import ContactUs from './pages/Contactus'
import Enquiry from './pages/Enquiry'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ourprojects" element={<Ourprojects />} />
        <Route path="/contactus" element={< ContactUs/>} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </Router>
  )
}

export default App
