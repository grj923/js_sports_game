console.log("hi");
let shootoneButton = document.querySelector("#teamone-shoot-button");
let shoottwoButton = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button");

shootoneButton.addEventListener("click", function () {
  console.log("Team One Shot");
  let newScoreOne = Number(teamonenumshots.innerHTML) + 1;
  teamonenumshots.innerHTML = newScoreOne;
});

shoottwoButton.addEventListener("click", function () {
  console.log("Team Two Shot");
  let newScoreTwo = Number(teamtwonumshots.innerHTML) + 1;
  teamtwonumshots.innerHTML = newScoreTwo;
});

resetButton.addEventListener("click", function () {
  console.log("Reset Game");
});
