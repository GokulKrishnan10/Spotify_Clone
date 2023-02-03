window.onload = function () {
  document
    .getElementById("google-sign-in")
    .addEventListener("click", function () {
      gapi.load("auth2", function () {
        gapi.auth2
          .init({
            client_id:
              "889525092335-q8fnc297secat91ura28bl9e5d7q067o.apps.googleusercontent.com",
            scope: "https://www.googleapis.com/auth/plus.login",
            prompt: "Choose account",
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

                onSubmit({
                  mail: profile.getEmail(),
                  password: profile.getId(),
                });
              });
          });
      });
    });
};

function onClick() {
  window.location = "spotify";
}

function onSubmit(data) {
  console.log("Data is here", data);
  fetch("localhost:3000/submitted", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.status.ok) window.alert("User already Exists");
      console.log("Status", res.status);
    })
    .catch((err) => {
      window.alert("User already Exists");
      console.log(err);
    });
}
