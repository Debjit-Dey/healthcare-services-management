import React from 'react';

const ServiceList = ({ services, onEdit, onDelete }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Available Services
      </h2>

      <ul className="space-y-4">
        {services.map((service, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="mb-3 sm:mb-0">
              <strong className="text-lg text-blue-600">{service.name}</strong>
              <p className="text-sm text-gray-600">{service.description}</p>
              <p className="font-bold text-green-600">₹{service.price}</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => onEdit(index)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
