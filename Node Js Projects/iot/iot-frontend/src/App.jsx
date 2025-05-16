// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    deviceId: ''
  });

  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg('');

    try {
      const response = await axios.post('http://localhost:3000/api/sensor', formData);
      setResponseMsg(response.data.message);
      setFormData({ temperature: '', humidity: '', deviceId: '' });
    } catch (error) {
      setResponseMsg('Failed to send data');
    }
  };

  return (
    <div className="container">
      <h1>IoT Sensor Data Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Temperature (°C):</label>
        <input
          type="number"
          name="temperature"
          value={formData.temperature}
          onChange={handleChange}
          required
        />

        <label>Humidity (%):</label>
        <input
          type="number"
          name="humidity"
          value={formData.humidity}
          onChange={handleChange}
          required
        />

        <label>Device ID:</label>
        <input
          type="text"
          name="deviceId"
          value={formData.deviceId}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Data</button>
      </form>

      {responseMsg && <p className="response">{responseMsg}</p>}
    </div>
  );
}


export default App;
