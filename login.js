function onClick() {
  window.location = "register";
}

function onLogIn(event) {
  console.log("LoGGING IN");
  //window.location = "loggedin";
  fetch("localhost:3000/loggedin", {
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

function onGoogleSignIn(googleUser) {
  console.log("BUTTON CLICKED");
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log("Full Name: " + profile.getName());
  console.log("Given Name: " + profile.getGivenName());
  console.log("Family Name: " + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}
