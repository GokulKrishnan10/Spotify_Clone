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
              });
          });
      });
    });
};
function onLogIn(event) {
  console.log("LoGGING IN");
  fetch("/loggedin", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.parse(data),
  })
    .then((res) => {
      console.log("DATA INSERTED", res);
    })
    .catch((err) => {
      console.log(err);
    });
}
