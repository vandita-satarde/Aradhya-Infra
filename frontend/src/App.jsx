import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurProjects from "./pages/OurProjects";
import ProjectDetails from "./pages/ProjectDetails";
import Enquiry from "./pages/Enquiry";
import OurStory from "./pages/OurStory";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import GalleryPage from "./pages/GalleryPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// trigger

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/gallery-page"
          element={
            <>
              <Navbar />
              <GalleryPage />
              <Footer />
            </>
          }
        />
        <Route path="/gallery-section" element={<GalleryPage />} />
      </Routes>

      {/* Fixed WhatsApp Button - appears on all pages */}
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
