// src/pages/adminpages/Users.tsx
import React, { useState } from "react";

const Users = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Data:", formData);
    setSubmitted(true);
    // Clear form
    setFormData({
      name: "",
      email: "",
      address: "",
      contact: "",
    });
  };

  return (
    <div className="text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New User</h2>

      {submitted && (
        <div className="bg-green-100 text-green-800 p-2 rounded mb-4">
          User created successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Contact Number</label>
          <input
            type="tel"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default Users;
