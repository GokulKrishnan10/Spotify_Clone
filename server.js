const express = require("express");
const app = express();
require("./connect");
const User = require("./user");
const bodyParser = require("body-parser");
const image = require("./image_upload/image");
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const salt = 10;
const bcrypt = require("bcrypt");
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
app.use(express.json());

app.get("/profile", (req, res) => {
  res.sendFile(__dirname + "/profile.html");
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
app.get("/", (req, res) => {
  res.send("Hello There");
});

app.get("/images/:id", (req, res) => {
  image.findById(req.params.id, (error, img) => {
    if (error) res.status(500).send(error);
    res.contentType(img.contentType);
    console.log(img.data);
    res.send(img.data);
  });
});

app.get("/getimages", (req, res) => {
  image.find({}, function (error, results) {
    if (error) res.status(500).send(error);
    res.send(results);
  });
});

app.post("/submitted", (req, res) => {
  var forms = req.body;
  const password = forms.password;
  bcrypt
    .hash(password, salt)
    .then((hashedpassword) => hashedpassword)
    .then((data) => {
      console.log(data);
      const newUser = new User({
        email: forms.mail,
        password: data,
        dob: forms?.birthday,
        gender: forms?.gender,
      });
      newUser.save(function (error) {
        if (error === null) {
          res.send("<h1>Successfully Created</h1>");
        } else {
          if (Object.keys(forms).length === 2) {
            res.status(404).send("404 Error");
          } else res.send("<h1>User Exists</h1>");
        }
      });
    });
});

app.post("/loggedin", (req, res) => {
  var forms = req.body;
  const newUser = {
    email: forms.mail,
  };
  console.log("Forms is ", forms);
  User.find(newUser)
    .then((data) => {
      console.log(data);
      if (data.length === 0) res.send("<h1>User Does not exist</h1>");
      else {
        bcrypt
          .compare(forms.password, data[0].password)
          .then((isMatch) => {
            console.log("Match ", isMatch);
            if (isMatch) {
              res.send("Successfully Logged in");
            } else {
              res.send("<h1>User Does not exist</h1>");
            }
          })
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => {
      res.send("User doesn't exist");
    });
});
