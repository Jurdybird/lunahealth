import React, { useState } from 'react';

const CreateClient = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [lastAppointment, setLastAppointment] = useState('');
  const [assignedTherapist, setAssignedTherapist] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newClient = { name, contact, lastAppointment, assignedTherapist };

    try {
      const response = await fetch('http://localhost:5001/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClient),
      });

      const data = await response.json();
      console.log('Client created:', data);

      setName('');
      setContact('');
      setLastAppointment('');
      setAssignedTherapist('');
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Contact:</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div>
        <label>Last Appointment:</label>
        <input
          type="date"
          value={lastAppointment}
          onChange={(e) => setLastAppointment(e.target.value)}
        />
      </div>
      <div>
        <label>Therapist:</label>
        <input
          type="text"
          value={assignedTherapist}
          onChange={(e) => setAssignedTherapist(e.target.value)}
        />
      </div>
      <button type="submit">Create Client</button>
    </form>
  );
};

export default CreateClient;