// http-server.js
const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from HTTP server');
}).listen(3001);
