function onClick() {
  window.location = "register";
}
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

                // Log the user's ID token and basic profile information
                console.log("ID Token: " + id_token);
                console.log("Name: " + profile.getName());
                console.log("Email: " + profile.getEmail());
                console.log("Access Token : " + profile.getId());
                onLogIn({
                  mail: profile.getEmail(),
                  password: profile.getId(),
                });
              });
          });
      });
    });
};
function onLogIn(data) {
  console.log("LoGGING IN");
  fetch("http://localhost:3000/loggedin", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        console.log("No---------------------------");
        window.alert("Sucessfully Logged In");
      }
      console.log("DATA PRESENT", res, res.status.ok);
    })
    .catch((err) => {
      console.log(err);
    });
}
