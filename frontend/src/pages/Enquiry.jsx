import React, { useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    typeOfEnquiry: "",
    projectType: "",
    projectLocationInterested: "",
    budgetRange: "",
    planningToBuy: "",
    occupationType: "",
    annualIncome: "",
    specificRequirements: "",
    declaration: false,
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.declaration) {
      alert("Please confirm the declaration before submitting.");
      return;
    }

    try {
      const response = await axios.post(API_ENDPOINTS.ENQUIRY, formData);
      alert("Enquiry submitted successfully!");
      setFormData({
        name: "",
        address: "",
        phone: "",
        typeOfEnquiry: "",
        projectType: "",
        projectLocationInterested: "",
        budgetRange: "",
        planningToBuy: "",
        occupationType: "",
        annualIncome: "",
        specificRequirements: "",
        declaration: false,
        date: new Date().toISOString().split("T")[0],
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="bg-[#e7dfce] h-[65px] md:h-[75px]  "></div>
      <Navbar />
      <div className=" bg-[#F9F9F9] py-13 px-6 flex items-center justify-center">
        <div className=" lg:max-w-2xl bg-[#F9F9F9] p-5 md:p-10 rounded-[30px] shadow-2xl border border-gray-200">
          <h2 className="text-black text-[20px] md:text-[28px] lg:text-[35px] font-[abril] font-bold mb-5 md:mb-8 text-center tracking-wide">
            Get in Touch – Enquiry Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-[14px] md:text-[16px]"
          >
            {/* Date Field */}
            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>

            {/* Type of Enquiry */}
            <div>
              <label className="block text-gray-700 mb-1">
                Type of Enquiry
              </label>
              <select
                name="typeOfEnquiry"
                value={formData.typeOfEnquiry}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">-- Select Type of Enquiry --</option>
                <option value="Plot Purchase">Plot Purchase</option>
                <option value="Site Visit">Site Visit</option>
                <option value="Investment Info">Investment Info</option>
                <option value="Project Details">Project Details</option>
              </select>
            </div>

            {/* Residential/Commercial Investment */}
            <div>
              <label className="block text-gray-700 mb-1">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">-- Select Project Type --</option>
                <option value="Residential">Residential</option>
                <option value="Commercial Investment">
                  Commercial Investment
                </option>
              </select>
            </div>

            {/* Project/Location Interested In */}
            <div>
              <label className="block text-gray-700 mb-1">
                Project/Location Interested In
              </label>
              <input
                type="text"
                name="projectLocationInterested"
                placeholder="Enter project/location details"
                value={formData.projectLocationInterested}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-gray-700 mb-1">Budget Range</label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">-- Select Budget Range --</option>
                <option value="15 - 30 lakh">15 - 30 lakh</option>
                <option value="30 - 50 lakh">30 - 50 lakh</option>
                <option value="50 lakhs and above">50 lakhs and above</option>
              </select>
            </div>

            {/* When Are You Planning to Buy */}
            <div>
              <label className="block text-gray-700 mb-1">
                When Are You Planning to Buy?
              </label>
              <select
                name="planningToBuy"
                value={formData.planningToBuy}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">-- Select Timeline --</option>
                <option value="Immediately (Within 1 Month)">
                  Immediately (Within 1 Month)
                </option>
                <option value="Soon (1-3 Months)">Soon (1-3 Months)</option>
                <option value="In 3-6 Months">In 3-6 Months</option>
                <option value="After 6 Months">After 6 Months</option>
                <option value="Just Exploring">Just Exploring</option>
              </select>
            </div>

            {/* Occupation/Job Type */}
            <div>
              <label className="block text-gray-700 mb-1">
                Occupation/Job Type
              </label>
              <select
                name="occupationType"
                value={formData.occupationType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">-- Select Occupation --</option>
                <option value="Government Employee">Government Employee</option>
                <option value="Self-Employed/Business">
                  Self-Employed/Business
                </option>
                <option value="Salaried (Private)">Salaried (Private)</option>
                <option value="Retired">Retired</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Annual Income */}
            <div>
              <label className="block text-gray-700 mb-1">Annual Income</label>
              <select
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">-- Select Annual Income --</option>
                <option value="6 - 10 Lakhs">6 - 10 Lakhs</option>
                <option value="10 - 20 Lakhs">10 - 20 Lakhs</option>
                <option value="20 Lakhs & above">20 Lakhs & above</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            {/* Specific Requirements/Questions */}
            <div>
              <label className="block text-gray-700 mb-1">
                Any Specific Requirements / Questions?
              </label>
              <textarea
                name="specificRequirements"
                placeholder="Please share any specific requirements or questions you have..."
                value={formData.specificRequirements}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-xl p-1 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Declaration */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    declaration: e.target.checked,
                  }))
                }
                className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                required
              />
              <label className="block text-gray-700 text-sm">
                <strong>Declaration:</strong> I confirm that the above
                information is accurate to the best of my knowledge.
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-[#F3ECDC] text-[13px] md:text-[16px] px-3 md:px-6 py-2 md:py-3 rounded-xl hover:bg-teal-700 transition-all duration-300"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Enquiry;
