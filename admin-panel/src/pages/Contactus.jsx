import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function Contact() {
  // Replace with real data later
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contact');
      setContacts(res.data);
    } catch (err) {
      console.error('Error fetching contacts:', err);
    }
  };

  fetchContacts();
}, []);


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
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b-1 border-gray-200 hover:bg-gray-100">
                  <td className="p-2 md:py-3 md:px-4">{contact.firstName}</td>
                  <td className="p-2 md:py-3 md:px-4">{contact.lastName}</td>
                  <td className="p-2 md:py-3 md:px-4">{contact.email}</td>
                  <td className="p-2 md:py-3 md:px-4">{contact.topic}</td>
                  <td className="p-2 md:py-3 md:px-4">{contact.message}</td>
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
