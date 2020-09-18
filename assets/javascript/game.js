console.log("hi");
let shootoneButton = document.querySelector("#teamone-shoot-button");
let shoottwoButton = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button");

shootoneButton.addEventListener("click", function () {
  console.log("Team One Shot");
  let newScoreOne = Number(teamonenumshots.innerHTML) + 1;
  teamonenumshots.innerHTML = newScoreOne;
  Goalsmade = Number(teamonenumgoals.innerHTML);
  let randomShot = Math.floor(Math.random() * 2);
  console.log(randomShot);
  teamonenumgoals.innerHTML = Goalsmade + randomShot;
});

shoottwoButton.addEventListener("click", function () {
  console.log("Team Two Shot");
  let newScoreTwo = Number(teamtwonumshots.innerHTML) + 1;
  teamtwonumshots.innerHTML = newScoreTwo;
  GoalsmadeTwo = Number(TeamTwoGoals.innerHTML);
  let randomShotTwo = Math.floor(Math.random() * 2);
  console.log(randomShotTwo);
  TeamTwoGoals.innerHTML = GoalsmadeTwo + randomShotTwo;
});

resetButton.addEventListener("click", function () {
  console.log("Reset Game");
  let RedTeam = Number(TeamOneWins.innerHTML);
  let BlueTeam = Number(TeamTwoWins.innerHTML);

  if (teamonenumgoals.innerHTML > TeamTwoGoals.innerHTML) {
    console.log("Team One Wins");
    TeamOneWins.innerHTML = RedTeam + 1;
  }

  if (TeamTwoGoals.innerHTML > teamonenumgoals.innerHTML) {
    console.log("Team Two Wins");
    TeamTwoWins.innerHTML = BlueTeam + 1;
  }

  teamonenumshots.innerHTML = 0;
  teamtwonumshots.innerHTML = 0;
  TeamTwoGoals.innerHTML = 0;
  teamonenumgoals.innerHTML = 0;
  let resetTotal = Number(numresets.innerHTML) + 1;
  numresets.innerHTML = resetTotal;
});
