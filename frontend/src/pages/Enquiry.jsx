import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    interestedArea: '',
    otherArea: '',
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

    const finalData = {
      ...formData,
      interestedArea:
        formData.interestedArea === 'Other' ? formData.otherArea : formData.interestedArea,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/enquiry', finalData);
      alert('Enquiry submitted successfully!');
      setFormData({
        name: '',
        address: '',
        phone: '',
        interestedArea: '',
        otherArea: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <>
    <div className='bg-black h-[100px] md:h-[130px] '></div>
    <Navbar />
    <div className="min-h-screen bg-[#F9F9F9]  py-16 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-[#F9F9F9]  p-10 rounded-[30px] shadow-2xl border border-gray-200">
        <h2 className="text-black text-[20px] md:text-[35px] font-[abril] font-bold mb-8 text-center tracking-wide">
          Get in Touch – Enquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Interested Area</label>
            <select
              name="interestedArea"
              value={formData.interestedArea}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">-- Select --</option>
              <option value="Commercial">Commercial</option>
              <option value="Residential">Residential</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {formData.interestedArea === 'Other' && (
            <div>
              <label className="block text-gray-700 mb-1">Specify Other Area</label>
              <input
                type="text"
                name="otherArea"
                placeholder="Please specify"
                value={formData.otherArea}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-[#F3ECDC]  px-6 py-3 rounded-xl hover:bg-teal-700 transition-all duration-300"
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
