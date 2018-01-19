const fs = require('fs');

module.exports = (dirName, extName, callback) => {
  fs.readdir(dirName, (err, files) => {
    if (err) return callback(err);

    correctFiles = []
    for (var i = 0; i < files.length; i++) {
      if ((files[i]).endsWith("." + extName)) correctFiles.push(files[i]);
    }
    callback(null, correctFiles);
  });
}
