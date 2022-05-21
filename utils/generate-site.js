const fs = require("fs");

const writeFile = (template) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", template, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created",
      });
    });
  });
};

module.exports = writeFile;
