import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Addprojects from "./pages/Addprojects";
import AddGalleryItem from "./pages/AddGalleryItem";
import AddTestimonials from "./pages/AddTestimonials";
import ContactUs from "./pages/Contactus";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addprojects" element={<Addprojects />} />
        <Route path="/addgallery" element={<AddGalleryItem />} />
        <Route path="/addtestimonials" element={<AddTestimonials />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </Router>
  );
}

export default App;
