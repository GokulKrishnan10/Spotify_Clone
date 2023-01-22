const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => {
  console.error.bind("NO Internet");
});
db.once("open", function () {
  console.log("Connection eshtablished");
});
require("./image");
require("./add");
