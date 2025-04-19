var masjadImg =
  "https://en.numista.com/catalogue/photos/pakistan/432-original.jpg";

var chandImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3y2mJC4vXj_g4BJ-NqoldCqcGe5SOOHuXIA&s";

var para = document.querySelector("#para");
var img = document.querySelector("#img");
img.src = masjadImg;

function toss(coin) {
  var randomNum = Math.floor(Math.random() * 2);
  console.log(randomNum);

  if (
    (coin === "masjad" && randomNum === 0) ||
    (coin === "chand" && randomNum === 1)
  ) {
    para.innerHTML = "YOU WON";
  } else {
    para.innerHTML = "YOU LOSS";
  }

  if (randomNum === 0) {
    img.src = masjadImg;
  } else {
    img.src = chandImg;
  }
}
