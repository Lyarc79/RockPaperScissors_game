
// This are 2 global variables to track score
let computerScore = 0;
let playerScore = 0;

// This function is an array that gets a random item for the console
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// This function prompts the user for their choice
function getPlayerChoice(){
    playerChoice = prompt ("rock, paper or scissors?").toLowerCase();
    return playerChoice;
}

//These variables store the choices functions
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

// Function that plays a round and displays the winner
function playRound (playerSelection, computerSelection){
    console.log(`Player chooses ${playerSelection}`);
    console.log(`Computer chooses ${computerSelection}`);

    if (playerSelection === computerSelection){
        return "It's a tie!";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
        ) {
        return "The computer wins!";
        }
    else {
        return "You win!";
        }
}

// Function to keep track of the score and update it every round
function updateScore(result){
    if (result === "You win!"){
        playerScore++;
    }
    else if (result === "The computer wins!"){
        computerScore++;
    }
}

// Function to display the current score
function displayScore(){
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

// Function that should display at the end when player or computer reaches 5 points.
function checkWinner(){
    if (playerScore === 5){
        return "Player wins the game";
    }
    else if (computerScore === 5){
        return "Computer wins the game";
    }
}
// Game function 
function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        updateScore(result);
        console.log(result);
        displayScore();

        const winner = checkWinner();
        if(winner){
            console.log(winner);
            break; 
        }
    }
}

game();



