const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  data: { type: Buffer },
  contentType: { type: String, required: true },
});
module.exports = mongoose.model("Image", ImageSchema);
