const element = document.querySelector(".collection");
console.log(element);
const play = document.createElement("div");
play.className = "play";
play.style.display = "none";
element.appendChild(play);
fetch("http://localhost:3000/getimages")
  .then((res) => res.json())
  .then((singers) => {
    singers.forEach((image) => {
      fetch(`http://localhost:3000/images/${image._id}`)
        .then((res) => res.blob())
        .then((imga) => {
          const imgurl = URL.createObjectURL(imga);
          const div = document.createElement("div");
          div.className = "song";
          const img = document.createElement("img");
          // console.log("Object is ", obj);
          img.src = imgurl;
          div.appendChild(img);
          const h5 = document.createElement("h5");
          h5.innerText =
            imga.name + "- All new branded songs from the playlists..";
          div.appendChild(h5);
          element.appendChild(div);
          element.appendChild(div);
          div.addEventListener("click", () => {
            window.location = "individual";
          });
          // div.addEventListener("mouseout", () => {
          //   play.style.display = "none";
          // });
          // div.addEventListener("mouseover", () => {
          //   play.style.display = "block";
          //   play.style.transform = "translate(-10px)";
          //   play.style.transition = "700ms";
          // });
        })
        .catch((error) => console.log(error));
    });
  })
  .catch((error) => console.log("No error", error));

function onClick() {
  window.location = "home.html";
}
function signUp() {
  console.log("CLICKED SIGN UP");
  window.location = "register";
}
function logIn() {
  window.location = "login";
}
