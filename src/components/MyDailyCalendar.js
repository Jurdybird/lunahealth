import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import calendar CSS

// Set up the localizer using Moment.js
const localizer = momentLocalizer(moment);

const MyDailyCalendar = () => {
  // Example appointments array
  const [events, setEvents] = useState([
    {
      title: 'Client 1 Appointment',
      start: new Date(2024, 8, 15, 9, 0), // September is month 8 in Date object (0-indexed)
      end: new Date(2024, 8, 15, 10, 0),  // From 9:00 AM to 10:00 AM
    },
    {
      title: 'Client 2 Appointment',
      start: new Date(2024, 8, 15, 11, 0),
      end: new Date(2024, 8, 15, 12, 0),
    },
    {
      title: 'Client 3 Appointment',
      start: new Date(2024, 8, 15, 14, 0),
      end: new Date(2024, 8, 15, 15, 0),
    },
  ]);

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events} // Appointments are passed here
        startAccessor="start"
        endAccessor="end"
        defaultView="day"  // Set the default view to "day"
        views={['day']}    // Restrict the views to only the "day" view
        step={30}          // 30 minute increments
        timeslots={1}      // How many time slots per "step" (e.g., 1 per 30 minutes)
        style={{ height: '100vh' }}
        min={new Date(2024, 1, 1, 7, 0)}  // Minimum time of the day
        max={new Date(2024, 1, 1, 21, 0)}  // Maximum time of the day
      />
    </div>
  );
};

export default MyDailyCalendar;