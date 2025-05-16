const fs = require('fs');
const path = require('path');

function logToFile(message) {
  const logPath = path.join(__dirname, 'logs', 'iot_logs.txt');
  const logMessage = `${new Date().toISOString()} - ${message}\n`;

  fs.appendFile(logPath, logMessage, (err) => {
    if (err) {
      console.error('Error writing log:', err);
    }
  });
}

module.exports = logToFile;
