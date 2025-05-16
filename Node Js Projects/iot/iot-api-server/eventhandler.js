const EventEmitter = require('events');
const logToFile = require('./logger');

class IoTEvent extends EventEmitter {}
const iotEvent = new IoTEvent();

iotEvent.on('sensorData', (data) => {
  console.log('Processing sensor data:', data);
  logToFile(`Sensor Data: ${JSON.stringify(data)}`);
});

module.exports = iotEvent;
