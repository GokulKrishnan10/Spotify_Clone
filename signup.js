function onClick() {
  window.location = "spotify";
}
function onSubmit() {
  window.location = "submitted";
  console.log("CLICKED SUBMIT");

  console.log("SUBMITTED");

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

  // if (localStorage.getItem("mail") !== null) {
  //   window.alert("Mail already taken");
  // }
  console.log(mail1, password, birthday, gender);
}
