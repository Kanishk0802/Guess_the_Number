"use strict";
let audio = new Audio("success.mp3");
let answer = Math.floor(Math.random() * 20) + 1;
//localStorage.setItem("highScore", 0);

console.log(answer);

//Score checker and result display code
let score = document.querySelector(".score").textContent;
let highScore = document.querySelector(".highScore").textContent;
//console.log(score);
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  if (guess == "") {
    document.querySelector(".message").textContent = "Enter a value";
  } else if (guess % 1 != 0) {
    document.querySelector(".message").textContent =
      "Please enter an integer between 1 and 20";
  } else if (guess < 1 || guess > 20) {
    document.querySelector(".message").textContent =
      "Enter a value between 1 and 20";
  }else if (score<2){
    document.querySelector(".message").textContent = "💥You have lost!";
    document.querySelector("body").style.backgroundColor =  "#ff3b3b";
    document.querySelector(".score").textContent = --score;
    document.querySelector(".check").setAttribute("disabled", "disabled");
  } 
  else if (guess < answer) {
    document.querySelector(".message").textContent = "Go Higher!";
    document.querySelector(".score").textContent = --score;
    //console.log(score);
  } else if (guess > answer) {
    document.querySelector(".message").textContent = "Go Lower!";
    document.querySelector(".score").textContent = --score;
    //console.log(score);
  } else {
    document.querySelector(".number").textContent = guess;
    document.querySelector(".message").textContent = "🎉 Congratulations!";
    document.querySelector("body").style.backgroundColor = "#8fbc8f ";
    audio.play();
    var confettiSettings = { target: "my-canvas" };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(function () {
      document.querySelector("#my-canvas").classList.add("hide-canvas");
    }, "5000");
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
      // localStorage.highScore = score;
      // document.querySelector(".highScore").textContent =
      // localStorage.getItem("highScore");
      // console.log(localStorage.getItem("highScore"));
    }
  }
});

// "Again" button functionality
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".highScore").textContent = highScore;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  score = 20;
  document.querySelector(".number").textContent = "?";
  answer = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".guess").value = null;
  document.querySelector(".check").removeAttribute("disabled");
  // document.querySelector("#my-canvas").classList.remove("hide-canvas");
});

// const date = new Date();
// let formatDate = new Intl.DateTimeFormat("en-us", {
//   day: "2-digit",
//   month: "short",
//   year: "numeric",
// }).format(date);

// console.log(formatDate);
