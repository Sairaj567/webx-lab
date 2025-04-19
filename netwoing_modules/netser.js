// tcp-server.js
const net = require('net');
net.createServer(socket => {
  socket.write('Hello from server');
}).listen(3000);
