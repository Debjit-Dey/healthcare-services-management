import React, { useState } from 'react';
import ServiceList from './ServiceList';
import AddServiceForm from './AddServiceForm';
import EditServiceForm from './EditServiceForm';

const App = () => {
  const [services, setServices] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const editService = (index) => {
    setCurrentService({ ...services[index], index });
    setIsEditing(true);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map((service, index) =>
      index === currentService.index ? updatedService : service
    );
    setServices(updatedServices);
    setIsEditing(false);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Healthcare Services
        </h1>
        {isEditing ? (
          <EditServiceForm
            currentService={currentService}
            updateService={updateService}
            cancelEdit={() => setIsEditing(false)}
          />
        ) : (
          <AddServiceForm addService={addService} />
        )}
        <ServiceList services={services} onEdit={editService} onDelete={deleteService} />
      </div>
    </div>
  );
};

export default App;
