const express = require("express");
const app = express();
const PORT = 3000;
const connection = require("./connect");
const User = require("./user");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello There");
});

app.get("/spotify", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/SignUp.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/individual", (req, res) => {
  res.sendFile(__dirname + "/individual.html");
});

app.get("/:id", (req, res) => {
  console.log(req.params);
  if (req.params.id === "submitted" || req.params.id === "loggedin") {
    return;
  }
  res.sendFile(__dirname + "/" + req.params.id);
});

app.post("/submitted", (req, res) => {
  var forms = req.body;
  console.log(forms);
  // MongoClient.connect(url, function (err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("FORM");
  const newUser = new User({
    email: forms.mail,
    password: forms.password,
    dob: forms.birthday,
    gender: forms.gender,
  });
  newUser.save(function (error) {
    console.log("error occured ", error);
    if (error === null) res.send("<h1>Successfully Created</h1>");
    else res.send("<h1>User Exists</h1>");
  });
});

app.post("/loggedin", (req, res) => {
  var forms = req.body;
  const newUser = {
    email: forms.mail,
    password: forms.password,
  };
  User.find(newUser)
    .then((data) => {
      console.log(data);
      if (data.length === 0) res.send("<h1>User Does not exist</h1>");
      else res.send("<h1>Successfully Logged in</h1>");
    })
    .catch((error) => {
      res.send("User doesn't exist");
    });
});
