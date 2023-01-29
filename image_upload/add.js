const fs = require("fs");
const Image = require("./image");
const path = require("path");
const dir = path.join(__dirname, "../images");
console.log("DIRECTORY IS ", dir);
fs.readdir(dir, (error, files) => {
  if (error) {
    console.log("ERROR IS ", error);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
  files.forEach((file) => {
    fs.readFile("../images/" + file, (error, data) => {
      if (error) throw error;
      var image = new Image({
        name: file,
        data: new Buffer.from(data, "binary"),
        contentType: "image/jpeg",
      });
      image.save(function (error) {
        if (error == null) console.log("Image successfully inserted");
        else console.error.bind("Error inserting an image into MongoDB");
      });
    });
  });
});
