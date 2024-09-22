import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';  // Import Box for additional styling
import './FlipCard.css';  // Import your flip animation CSS
import { useEffect } from 'react';


const FlipCard = ({ client, onDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);  // Toggle the flip state
    setIsInteracting(true);  // Set interacting state to true
  };

  const handleDelete = () => {
    const clientName = client.name || 'this client';  // Fallback if name is undefined
    if (window.confirm(`Are you sure you want to delete ${clientName}?`)) {
      onDelete(client.id);
    }
  };

// Auto-revert after 5 seconds if no interaction
useEffect(() => {
  if (isFlipped && !isInteracting) {
    const timer = setTimeout(() => {
      setIsFlipped(false);  // Auto-revert flip
    }, 5000);  // 5-second delay

    return () => clearTimeout(timer);  // Cleanup the timer on component unmount
  }
}, [isFlipped, isInteracting]);

useEffect(() => {
  if (isInteracting) {
    // Reset interaction state after a few seconds (so the card can auto-flip back)
    const interactionTimer = setTimeout(() => setIsInteracting(false), 2000);
    return () => clearTimeout(interactionTimer);  // Clean up timer
  }
}, [isInteracting]);

  if (!client) {
    return <div>No client data available</div>;
  }

  return (
    <Box sx={{ padding: 2, height: '100%' }}>  {/* Adds padding around each card */}
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-card-inner">
          {/* Front of the card */}
          <Paper
            elevation={10}
            className="flip-card-front"
            sx={{
              padding: 2,
              height: '150px',  // Fixed height for the card
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'center' }}
            >
              {client.name || 'Unknown Client'}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '0.9rem', textAlign: 'center' }}
            >
              Contact: {client.contact || 'No Contact Info'}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '0.9rem', textAlign: 'center' }}
            >
              Therapist: {client.a || 'No Contact Info'}
            </Typography>
          </Paper>

          {/* Back of the card */}
          <Paper
            elevation={10}
            className="flip-card-back"
            sx={{
              padding: 2,
              height: '150px',  // Set the same height for back of the card
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'center' }}>
              Client Details
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem', textAlign: 'center' }}>
              Last Appointment: {client.lastAppointment || 'No Appointment Info'}
            </Typography>
            <Box sx={{ marginTop: 1, display: 'flex', gap: 1 }}>
              <Button variant="outlined" size="small">Edit</Button>
              <Button 
                variant="contained"
                color="error"
                size="small"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Box>
          </Paper>
        </div>
      </div>
    </Box>
  );
};

export default FlipCard;