const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
require("dotenv").config();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
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
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("FORM");
    var myobj = {
      mail: forms.mail,
      password: forms.password,
      birthday: forms.birthday,
    };
    dbo
      .collection("customers")
      .find({ mail: forms.mail })
      .toArray((error, result) => {
        if (result.length !== 0) {
          res.write(
            `<h1>MAIL ALREADY TAKEN <a href="register">REGISTER</a></h1>`
          );
          res.end();
          return;
        } else {
          dbo.collection("customers").insertOne(myobj, function (err, res1) {
            if (err) throw err;
            res.write(`<h1>Successfully Created Account</h1>
                       <h2>Welcome, ${forms.mail}</h2>`);
            res.end();
            db.close();
          });
        }
      });
  });
});

app.post("/loggedin", (req, res) => {
  var forms = req.body;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("FORM");
    dbo
      .collection("customers")
      .find({ mail: forms.mail, password: forms.password })
      .toArray((err, result) => {
        console.log(!result);
        if (result.length === 0) {
          res.send("REGISTER FIRST");
          return;
        }
        res.send(`Successfully LOGGED IN
        <br>
        <h1><a href="spotify">HOME PAGE</a></h1>`);
        console.log(result);
      });
  });
});
