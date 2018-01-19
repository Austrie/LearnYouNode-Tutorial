const http = require('http');
const port = process.argv[2];
var map = require('through2-map');

var server = http.createServer(((request, response) => {
  // message = ""
  if (request.method == "POST") {
      request.pipe(map((chunk) => {
        return chunk.toString().toUpperCase()
      })).pipe(response);
    }

  // response.on("end", () => {
  //   console.log(message.length);
  //   console.log(message);
  // });
}));

server.listen(port);


// inStream.pipe(map((chunk) => {
//   return chunk.toString().split('').reverse().join('')
// })).pipe(outStream)
