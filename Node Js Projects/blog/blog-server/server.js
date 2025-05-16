const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = './pages';
  let contentType = 'text/html';

  if (req.url === '/') {
    filePath += '/index.html';
  } else if (req.url === '/about') {
    filePath += '/about.html';
  } else if (req.url === '/blog') {
    filePath += '/blog.html';
  } else if (req.url === '/contact') {
    filePath += '/contact.html';
  } else if (req.url === '/style.css') {
    filePath += '/style.css';
    contentType = 'text/css';
  } else {
    filePath = null;
  }

  if (filePath) {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1><a href="/">Go Home</a>');
  }
});

server.listen(PORT, () => {
  console.log(`🔥 Server running at http://localhost:${PORT}`);
});
