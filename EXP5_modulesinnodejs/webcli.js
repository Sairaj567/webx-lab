// http-client.js
const http = require('http');
http.get('http://localhost:3001', res => {
  res.on('data', chunk => console.log(chunk.toString()));
});
