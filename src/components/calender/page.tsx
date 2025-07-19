import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="p-4 rounded-xl shadow-lg w-fit mx-auto">
      <Calendar onChange={setValue} value={value} />
    </div>
  );
}
export default function CalendarPage() {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Calendar Example</h2>
      <MyCalendar />
    </div>
  );
}