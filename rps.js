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
    console.log("Computer chooses: " + compChoice);
    return compChoice;
}

function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        let draw = document.createElement('p');
        draw.textContent = "Draw!";
        drawScore = document.querySelector(".choices");
        drawScore.appendChild(draw);
    } else if (compChoice == "rock" && humanChoice == "paper") {
        console.log("You win! Paper beats Rock.");
        ++humanScore;
        printScore();
    } else if (compChoice == "rock" && humanChoice == "scissors") {
        console.log("You lose! Rock beats Scissors.");
        ++computerScore;
        printScore();
    } else if (compChoice == "paper" && humanChoice == "rock") {
        console.log("You lose! Paper beats Rock.");
        ++computerScore;
        printScore();
    } else if (compChoice == "paper" && humanChoice == "scissors") {
        console.log("You win! Scissors beat Paper");
        ++humanScore;
        printScore();
    } else if (compChoice == "scissors" && humanChoice == "rock") {
        console.log("You win! Rock beats scissors.");
        ++humanScore;
        printScore();
    } else if (compChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose! Scissors beat Paper.");
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

//Add event listener to call playRound() with the playerSelection
let buttons = document.querySelectorAll(".btn");
let humChoice = document.querySelector("p.hum-choice");
let compChoice = document.querySelector("p.comp-choice");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        humanChoice = button.id;
        playRound(humanChoice, comp = getComputerChoice());
        humChoice.textContent = humanChoice;
        compChoice.textContent = comp;

    });
});

//Add div to display results, change console.log() to DOM Methods
//Display running score, announce a winner once a player reaches 5 points
