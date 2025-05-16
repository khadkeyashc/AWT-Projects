const WebSocket = require('ws');
const { EventEmitter } = require('events');

const wss = new WebSocket.Server({ port: 8080 });
const chatEmitter = new EventEmitter();
const clients = new Set();

wss.on('connection', function connection(ws) {
  clients.add(ws);

  ws.on('message', function incoming(message) {
    const msg = message.toString();
    // Broadcast to all clients
    chatEmitter.emit('message', msg);
  });

  ws.on('close', () => {
    clients.delete(ws);
  });
});

chatEmitter.on('message', (msg) => {
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(msg); // This sends message back
    }
  }
});

console.log('WebSocket server running on ws://localhost:8080');
