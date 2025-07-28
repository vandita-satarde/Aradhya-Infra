import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurProjects from './pages/OurProjects'
import ProjectDetails from './pages/ProjectDetails'
import OurStory from './pages/OurStory'
import OurServices from './pages/OurServices'
import ContactUs from './pages/ContactUs'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
