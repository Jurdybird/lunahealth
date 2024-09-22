import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Dashboard from './pages/Dashboard.js'; // Correct import for a React component
import PatientProfile from './pages/PatientProfile.js';
import Button from '@mui/material/Button'; // Correct import for a Material-UI component
import Layout from './components/Layout';
import SchedulePage from './pages/SchedulePage';
import ClientsPage from './pages/ClientsPage';
import TasksPage from './pages/TasksPage';
import ReportsPage from './pages/ReportsPage';


function App() {
  return (
    <Router>
      <Routes>
      {/* All routes are wrapped in the Layout */}
      <Route path="/" element={<Layout />}>
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/" element={<div>Welcome to Luna Health</div>} /> {/* Default route */}
      </Route>
    </Routes>
    </Router>
  );
}

export default App;