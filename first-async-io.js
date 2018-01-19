var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
  if (err) throw err;

  var arr = data.toString().split("\n");
  console.log(arr.length - 1);
});
