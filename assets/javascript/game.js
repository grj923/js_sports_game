console.log("hi");
let shootoneButton = document.querySelector("#teamone-shoot-button");
let shoottwoButton = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button");

shootoneButton.addEventListener("click", function () {
  console.log("Team One Shot");
  let newScoreOne = Number(teamonenumshots.innerHTML) + 1;
  teamonenumshots.innerHTML = newScoreOne;
  if (Math.floor(Math.random() * 2) === 1) {
    teamonenumgoals.innerHTML + 1;
  }
});

shoottwoButton.addEventListener("click", function () {
  console.log("Team Two Shot");
  let newScoreTwo = Number(teamtwonumshots.innerHTML) + 1;
  teamtwonumshots.innerHTML = newScoreTwo;
});

resetButton.addEventListener("click", function () {
  console.log("Reset Game");
  teamonenumshots.innerHTML = 0;
  teamtwonumshots.innerHTML = 0;
  let resetTotal = Number(numresets.innerHTML) + 1;
  numresets.innerHTML = resetTotal;
});
