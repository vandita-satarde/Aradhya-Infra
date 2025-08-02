import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function Enquiry() {
  // Mock data (replace with real API data later)
  const [entries, setEntries] = useState([]);

  useEffect(() => {
  const fetchEnquiries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/enquiry');
      setEntries(res.data);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  };

  fetchEnquiries();
}, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className=" pt-23 md:pt-8 md:ml-64 p-8 w-full min-h-screen bg-gray-100">
        <h2 className="text-[21px] sm:text-3xl font-bold mb-4 md:mb-10 text-[#048886]">Enquiry</h2>

        <div className="space-y-6 text-[14px] md:text-[16px] ">
          {entries.map((entry) => (
            <div
              key={entry._id}
              className=" border-l-3 border-[#048886] p-3 md:p-6 rounded-md shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-1 md:mb-2">
                <span className="font-semibold text-gray-700">Name: </span>
                <span className="text-gray-900">{entry.name}</span>
              </div>
              <div className="mb-1 md:mb-2">
                <span className="font-semibold text-gray-700">Address: </span>
                <span className="text-gray-900">{entry.address}</span>
              </div>
              <div className="mb-1 md:mb-2">
                <span className="font-semibold text-gray-700">Phone: </span>
                <span className="text-gray-900">{entry.phone}</span>
              </div>
              <div className="mb-1 md:mb-2">
                <span className="font-semibold text-gray-700">Interested Area: </span>
                <span className="text-gray-900">{entry.interestedArea}</span>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
