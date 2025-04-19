var masjidImg =
  "https://en.numista.com/catalogue/photos/pakistan/432-original.jpg";

var chandImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3y2mJC4vXj_g4BJ-NqoldCqcGe5SOOHuXIA&s";

var para_1 = document.querySelector("#para_1");
var para_2 = document.querySelector("#para_2");
var img = document.querySelector("#img");
img.src = chandImg;



function toss(coin) {
  var randomNum = Math.floor(Math.random() * 2);
  console.log(randomNum);


  if (coin === "masjid" && randomNum === 0) {
    para_1.innerHTML = "YOU WON";
    para_2.innerHTML = "YOU LOSS";
    
  }else if (coin === "chand" && randomNum === 1) {
    para_1.innerHTML = "YOU LOSS";
    para_2.innerHTML = "YOU WON";
    
  }else if (randomNum != 0 ) {
    para_1.innerHTML = "YOU LOSS";
    para_2.innerHTML = "YOU WON";
    
  }else if(randomNum != 1){
    para_1.innerHTML = "YOU WON";
    para_2.innerHTML = "YOU LOSS";

  } else {
    para_1.innerHTML = "";
    para_2.innerHTML = "";
  }


  if (randomNum === 0) {
    img.src = masjidImg;

  } else {
    img.src = chandImg;

  }

}
