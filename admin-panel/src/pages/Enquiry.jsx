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
        const res = await axios.get('https://aradhya-infra-e57v.vercel.app/api/enquiry');
        setEntries(res.data);
      } catch (error) {
        console.error('Error fetching enquiries:', error);
      }
    };

    fetchEnquiries();
  }, []);

  const handleRemarkChange = async (id, remark) => {
    try {
      await axios.put(`https://aradhya-infra-e57v.vercel.app/api/enquiry/${id}/remark`, {
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


  return (
    <div className="flex">
      <Sidebar />
      <div className=" pt-23 md:pt-8 md:ml-64 p-8 w-full min-h-screen bg-gray-100">
        <h2 className="text-[21px] sm:text-3xl font-bold mb-4 md:mb-10 text-[#048886]">Enquiries</h2>

        <div className="mb-4 space-x-2">
          <button onClick={() => setFilter('all')} className="px-2 py-1 bg-gray-200 rounded">All</button>
          <button onClick={() => setFilter('read')} className="px-2 py-1 bg-green-200 rounded">Read</button>
          <button onClick={() => setFilter('unread')} className="px-2 py-1 bg-yellow-200 rounded">Unread</button>
        </div>


        <div className="space-y-6 text-[14px] md:text-[16px] ">
          {filteredEntries.map((entry) => (
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
              <div className="mb-1 md:mb-2">
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
                      className="mt-2 bg-[#048886] hover:bg-[#037076] text-white px-4 py-1 rounded"
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
                      className="ml-4 text-sm text-[#048886] hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>

              <div className="mb-1 md:mb-2 flex justify-between items-center">
                <span className="font-semibold text-gray-700">Status: </span>
                <button
                  onClick={async () => {
                    try {
                      const res = await axios.put(`https://aradhya-infra-e57v.vercel.app/api/enquiry/${entry._id}/read-toggle`, {
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
                  className={`px-3 py-1 rounded text-sm ${entry.isRead ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}
                >
                  {entry.isRead ? 'Mark as Read' : 'Mark as Unread'}
                </button>
              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
