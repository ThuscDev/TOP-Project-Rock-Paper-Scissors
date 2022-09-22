const rpsArray = ["rock", "paper", "scissors"]

//A Function that generates one of Rock, Paper or Scissors
function getComputerChoice() {
    const computerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)]
    return computerChoice;
    
}


//A function to play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a draw!");
      } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors")) {
        return ("You win! Rock beats scissors");
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats rock");
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock");
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beat paper");
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beat paper");
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You lose!Rock beats scissors");
      }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
/*
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
*/

function game() {
    function playRound(playerSelection, computerSelection) {
        return playRound;
    }
}
