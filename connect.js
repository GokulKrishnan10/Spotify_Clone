const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => {
  console.error.bind("No internet");
});
db.once("open", () => {
  console.log("MongoDB Connection succeeded");
});
