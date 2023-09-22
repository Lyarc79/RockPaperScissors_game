
// This are 2 global variables to track score
let computerScore = 0;
let playerScore = 0;

// This function is an array that gets a random item for the console
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// This is a function for the user to write his choice
function getPlayerChoice(){
    playerChoice = prompt ("rock, paper or scissors?").toLowerCase();
    return playerChoice;
}

// These are variables for the playround function
let tie = "It's a tie!";
let playerWin = "You win!";
let computerWin = "The computer wins!";

// Function that plays a round and displays the winner
function playRound (playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        return tie;
    }
    else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
        ) {
        return computerWin;
        }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
        ); {
        return playerWin;
        }
}

// Storing the choices functions into variables
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
// Storing the playRound function to make it shorter
let result = playRound(playerSelection, computerSelection);

// Function that should display at the end when player or computer reaches 5 points.
function checkWinner(){
    if (playerScore === 5){
        return "Player win's the game"
    }
    else if (computerScore === 5){
        return "Computer win's the game"
    }
}

// Function to keep track of the score and update it every round
function updateScore(){
    if (result == playerWin){
        playerScore++;
    }
    else if (result == computerWin){
        computerScore++;
    }
    else if (result == tie){
    }
    console.log(playerScore);
    console.log(computerScore);
}

// Game function still working wrong.
// Loop should be alright but the console display isn't the desired.
function game(){

    for (let i = 0; i <= 5; i++){
        console.log(result);
        updateScore();
    }
}


game();
checkWinner();

