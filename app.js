let playerSelection = "Rock";

function compRandomSelection() {
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "Rock";
    } else if (computerSelection <= 0.67) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    console.log(computerSelection);
}

function checkWinner() {
    if (
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        win();
    } else if (playerSelection === computerSelection) {
        draw();
    } else {
        lose();
    }
}

function win() {
    console.log("You Win");
}

function draw() {
    console.log("Draw! It's a tie");
}

function lose() {
    console.log("You Lose");
}
