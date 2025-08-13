import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function Enquiry() {
  // Mock data (replace with real API data later)
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [remarkInput, setRemarkInput] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'read', 'unread'

  // Filtering before mapping
  const filteredEntries = entries.filter((entry) => {
    if (filter === 'read') return entry.isRead;
    if (filter === 'unread') return !entry.isRead;
    return true;
  });

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

  const handleRemarkChange = async (id, remark) => {
    try {
      await axios.put(`http://localhost:5000/api/enquiry/${id}/remark`, {
        adminRemark: remark
      });
      setEntries((prevEntries) =>
        prevEntries.map((entry) =>
          entry._id === id ? { ...entry, adminRemark: remark } : entry
        )
      );
    } catch (err) {
      console.error('Failed to update remark', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/enquiry/${id}`);
      setEntries((prevEntries) => prevEntries.filter((entry) => entry._id !== id));
    } catch (err) {
      console.error('Failed to delete enquiry', err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className=" pt-23 md:pt-8 md:ml-64 p-8 w-full min-h-screen bg-gray-100">
        <h2 className="text-[21px] md:text-3xl font-bold mb-4 md:mb-10 text-[#048886]">Enquiries</h2>

        <div className="mb-4 space-x-2 text-[10px] md:text-[16px] ">
          <button onClick={() => setFilter('all')} className="px-2 py-1 bg-gray-200 rounded cursor-pointer ">All</button>
          <button onClick={() => setFilter('read')} className="px-2 py-1 bg-green-200 rounded cursor-pointer">Connected</button>
          <button onClick={() => setFilter('unread')} className="px-2 py-1 bg-yellow-200 rounded cursor-pointer">Not Connected</button>
        </div>
      
        <div className="space-y-6 text-[12px] md:text-[16px] ">
          {filteredEntries.map((entry) => (
            <div
              key={entry._id}
              className="relative border-l-3 border-[#048886] px-3 md:px-6 py-2 md:py-3 rounded-md shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-0.5 md:mb-2">
                <span className="font-semibold text-gray-700">Name: </span>
                <span className="text-gray-900">{entry.name}</span>
              </div>
              <div className="mb-0.5 md:mb-2">
                <span className="font-semibold text-gray-700">Address: </span>
                <span className="text-gray-900">{entry.address}</span>
              </div>
              <div className="mb-0.5 md:mb-2">
                <span className="font-semibold text-gray-700">Phone: </span>
                <span className="text-gray-900">{entry.phone}</span>
              </div>
              <div className="mb-0.5 md:mb-2">
                <span className="font-semibold text-gray-700">Interested Area: </span>
                <span className="text-gray-900">{entry.interestedArea}</span>
              </div>
              <div className="mb-0.5 md:mb-2">
                <span className="font-semibold text-gray-700">Submitted On: </span>
                <span className="text-gray-900">
                  {new Date(entry.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    // hour: '2-digit',
                    // minute: '2-digit'
                  })}
                </span>
              </div>
              {entry.isRead && (
                <div className="mb-0.5 md:mb-2">
                  <label className="font-semibold text-gray-700">Admin Remark: </label>

                  {editingId === entry._id ? (
                    <>
                      <textarea
                        value={remarkInput}
                        onChange={(e) => setRemarkInput(e.target.value)}
                        className="w-full mt-1 p-2 border rounded"
                        rows={2}
                      />
                      <button
                        onClick={async () => {
                          await handleRemarkChange(entry._id, remarkInput);
                          setEditingId(null);
                        }}
                        className="md:mt-2 bg-[#048886] hover:bg-[#037076] text-white px-2 md:px-4 py-0.5 md:py-1 rounded"
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <div className="flex justify-between items-center">
                      <p className="text-gray-900">
                        {entry.adminRemark ? entry.adminRemark : <span className="italic text-gray-400">No remarks added</span>}
                      </p>
                      <button
                        onClick={() => {
                          setEditingId(entry._id);
                          setRemarkInput(entry.adminRemark || '');
                        }}
                        className="ml-4 md:text-sm text-[#048886] hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="mb-1 md:mb-2 flex gap-3 items-center">
                <span className="font-semibold text-gray-700">Status: </span>
                <button
                  onClick={async () => {
                    try {
                      const res = await axios.put(`http://localhost:5000/api/enquiry/${entry._id}/read-toggle`, {
                        isRead: !entry.isRead
                      });
                      setEntries((prev) =>
                        prev.map((e) =>
                          e._id === entry._id ? { ...e, isRead: res.data.isRead } : e
                        )
                      );
                    } catch (err) {
                      console.error("Failed to toggle read status", err);
                    }
                  }}
                  className={`px-1 md:px-3 py-1 rounded text-[11px] md:text-sm ${entry.isRead ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}
                >
                  {entry.isRead ? 'Connected' : 'Not Connected'}
                </button>
              </div>
                    
              <button
                onClick={() => handleDelete(entry._id)}
                className="cursor-pointer absolute left-50 md:left-280 top-3 md:top-5 text-red-600 hover:text-red-700 bg-red-200 hover:bg-red-100 px-1.5 md:px-2 md:py-1 rounded-md text-[9px] md:text-[12px] font-medium transition duration-200 "
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
