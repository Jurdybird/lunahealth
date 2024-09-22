import React from 'react';
import Grid from '@mui/material/Grid';
import FlipCard from './FlipCard'; // Import the FlipCard component


const ClientsGrid = () => {
  return (
    <Grid container spacing={3}>
      {clients.map((client) => (
        <Grid item xs={12} sm={6} md={4} key={client.id}>
          {/* Pass the client object as a prop */}
          <FlipCard client={client} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ClientsGrid;