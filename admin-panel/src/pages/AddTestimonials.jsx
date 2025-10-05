import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const AddTestimonials = () => {
  const [formData, setFormData] = useState({
    heading: "",
    paragraph: "",
    writtenBy: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("heading", formData.heading);
      formDataToSend.append("paragraph", formData.paragraph);
      formDataToSend.append("writtenBy", formData.writtenBy);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      const response = await axios.post(
        "http://localhost:5000/api/testimonials",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Testimonial added successfully!");

      // Reset form
      setFormData({
        heading: "",
        paragraph: "",
        writtenBy: "",
        image: null,
      });
      setImagePreview(null);

      // Reset file input
      const fileInput = document.getElementById("image");
      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error("Error adding testimonial:", error);
      alert("Error adding testimonial. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 p-6 pt-20 md:pt-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Add New Testimonial
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Main Heading */}
            <div>
              <label
                htmlFor="heading"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Main Heading *
              </label>
              <input
                type="text"
                id="heading"
                name="heading"
                value={formData.heading}
                onChange={handleInputChange}
                placeholder="Enter testimonial heading"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
            </div>

            {/* Paragraph */}
            <div>
              <label
                htmlFor="paragraph"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Testimonial Content *
              </label>
              <textarea
                id="paragraph"
                name="paragraph"
                value={formData.paragraph}
                onChange={handleInputChange}
                placeholder="Enter the testimonial content..."
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-vertical"
                required
              />
            </div>

            {/* Written By */}
            <div>
              <label
                htmlFor="writtenBy"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Written By *
              </label>
              <input
                type="text"
                id="writtenBy"
                name="writtenBy"
                value={formData.writtenBy}
                onChange={handleInputChange}
                placeholder="Enter author name (e.g., John Doe, CEO of ABC Company)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Testimonial Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              />
              <p className="text-sm text-gray-500 mt-1">
                Upload an image related to the testimonial (optional).
                Recommended size: 400x300px
              </p>
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image Preview
                </label>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-w-full h-48 object-cover rounded-lg mx-auto"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    heading: "",
                    paragraph: "",
                    writtenBy: "",
                    image: null,
                  });
                  setImagePreview(null);
                  const fileInput = document.getElementById("image");
                  if (fileInput) fileInput.value = "";
                }}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={isSubmitting}
              >
                Clear Form
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Adding..." : "Add Testimonial"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTestimonials;
