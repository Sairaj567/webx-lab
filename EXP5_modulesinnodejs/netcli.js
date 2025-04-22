// tcp-client.js
const net = require('net');
const client = net.connect(3000, () => {
  client.on('data', data => console.log(data.toString()));
});
