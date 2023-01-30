window.onload = function () {
  document
    .getElementById("google-sign-in")
    .addEventListener("click", function () {
      gapi.load("auth2", function () {
        gapi.auth2
          .init({
            client_id:
              "889525092335-q8fnc297secat91ura28bl9e5d7q067o.apps.googleusercontent.com",
            scope: "email",
            plugin_name: "Spotify",
          })
          .then(function () {
            gapi.auth2
              .getAuthInstance()
              .signIn({
                prompt: "select_account",
              })
              .then(function (googleUser) {
                // Get user's ID token and basic profile information
                var id_token = googleUser.getAuthResponse().id_token;
                var profile = googleUser.getBasicProfile();
                console.log("profile=-------------", profile);
                // Log the user's ID token and basic profile information
                console.log("ID Token: " + id_token);
                console.log("Name: " + profile.getName());
                console.log("Email: " + profile.getEmail());
              });
          });
      });
    });
};

function onClick() {
  window.location = "spotify";
}

function onSubmit() {
  fetch("localhost:3000/submitted", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log("DATA INSERTED", res);
    })
    .catch((err) => {
      console.log(err);
    });

  var mail1 = document.getElementById("mail1").value;
  var mail2 = document.getElementById("mail2").value;
  var password = document.getElementById("password").value;
  var birthday = document.getElementById("birthday").value;
  var gender = document.getElementById("gender").value;

  if (mail1 !== mail2) {
    window.alert("Mail not matching");
    return;
  }

  if (!mail1 || !mail2 || !password || !gender || !birthday) {
    window.alert("Some fileds are Empty");
    return;
  }

  console.log(mail1, password, birthday, gender);
}
