
// This are 2 global variables to track score
let computerScore = 0;
let playerScore = 0;
let currentRound = 0;

// DOM selectors
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resetBtn = document.getElementById("reset");

// This function is an array that gets a random item for the console
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function that plays a round and displays the round, the selections and the winner
function playRound (playerSelection, computerSelection){
    currentRound++;

    resultDisplay.innerHTML = ""

    const roundResult = document.createElement("p");
    roundResult.textContent = `Round ${currentRound}`;
    resultDisplay.appendChild(roundResult);
    roundResult.style = "font-weight: bold; font-size: 20px";

    const playerChoiceText = document.createElement("p");
    playerChoiceText.textContent = `Player chooses ${playerSelection}`;
    resultDisplay.appendChild(playerChoiceText);

    const computerChoiceText = document.createElement("p");
    computerChoiceText.textContent = `Computer chooses ${computerSelection}`;
    resultDisplay.appendChild(computerChoiceText);

    if (playerSelection === computerSelection){
        const tieText = document.createElement("p");
        tieText.textContent = "It's a tie!";
        resultDisplay.appendChild(tieText);
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
        ) {
        const computerWinsText = document.createElement("p");
        computerWinsText.textContent = "The computer wins!";
        resultDisplay.appendChild(computerWinsText);
        computerScore++;
    } else {
        const playerWinsText = document.createElement("p");
        playerWinsText.textContent = "You win!";
        resultDisplay.appendChild(playerWinsText);
        playerScore++;
        }
    displayScore();
}

// Function to display the current score
function displayScore(){
   playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
   computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
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

// Reset the game
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;
    resultDisplay.innerHTML = "";
    playerScoreDisplay.textContent = "Player Score: 0";
    computerScoreDisplay.textContent = "Computer Score: 0";

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;   
}

// Disabling buttons when game ends
function disableButtons(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Game function 
function game(){
    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();

        const winner = checkWinner();
        if(winner){
            const winnerText = document.createElement("p");
            winnerText.textContent = winner;
            resultDisplay.appendChild(winnerText);
            disableButtons()
            break; 
        }
    }
}

// Event listeners go here
rockBtn.addEventListener ('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();  
    playRound(playerSelection, computerSelection);
    
    const winner = checkWinner();
    if (winner){
        const winnerText = document.createElement("p");
        winnerText.textContent = winner;
        resultDisplay.appendChild(winnerText);
        disableButtons();
    }
})

paperBtn.addEventListener ('click', () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();  
    playRound(playerSelection, computerSelection);
    
    const winner = checkWinner();
    if (winner){
        const winnerText = document.createElement("p");
        winnerText.textContent = winner;
        resultDisplay.appendChild(winnerText);
        disableButtons();
    }
})

scissorsBtn.addEventListener ('click', () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();  
    playRound(playerSelection, computerSelection);
    
    const winner = checkWinner();
    if (winner){
        const winnerText = document.createElement("p");
        winnerText.textContent = winner;
        resultDisplay.appendChild(winnerText);
        disableButtons();
    }
})

resetBtn.addEventListener('click', resetGame);

// Game funct call
game();



