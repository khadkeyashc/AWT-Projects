// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const EventEmitter = require('events');

const app = express();
const PORT = 3000;

// Use middleware
app.use(cors()); // <-- This allows all origins including localhost:5173
app.use(express.json());

const iotEvent = new EventEmitter();

// Create logs directory if not exists
const logsDir = './logs';
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Event listener
iotEvent.on('sensorData', (data) => {
  const logMessage = `${new Date().toISOString()} - Temperature: ${data.temperature}, Humidity: ${data.humidity}, Device ID: ${data.deviceId}\n`;
  fs.appendFile('./logs/iot_logs.txt', logMessage, (err) => {
    if (err) {
      console.error('Failed to write log:', err);
    } else {
      console.log('Sensor data logged');
    }
  });
});

// API route
app.post('/api/sensor', (req, res) => {
  const sensorData = req.body;
  console.log('Received IoT data:', sensorData);

  iotEvent.emit('sensorData', sensorData);

  res.status(200).json({ message: 'Sensor data received and processed.' });
});

app.listen(PORT, () => {
  console.log(`IoT API Server running on http://localhost:${PORT}`);
});
