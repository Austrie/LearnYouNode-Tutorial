const fs = require('fs');
const http = require('http');
const port = process.argv[2];
const filePath = process.argv[3];

var server = http.createServer((request, response) => {
  fs.createReadStream(filePath).pipe(response);
});
server.listen(port);
