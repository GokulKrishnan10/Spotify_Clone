const mongoose = require("mongoose");
const fs = require("fs");
const ImageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = mongoose.model("Image", ImageSchema);
