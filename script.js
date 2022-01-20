let playerScore = 0;
let computerScore = 0;
const $buttons = document.querySelectorAll(".options button");
const $gameButton = document.getElementById("start-game"),
  $title = document.querySelector(".title");

$gameButton.addEventListener("click", e => {
  $gameButton.classList.add("hidden");
  $title.classList.remove("hidden");
  $title.classList.add("is-active");
});



$buttons.forEach(el => {
  el.addEventListener("click", function () {
    const playerSelection = this.textContent;

    const compOptions = ["Rock", "Paper", "Scissors"];
    const compInput = compOptions[Math.floor(Math.random() * 3)];

    playRound(playerSelection, compInput);
    scoreUpdate();
    if(checkWinner()) {
      playerScore = computerScore = 0;
      scoreUpdate();
    }
  });
})

/* Update Score */
function scoreUpdate(){
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

/* Check Winner */
function checkWinner() {
  if(playerScore === 5 || computerScore === 5){
    const winner =
     playerScore === 5
      ? "You won!, congratulations!"
      : "You lose, keep trying!";
    alert(winner);
    return true;
  } 
  return false;
}

  /* Game Functionality */
function playRound(playerSelection, compInput){
  playerSelection.toUpperCase();
  compInput.toUpperCase();

  const currentMatch = `${playerSelection} vs ${compInput}`;
  
  if(playerSelection === compInput){
    alert(`${currentMatch} is a Tie`);
    return;
  }

  if(playerScore === 5){
    alert("You won!")
  }


  if(
    (playerSelection === "Rock" && compInput === "Scissors") ||
    (playerSelection === "Scissors" && compInput === "Paper") || 
    (playerSelection === "Paper" && compInput === "Rock")
  ) {
    alert("You win! " + playerSelection + " beats " + compInput);
    playerScore++;
    // if(computerScore !== 0) computerScore--;
  } else {
    alert("You lose! " + compInput + " beats " + playerSelection);
    computerScore++;
    // if(playerScore !== 0) playerScore--;
  }
;
};


