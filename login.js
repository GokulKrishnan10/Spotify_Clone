function onClick() {
  window.location = "register";
}

function onLogIn(event) {
  console.log("LoGGING IN");
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
