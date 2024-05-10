import React, { Component } from 'react';

// Responsive Services Card Component
const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:bg-gray-200 transition duration-300">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ServiceCard
        title="CEA"
        description="College of Risen Legends!"
      />
      <ServiceCard
        title="CITC"
        description="College of Howling Lycans!"
      />
      <ServiceCard
        title="COT"
        description="College of Blazing Guardians!"
      />
      <ServiceCard
        title="CSTE"
        description="College of Raging Phoenix!"
      />
      <ServiceCard
        title="CSM"
        description="College of Majestic Wizards!"
      />
      <ServiceCard
        title="Senior High"
        description="The Spartans!"
      />
    </div>
  );
};

export class Admin extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-4">Admin</h2>
        <p className='mb-6'>These are the USTP - CDO Faculty Administration.</p>

        {/* Responsive Services Section */}
        <ServicesSection />
      </main>
    );
  }
}

export default Admin;
