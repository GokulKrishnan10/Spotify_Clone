const element = document.querySelector(".collection");
console.log(element);
const play = document.createElement("div");
play.className = "play";
play.style.display = "none";
const singers = [
  { name: "Aurora", src: "arora.jpg" },
  { name: "Harry Styles", src: "harry.jfif" },
  { name: "Selena Gomez", src: "selena.jpg" },
  { name: "Shakira", src: "shakira.jfif" },
  { name: "Zayn Malik", src: "zayn.jpg" },
  { name: "Taylor Swift", src: "taylor.jpg" },
  { name: "Selena Gomez", src: "selena.jpg" },
  { name: "Selena Gomez", src: "selena.jpg" },
  { name: "Selena Gomez", src: "selena.jpg" },
  { name: "Selena Gomez", src: "selena.jpg" },
  { name: "Shakira", src: "shakira.jfif" },
  { name: "Shakira", src: "shakira.jfif" },
  { name: "Shakira", src: "shakira.jfif" },
  { name: "Shakira", src: "shakira.jfif" },
  { name: "K S Chithra", src: "chithra.jfif" },
  { name: "Sujatha Mohan", src: "sujatha.jfif" },
];
element.appendChild(play);
singers.forEach((obj) => {
  const div = document.createElement("div");
  div.className = "song";
  const img = document.createElement("img");
  img.src = obj.src;
  div.appendChild(img);
  const h5 = document.createElement("h5");
  h5.innerText = obj.name + "- All new branded songs from the playlists..";
  div.appendChild(h5);
  element.appendChild(div);
  element.appendChild(div);
  div.addEventListener("click", () => {
    window.location = "individual";
  });
  // div.addEventListener("mouseover", () => {
  //   play.style.display = "block";
  //   play.style.transform = "translate(-10px)";
  //   play.style.transition = "700ms";
  // });
  div.addEventListener("mouseout", () => {
    play.style.display = "none";
  });
});
function onClick() {
  // fetch("localhost:3000")
  //   .then((res) => {})
  //   .catch((error) => {});
  window.location = "home.html";
}
function signUp() {
  console.log("CLICKED SIGN UP");
  window.location = "register";
}
function logIn() {
  window.location = "login";
}
