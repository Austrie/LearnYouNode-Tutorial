const http = require('http');
const port = process.argv[2];
const url = require('url');

server = http.createServer((req, res) => {
  json = {};
  if (req.method == "GET"
    && req.url.startsWith('/api/parsetime')) {
    time = new Date(url.parse(req.url, true).query.iso);

    json = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  } else if (req.method == "GET"
    && req.url.startsWith('/api/unixtime')) {
    iso_info = url.parse(req.url, true).query.iso;
    time_date_obj = new Date(iso_info);
    json = {
      unixtime: time_date_obj.getTime()
    }
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));

});
server.listen(port);
