import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurProjects from './pages/OurProjects'
import ProjectDetails from './pages/ProjectDetails'
import Enquiry from './pages/Enquiry'
import OurStory from './pages/OurStory'
import OurServices from './pages/OurServices'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
