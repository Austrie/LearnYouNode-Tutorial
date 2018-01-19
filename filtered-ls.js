const fs = require('fs');
const fileType = process.argv[3];
const folderPath = process.argv[2];

fs.readdir(folderPath, (err, files) => {
  if (err) throw err;
  for (var i = 0; i < files.length; i++) {
    if ((files[i]).endsWith("." + fileType)) console.log(files[i]);
  }
});
