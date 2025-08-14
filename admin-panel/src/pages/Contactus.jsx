import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function Contact() {
  // Replace with real data later
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: ''
  });

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('https://aradhya-infra-e57v.vercel.app/api/contact');
        setContacts(res.data);
      } catch (err) {
        console.error('Error fetching contacts:', err);
      }
    };

    fetchContacts();
  }, []);


  // DELETE contact function
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact entry?')) return;
    try {
      await axios.delete(`https://aradhya-infra-e57v.vercel.app/api/contact/${id}`);
      setContacts((prev) => prev.filter((contact) => contact._id !== id));
    } catch (err) {
      console.error('Error deleting contact:', err);
    }
  };

  const handleEdit = (contact) => {
    setEditId(contact._id);
    setEditForm(contact);
  };

  const handleCancel = () => {
    setEditId(null);
    setEditForm({
      firstName: '',
      lastName: '',
      email: '',
      topic: '',
      message: ''
    });
  };

  const handleSave = async (id) => {
    try {
      const res = await axios.put(`https://aradhya-infra-e57v.vercel.app/api/contact/${id}`, editForm);
      setContacts((prev) =>
        prev.map((contact) => (contact._id === id ? res.data : contact))
      );
      setEditId(null);
    } catch (err) {
      console.error('Error updating contact:', err);
    }
  };


  return (
    <div className="flex">
      <Sidebar />
      <div className="pt-23 md:pt-8 md:ml-64 p-8 w-full min-h-screen bg-gray-100">
        <h2 className="text-[21px] sm:text-3xl font-bold mb-4 md:mb-10 text-[#048886]">Contact Submissions</h2>

        <div className="overflow-x-auto rounded-xl shadow-lg text-[12px] md:text-[16px] ">
          <table className="min-w-full shadow-md">
            <thead>
              <tr className="bg-[#048886] text-white text-left">
                <th className="p-2 md:py-3 md:px-4">First Name</th>
                <th className="p-2 md:py-3 md:px-4">Last Name</th>
                <th className="p-2 md:py-3 md:px-4">Email</th>
                <th className="p-2 md:py-3 md:px-4">Topic</th>
                <th className="p-2 md:py-3 md:px-4">Message</th>
                <th className="p-2 md:py-3 md:px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id} className=" border-b-1 border-gray-200 hover:bg-gray-100">
                  {editId === contact._id ? (
                    <>
                      <td className="p-2">
                        <input
                          value={editForm.firstName}
                          onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
                          className="border rounded p-1 w-full"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          value={editForm.lastName}
                          onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
                          className="border rounded p-1 w-full"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          value={editForm.email}
                          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                          className="border rounded p-1 w-full"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          value={editForm.topic}
                          onChange={(e) => setEditForm({ ...editForm, topic: e.target.value })}
                          className="border rounded p-1 w-full"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          value={editForm.message}
                          onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                          className="border rounded p-1 w-full"
                        />
                      </td>
                      <td className="p-2">
                        <button
                          onClick={() => handleSave(contact._id)}
                          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-2 md:py-3 md:px-4">{contact.firstName}</td>
                      <td className="p-2 md:py-3 md:px-4">{contact.lastName}</td>
                      <td className="p-2 md:py-3 md:px-4">{contact.email}</td>
                      <td className="p-2 md:py-3 md:px-4">{contact.topic}</td>
                      <td className="p-2 md:py-3 md:px-4">{contact.message}</td>
                      <td className="p-2">
                        <button
                          onClick={() => handleEdit(contact)}
                          className="text-blue-600 hover:text-blue-700 bg-blue-200 hover:bg-blue-100 px-1.5 md:px-2 py-1 rounded-md text-[9px] md:text-[13px] font-medium transition duration-200 mr-2 mb-1"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(contact._id)}
                          className="text-red-600 hover:text-red-700 bg-red-200 hover:bg-red-100 px-1.5 md:px-2 py-1 rounded-md text-[9px] md:text-[13px] font-medium transition duration-200"
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No contact entries yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contact;
