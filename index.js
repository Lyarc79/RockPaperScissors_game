
let computerScore = 0;
let playerScore = 0;



function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice(){
    playerChoice = prompt ("rock, paper or scissors?").toLowerCase();
    return playerChoice;
}

let tie = "It's a tie!";
let playerWin = "You win!";
let computerWin = "The computer wins!";

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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let result = playRound(playerSelection, computerSelection);

function checkWinner(){
    if (playerWin === 5){
        return "Player win's the game"
    }
    else if (computerWin === 5){
        return "Computer win's the game"
    }
}

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

function game(){

    for (let i = 0; i <= 5; i++){
        console.log(result);
        updateScore();
    }
}


game();
checkWinner();

