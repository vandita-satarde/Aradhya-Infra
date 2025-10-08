// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const API_ENDPOINTS = {
  GALLERY: `${API_BASE_URL}/gallery`,
  PROJECTS: `${API_BASE_URL}/projects`,
  CONTACT: `${API_BASE_URL}/contact`,
  ENQUIRY: `${API_BASE_URL}/enquiry`,
  TESTIMONIALS: `${API_BASE_URL}/testimonials`,
};

export default API_BASE_URL;
