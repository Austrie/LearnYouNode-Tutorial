const http = require('http');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

http.get(url1, (response) => {
  var message = "";
  response.setEncoding("utf8");
  response.on("data", (data) => {
    message += data
  });

  response.on("end", () => {
    // console.log(message.length);
    console.log(message);
    http.get(url2, (response) => {
      var message = "";
      response.setEncoding("utf8");
      response.on("data", (data) => {
        message += data
      });

      response.on("end", () => {
        // console.log(message.length);
        console.log(message);
        http.get(url3, (response) => {
          var message = "";
          response.setEncoding("utf8");
          response.on("data", (data) => {
            message += data
          });

          response.on("end", () => {
            // console.log(message.length);
            console.log(message);
          });
        });
      });
    });
  });
});
