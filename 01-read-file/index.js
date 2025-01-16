const fs = require('fs');
const path = require('path');

const read = fs.createReadStream(path.join(__dirname, '/text.txt'), 'utf8');

read.on('data', (t) => {
  console.log(t);
});
// let data = '';
// stream.on('data', (chunk) => (data += chunk));
// stream.on('end', () => console.log(data));
// stream.on('error', (error) => console.log('Error', error.message));
