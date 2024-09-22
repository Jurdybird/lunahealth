import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';  // Import Grid from Material-UI
import FlipCard from '../components/FlipCard';  // Assuming FlipCard is in components
import CreateClient from '../components/CreateClient';  // Import your form component

function ClientsPage() {
  const [clients, setClients] = useState([]);

  // Fetch clients from the backend API
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/clients');
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  // Add a new client to the list (this will be passed to the CreateClient form)
  const handleAddClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  return (
    <div>
      <h1>Clients</h1>

      {/* CreateClient Form */}
      <CreateClient onAddClient={handleAddClient} />

      {/* Grid container for FlipCards */}
      <Grid container spacing={2} justifyContent="flex-start">
        {clients.length > 0 ? (
          clients.map((client) => (
            <Grid item key={client.id} xs={12} sm={6} md={4} lg={3}>
              <FlipCard client={client} />
            </Grid>
          ))
        ) : (
          <p>No clients available</p>
        )}
      </Grid>
    </div>
  );
}

export default ClientsPage;