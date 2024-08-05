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

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors. GO!").toLowerCase();
    console.log("You chose: " + humanChoice);
    return humanChoice;
}

function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        console.log("Draw!");
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

playRound(getHumanChoice(), getComputerChoice());
