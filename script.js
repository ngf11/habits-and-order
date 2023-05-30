const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const mouseEfect = document.querySelectorAll("logo-move");

setInterval(() => {
  document.querySelectorAll("h1").onmouseover = (event) => {
    event.target.innertext = event.target.innertext
      .split("")
      .map((letter) => letters[Math.floor(Math.random() * 26)])
      .join("");
  };
}, 30);
