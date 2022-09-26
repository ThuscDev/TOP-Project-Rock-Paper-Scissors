const rpsArray = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;


//A Function that generates one of Rock, Paper or Scissors
function getComputerChoice() {
    const computerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)]
    return computerChoice;

}

function userPrompt() {
    let playerPrompt = prompt("Rock Paper Scissors GO: ");
    return playerPrompt;
}

//A function to play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return ("It's a draw! No points!");
    } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors")) {
        playerScore += 1;
        return ("You win! Rock beats scissors, you get 1 point");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore += 1;
        return ("You lose! Paper beats rock, the computer gets 1 point");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore += 1;
        return ("You win! Paper beats rock, you get 1 point");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore += 1;
        return ("You lose! Scissors beat paper, the computer gets 1 point");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore += 1;
        return ("You win! Scissors beat paper, you get 1 point");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore += 1;
        return ("You lose!Rock beats scissors, the computer gets 1 point");

    }
}

//Function to delacre the winner
function theWinner() {
    if (playerScore > computerScore) {
        console.log("YOU WIN! Player Score was: " + playerScore + " Computer Score was: " + computerScore)
    } else if (computerScore > playerScore){
        console.log("YOU LOSE! Player Score was: " + playerScore + " Computer Score was: " + computerScore)
    } else if (playerScore === computerScore) {
        console.log("ITS A DRAW! Player Score was: " + playerScore + " Computer Score was: " + computerScore)
    }
    
}

// Function to play the game up to 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        if (i <= 5) {

            /*let playerSelection = prompt("Rock Paper Scissors GO: ");
            playRound(playerSelection, computerSelection);
            console.log(i);*/

            //fresh start

            let playerSelection = userPrompt();
            let computerSelection = getComputerChoice();
            console.log(playerSelection);
            console.log(computerSelection);
            console.log(playRound(playerSelection, computerSelection));
            console.log(playerScore, computerScore);
        }
    }


}

game();
theWinner();

