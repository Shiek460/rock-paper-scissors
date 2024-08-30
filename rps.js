let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compChoice = Math.random()
    if (compChoice < .34) {
        compChoice = "rock"
    } else if (.33 < compChoice && compChoice < .66) {
        compChoice = "paper"
    } else {
        compChoice = "scissors"
    }
    return compChoice;
}


let result = document.createElement('p');
let final = document.createElement('p');
let roundResult = document.querySelector(".choices");
let humScoreDisplay = document.querySelector(".human-score");
let compScoreDisplay = document.querySelector(".comp-score");

let buttons = document.querySelectorAll(".btn");
let humChoice = document.querySelector("p.hum-choice");
let compChoice = document.querySelector("p.comp-choice");
//Announce a winner once a player reaches 5 points
let score = document.querySelectorAll(".score");
//Add event listener to call playRound() with the playerSelection
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (computerScore < 5 && humanScore < 5) {
            humanChoice = button.id;
            playRound(humanChoice, comp = getComputerChoice());
            //Add div to display results, change console.log() to DOM Methods
            humChoice.textContent = "Your Choice: " + humanChoice;
            compChoice.textContent = "Computer Choice: " + comp;
        } else {
            evaluateFinal();
        }
    });
});
//Display running score
function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        result.textContent = "Draw!";
        roundResult.appendChild(result);
    } else if (compChoice == "rock" && humanChoice == "paper") {
        result.textContent = "You win! Paper beats Rock.";
        roundResult.appendChild(result);
        humScoreDisplay.textContent = parseInt(humScoreDisplay.textContent) + 1;
        ++humanScore;
        printScore();
    } else if (compChoice == "rock" && humanChoice == "scissors") {
        result.textContent = "You lose! Rock beats Scissors.";
        roundResult.appendChild(result);
        compScoreDisplay.textContent = parseInt(compScoreDisplay.textContent) + 1;
        ++computerScore;
        printScore();
    } else if (compChoice == "paper" && humanChoice == "rock") {
        result.textContent = "You lose! Paper beats Rock.";
        roundResult.appendChild(result);
        compScoreDisplay.textContent = parseInt(compScoreDisplay.textContent) + 1;
        ++computerScore;
        printScore();
    } else if (compChoice == "paper" && humanChoice == "scissors") {
        result.textContent = "You win! Scissors beat Paper";
        roundResult.appendChild(result);
        humScoreDisplay.textContent = parseInt(humScoreDisplay.textContent) + 1;
        ++humanScore;
        printScore();
    } else if (compChoice == "scissors" && humanChoice == "rock") {
        result.textContent = "You win! Rock beats scissors.";
        roundResult.appendChild(result);
        humScoreDisplay.textContent = parseInt(humScoreDisplay.textContent) + 1;
        ++humanScore;
        printScore();
    } else if (compChoice == "scissors" && humanChoice == "paper") {
        result.textContent = "You lose! Scissors beat Paper.";
        roundResult.appendChild(result);
        compScoreDisplay.textContent = parseInt(compScoreDisplay.textContent) + 1;
        ++computerScore;
        printScore();
    }
}

function printScore() {
    console.log("Your Score: " + humanScore + "; \nComputer Score: " + computerScore)
}

function playGame() {
    if (computerScore > humanScore) {
        console.log("You lost!");
    } else if (computerScore < humanScore) {
        console.log("You win!");
    } else {
        console.log("Game Result: Draw.")
    }
}

function replay() {
    let playAgain = input("Play Again? Y/N").toLowerCase();
    if (playAgain === "y" || playAgain === "yes") {
        location.reload();
    }
}

function evaluateFinal() {
    if (computerScore === 5) {
        final.textContent = "You Lost! Better Luck Next Time";
        replay();
    } else if (humanScore === 5) {
        final.textContent = "You Win! Way to go!";
        replay();
    }
}