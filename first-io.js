var fs = require('fs');
var filePath = process.argv[2];

// console.log(filePath);

var buffer = fs.readFileSync(filePath);
// console.log(buffer.toString());
var arr = buffer.toString().split("\n");

console.log(arr.length - 1);
