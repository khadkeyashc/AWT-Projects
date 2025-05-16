const express = require('express');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

const app = express();
const PORT = 3000;
const logger = new EventEmitter();

app.use(express.static(__dirname));
app.use(express.json());

logger.on('logEvent', (msg) => {
  const logMessage = `[${new Date().toISOString()}] ${msg}\n`;
  fs.appendFile('log.txt', logMessage, (err) => {
    if (err) throw err;
  });
});

app.post('/log', (req, res) => {
  const { message } = req.body;
  logger.emit('logEvent', message);
  res.send('Event logged successfully!');
});

app.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});