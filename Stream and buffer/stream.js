const fs = require('fs');
const stream = fs.createReadStream('file.txt');

stream.on('data', chunk => {
  console.log('Chunk:', chunk.toString());
});
