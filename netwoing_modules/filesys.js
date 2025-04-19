const fs = require('fs');

// Write to a file
fs.writeFileSync('demo.txt', 'Hello File System\n\n');

// Read the file
const data = fs.readFileSync('demo.txt', 'utf8');
console.log('File Content:\n' + data);

// Append to the file
fs.appendFileSync('demo.txt', '\nAppended line');

// Read the file
const data1 = fs.readFileSync('demo.txt', 'utf8');
console.log('File Content:\n' + data1);

// Delete the file
fs.unlinkSync('demo.txt');
