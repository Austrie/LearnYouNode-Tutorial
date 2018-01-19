const http = require("http");
const url = process.argv[2];

http.get(url, (response) => {
  var message = "";
  response.setEncoding("utf8");
  response.on("data", (data) => {
    message += data
  });

  response.on("end", () => {
    console.log(message.length);
    console.log(message);
  });
});
