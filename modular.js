var mymodule = require('./modular-module.js')
const fileType = process.argv[3];
const folderPath = process.argv[2];

mymodule(folderPath, fileType, (err, list) => {
  if (err) throw err;
  list.forEach((file) => {
    console.log(file);
  });
});
