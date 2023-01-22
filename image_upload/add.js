const fs = require("fs");
const Image = require("./image");
const path = require("path");
const dir = path.join(__dirname, "../public");
console.log("DIRECTORY IS ", dir);
fs.readdir(dir, (error, files) => {
  if (error) {
    console.log("ERROR IS ", error);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});
fs.readFile("tay.jfif", (error, data) => {
  if (error) throw error;
  var image = new Image({
    name: "Taylor",
    data: data,
    contentType: "image/jpeg",
  });
  Image.find({ name: "Taylor" }, (error, people) => {
    if (error) {
      image.save((error) => {
        if (error) console.log(error);
        else {
          console.log("Image Saved successfully");
        }
      });
    } else {
      console.log("Image already found cannot insert again");
    }
  });
});
