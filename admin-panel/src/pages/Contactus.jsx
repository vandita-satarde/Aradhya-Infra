import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function Contact() {
  // Replace with real data later
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [viewId, setViewId] = useState(null);
  const [editForm, setEditForm] = useState({
    fullName: "",
    dateOfBirth: "",
    address: "",
    status: "",
    mobileNumber: "",
    gender: "",
    pinCode: "",
    city: "",
    email: "",
    preferredCommunication: "",
  });

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
          "https://aradhya-infra-e57v.vercel.app/api/contact"
        );
        console.log("Fetched contacts:", res.data); // Debug log
        setContacts(res.data);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };

    fetchContacts();
  }, []);

  // DELETE contact function
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact entry?"))
      return;
    try {
      await axios.delete(
        `https://aradhya-infra-e57v.vercel.app/api/contact/${id}`
      );
      setContacts((prev) => prev.filter((contact) => contact._id !== id));
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  const handleEdit = (contact) => {
    setEditId(contact._id);
    setEditForm({
      fullName:
        contact.fullName ||
        `${contact.firstName || ""} ${contact.lastName || ""}`.trim() ||
        "",
      dateOfBirth: contact.dateOfBirth || "",
      address: contact.address || "",
      status: contact.status || "",
      mobileNumber:
        contact.mobileNumber || contact.number || contact.topic || "",
      gender: contact.gender || "",
      pinCode: contact.pinCode || "",
      city: contact.city || "",
      email: contact.email || "",
      preferredCommunication: contact.preferredCommunication || "",
    });
  };

  const handleCancel = () => {
    setEditId(null);
    setViewId(null);
    setEditForm({
      fullName: "",
      dateOfBirth: "",
      address: "",
      status: "",
      mobileNumber: "",
      gender: "",
      pinCode: "",
      city: "",
      email: "",
      preferredCommunication: "",
    });
  };

  const handleView = (contact) => {
    setViewId(contact._id);
    setEditId(null);
  };

  const handleSave = async (id) => {
    try {
      const res = await axios.put(
        `https://aradhya-infra-e57v.vercel.app/api/contact/${id}`,
        editForm
      );
      // The API now returns { message: "...", contact: {...} }
      const updatedContact = res.data.contact || res.data;
      setContacts((prev) =>
        prev.map((contact) => (contact._id === id ? updatedContact : contact))
      );
      setEditId(null);
    } catch (err) {
      console.error("Error updating contact:", err);
      alert("Error updating contact. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="pt-20 md:pt-8 md:ml-64 p-3 md:p-8 w-full md:w-[510px] lg:w-full ">
        <h2 className="text-[20px] sm:text-3xl font-bold mb-3 md:mb-6 lg:mb-10 text-[#048886]">
          Contact Submissions
        </h2>

        {/* Summary Table */}
        <div className="overflow-x-auto rounded-lg md:rounded-xl shadow-lg text-[10px] md:text-[14px] mb-6">
          <table className="min-w-full shadow-md">
            <thead>
              <tr className="bg-[#048886] text-white text-left">
                <th className="p-2 md:py-3 md:px-4">Full Name</th>
                <th className="p-2 md:py-3 md:px-4">Mobile</th>
                <th className="p-2 md:py-3 md:px-4">Email</th>
                <th className="p-2 md:py-3 md:px-4">City</th>
                <th className="p-2 md:py-3 md:px-4">Submitted</th>
                <th className="p-2 md:py-3 md:px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="border-b-1 border-gray-200 hover:bg-gray-100"
                >
                  <td className="p-2 md:py-3 md:px-4 font-medium">
                    {contact.fullName ||
                      `${contact.firstName || ""} ${
                        contact.lastName || ""
                      }`.trim() ||
                      "N/A"}
                  </td>
                  <td className="p-2 md:py-3 md:px-4">
                    {contact.mobileNumber ||
                      contact.number ||
                      contact.topic ||
                      "N/A"}
                  </td>
                  <td className="p-2 md:py-3 md:px-4">{contact.email}</td>
                  <td className="p-2 md:py-3 md:px-4">{contact.city}</td>
                  <td className="p-2 md:py-3 md:px-4">
                    {contact.createdAt
                      ? new Date(contact.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => handleView(contact)}
                      className="text-green-600 hover:text-green-700 bg-green-200 hover:bg-green-100 px-1.5 md:px-2 py-1 rounded-md text-[9px] md:text-[13px] font-medium transition duration-200 mr-1 mb-1"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(contact)}
                      className="text-blue-600 hover:text-blue-700 bg-blue-200 hover:bg-blue-100 px-1.5 md:px-2 py-1 rounded-md text-[9px] md:text-[13px] font-medium transition duration-200 mr-1 mb-1"
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
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No contact entries yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Detailed View Modal */}
        {viewId && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#048886]">
                    Contact Details
                  </h3>
                  <button
                    onClick={() => setViewId(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {(() => {
                  const contact = contacts.find((c) => c._id === viewId);
                  if (!contact) return null;

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-semibold text-gray-600">
                            Full Name
                          </label>
                          <p className="text-lg font-medium">
                            {contact.fullName ||
                              `${contact.firstName || ""} ${
                                contact.lastName || ""
                              }`.trim() ||
                              "N/A"}
                          </p>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-gray-600">
                            Date of Birth
                          </label>
                          <p className="text-lg">
                            {contact.dateOfBirth
                              ? new Date(
                                  contact.dateOfBirth
                                ).toLocaleDateString()
                              : "N/A"}
                          </p>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-gray-600">
                            Gender
                          </label>
                          <p className="text-lg">{contact.gender || "N/A"}</p>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-gray-600">
                            Marital Status
                          </label>
                          <p className="text-lg">{contact.status || "N/A"}</p>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-gray-600">
                            Mobile Number
                          </label>
                          <p className="text-lg font-medium">
                            {contact.mobileNumber ||
                              contact.number ||
                              contact.topic ||
                              "N/A"}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-semibold text-gray-600">
                            Email Address
                          </label>
                          <p className="text-lg">{contact.email || "N/A"}</p>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-gray-600">
                            City
                          </label>
                          <p className="text-lg">{contact.city || "N/A"}</p>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-gray-600">
                            Pin Code
                          </label>
                          <p className="text-lg">{contact.pinCode || "N/A"}</p>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-gray-600">
                            Preferred Communication
                          </label>
                          <p className="text-lg">
                            {contact.preferredCommunication || "N/A"}
                          </p>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-gray-600">
                            Submitted On
                          </label>
                          <p className="text-lg">
                            {contact.createdAt
                              ? new Date(contact.createdAt).toLocaleString()
                              : "N/A"}
                          </p>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className="text-sm font-semibold text-gray-600">
                          Address
                        </label>
                        <p className="text-lg p-3 bg-gray-50 rounded-lg">
                          {contact.address || "N/A"}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Edit Form Modal */}
        {editId && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#048886]">
                    Edit Contact
                  </h3>
                  <button
                    onClick={handleCancel}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Full Name
                    </label>
                    <input
                      value={editForm.fullName}
                      onChange={(e) =>
                        setEditForm({ ...editForm, fullName: e.target.value })
                      }
                      className="w-full border rounded-lg p-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={editForm.dateOfBirth?.split("T")[0] || ""}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          dateOfBirth: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg p-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Gender
                    </label>
                    <select
                      value={editForm.gender}
                      onChange={(e) =>
                        setEditForm({ ...editForm, gender: e.target.value })
                      }
                      className="w-full border rounded-lg p-3"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Marital Status
                    </label>
                    <select
                      value={editForm.status}
                      onChange={(e) =>
                        setEditForm({ ...editForm, status: e.target.value })
                      }
                      className="w-full border rounded-lg p-3"
                    >
                      <option value="">Select Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Mobile Number
                    </label>
                    <input
                      value={editForm.mobileNumber}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          mobileNumber: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg p-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) =>
                        setEditForm({ ...editForm, email: e.target.value })
                      }
                      className="w-full border rounded-lg p-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      City
                    </label>
                    <input
                      value={editForm.city}
                      onChange={(e) =>
                        setEditForm({ ...editForm, city: e.target.value })
                      }
                      className="w-full border rounded-lg p-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Pin Code
                    </label>
                    <input
                      value={editForm.pinCode}
                      onChange={(e) =>
                        setEditForm({ ...editForm, pinCode: e.target.value })
                      }
                      className="w-full border rounded-lg p-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Preferred Communication
                    </label>
                    <select
                      value={editForm.preferredCommunication}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          preferredCommunication: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg p-3"
                    >
                      <option value="">Select Communication</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Address
                    </label>
                    <textarea
                      value={editForm.address}
                      onChange={(e) =>
                        setEditForm({ ...editForm, address: e.target.value })
                      }
                      className="w-full border rounded-lg p-3 h-24 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSave(editId)}
                    className="px-6 py-2 bg-[#048886] hover:bg-[#036664] text-white rounded-lg transition duration-200"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
