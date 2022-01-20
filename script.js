
function computerPlay(){
  let randomNum = Math.floor(Math.random() * 3);
  switch(randomNum) {
    case 0:
      return "ROCK";
      case 1:
      return "PAPER"
      case 2:
        return "SCISSORS"
      }
    }
    
    // console.log(computerPlay());
    
    
function playRound(playerSelection, computerSelection){
  // let playerScore = 0;
  let roundWinner = "";

  playerSelection.toUpperCase();

  if(playerSelection === computerSelection){
    roundWinner = "Tie"
  }
  else if(
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") || 
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    // playerScore = 1;
    roundWinner = "You win! " + playerSelection + " beats " + computerSelection;
  }
  else {
    roundWinner = "You lose! " + computerSelection + " beats " + playerSelection;
  }

  return roundWinner;
};

const str = "scissors";
const playerSelection = str.toUpperCase();
console.log(playRound(playerSelection, computerPlay()));


function game(){
  
}