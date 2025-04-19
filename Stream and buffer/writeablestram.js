const fs = require('fs');

const writable = fs.createWriteStream('output.txt');

writable.write('Hello, ');
writable.write('world!');
writable.end(); // Close the stream
