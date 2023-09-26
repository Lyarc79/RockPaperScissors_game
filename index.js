
// This are 2 global variables to track score
let computerScore = 0;
let playerScore = 0;
let currentRound = 0;

// This function is an array that gets a random item for the console
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// This function prompts the user for their choice with input validation
function getPlayerChoice(){
    let playerChoice;
    while(true){
        playerChoice = prompt ("rock, paper or scissors?")?.toLowerCase();
        if (playerChoice && isValidChoice(playerChoice)){
            return playerChoice;
        }
        else{
            alert("Invalid choice. Please enter rock, paper or scissors.")
        }
    }
}

function isValidChoice(choice){
    return choice === "rock" || choice === "paper" || choice === "scissors";
}


// Function that plays a round and displays the round, the selections and the winner
function playRound (playerSelection, computerSelection){
    currentRound++;
    console.log(`Round ${currentRound}`);
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
    else {
        return null; // Game keeps going
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



