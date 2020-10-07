// Selector
const userChoise = document.querySelector('.user-choice__container');
const userImage = document.getElementById('user-choice__big-image');
const compImage = document.getElementById('comp-choice__big-image');
const boardGame = document.querySelector('.board');
const playerScoreBoard = document.getElementById('user__score');
const compScoreBoard = document.getElementById('comp__score');
const maxScoreBoard = document.getElementById('max__score');
const restartButton = document.getElementById('restart');
let maxScore;
let playerSelection, computerSelection;
let playerScore = 0;
let computerScore = 0;

// Event Listenner
playerSelection = userChoise.addEventListener('click', playerSelector);
maxScoreBoard.onclick = changeMaxScore;
restartButton.onclick = restart;



// Function
function gameInit() {
    maxScore = parseInt(prompt(`Please enter a maximum score. Default value is 5`));
    if (!maxScore) {
        alert(`You enter a wrong number, max score return to default 5 `)
        maxScore = 5;
    }
    maxScoreBoard.innerHTML = `MAX SCORE: ${maxScore}`;
}



function playerSelector(e) {
    playerSelection = e.target.id;
    userImage.src = `assets/${playerSelection}.png`;
    console.log(`Player : ${playerSelection}`);
    playGame()
    return playerSelection
}

function playGame() {
    compRandomSelector();
    checkWinner();
    checkMaxScore();
}

function compRandomSelector() {
    computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "Rock";
    } else if (computerSelection <= 0.67) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    compImage.src = `assets/${computerSelection}.png`
    console.log(`Comp: ${computerSelection}`);
    return computerSelection;
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
    boardGame.innerHTML = "You win";
    playerScore++
    playerScoreBoard.innerHTML = playerScore;
    console.log(`You: ${playerScore}, comp: ${computerScore}`);
}

function draw() {
    boardGame.innerHTML = "Draw! It's a tie";
    console.log(`You: ${playerScore}, comp: ${computerScore}`);
}

function lose() {
    boardGame.innerHTML = "You Lose";
    computerScore++
    compScoreBoard.innerHTML = computerScore;
    console.log(`You: ${playerScore}, comp: ${computerScore}`);
}

function checkMaxScore() {
    setTimeout(() => {
        if (playerScore === maxScore) {
            alert(`YEEYYYYYY, YOU WIN!!`);
            reset()
        }

        if (computerScore === maxScore) {
            alert(`HAHAHA, YOU LOSE!!`);
            reset()
        }
    }, 100);
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.innerHTML = playerScore;
    compScoreBoard.innerHTML = computerScore;
    maxScoreBoard.innerHTML = `MAX SCORE: ${maxScore}`;
}


function changeMaxScore() {
    askForChange = confirm(`Do you want to reset and change the maximum score?`);
    if (!askForChange) return;
    reset();
    gameInit();
}

function restart() {
    reset();
}

gameInit();