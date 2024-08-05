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
    let humanChoice = prompt("Rock, Paper, Scissors. GO!")
    console.log("You chose: " + humanChoice.toLowerCase());
    return humanChoice.toLowerCase();
}

