import React, { useState } from 'react';

const AddServiceForm = ({ addService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      addService({ name, description, price });
      setName('');
      setDescription('');
      setPrice('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-8 bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg rounded-lg border border-gray-200 mt-10"
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Add New Service
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-100 mb-2">
          Service Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
          placeholder="Enter name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-100 mb-2">
          Description:
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
          placeholder="Enter description"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-100 mb-2">
          Price:
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
          placeholder="Enter price"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-4 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
      >
        Add Service
      </button>
    </form>
  );
};

export default AddServiceForm;
