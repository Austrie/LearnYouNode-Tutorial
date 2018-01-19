// Formate of dates should be in YYYY-MM-DD hh-mm, followed by \n
const net = require('net');
const port = process.argv[2];

var server = net.createServer((socket) => {
  var dateObject = new Date();
  var date = "";
  date += dateObject.getFullYear() + "-";

  if (dateObject.getMonth() < 10) {
    date += "0" + (dateObject.getMonth() + 1) + "-";
  } else {
    date += (dateObject.getMonth() + 1) + "-";
  }

  if (dateObject.getDate() < 10) {
    date += "0" + (dateObject.getDate()) + " ";
  } else {
    date += (dateObject.getDate()) + " ";
  }

  if (dateObject.getHours() < 10) {
    date += "0" + (dateObject.getHours()) + ":";
  } else {
    date += (dateObject.getHours()) + ":";
  }

  date += dateObject.getMinutes();
  date += "\n"
  console.log(date);

  socket.end(date);
});
server.listen(Number(port));
