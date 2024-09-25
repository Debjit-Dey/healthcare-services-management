import React, { useState, useEffect } from 'react';

const EditServiceForm = ({ currentService, updateService, cancelEdit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // Use useEffect to update the state when currentService changes
  useEffect(() => {
    if (currentService) {
      setName(currentService.name);
      setDescription(currentService.description);
      setPrice(currentService.price);
    }
  }, [currentService]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (name && description && price) {
      updateService({ name, description, price });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-md mx-auto p-8 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-lg border border-gray-200 mt-10"
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Edit Service
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-100 mb-2">
          Service Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300 outline-none"
          placeholder="Enter service name"
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
          className="block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300 outline-none"
          placeholder="Enter service description"
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
          className="block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300 outline-none"
          placeholder="Enter service price"
        />
      </div>

      <div className="flex flex-col space-y-4 mt-4">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
        >
          Update Service
        </button>
        <button
          type="button"
          onClick={cancelEdit}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 w-full"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditServiceForm;
