// src/pages/SchedulePage.js
import React from 'react';
import MyDailyCalendar from '../components/MyDailyCalendar'; // Keep the Calendar as a component

const SchedulePage = () => {
  return (
    <div>
      <h1>Schedule</h1>
      <MyDailyCalendar /> {/* Use the calendar component here */}
    </div>
  );
};

export default SchedulePage;