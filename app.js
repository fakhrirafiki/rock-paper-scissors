(function () {


    // Selector
    const userChoise = document.querySelector(".user-choice__container");
    const userImage = document.getElementById("user-choice__big-image");
    const compImage = document.getElementById("comp-choice__big-image");
    const boardGame = document.querySelector(".board");
    const playerScoreBoard = document.getElementById("user__score");
    const compScoreBoard = document.getElementById("comp__score");
    const maxScoreBoard = document.getElementById("max__score");
    const restartButton = document.getElementById("restart");
    let maxScore;
    let playerHero, computerHero;
    let playerScore = 0;
    let computerScore = 0;

    // Event Listenner
    playerHero = userChoise.addEventListener("click", playerSelector);
    maxScoreBoard.onclick = changeMaxScore;
    restartButton.onclick = restart;

    // Function
    function gameInit() {
        maxScore = parseInt(
            prompt(`Please enter a maximum score. Default value is 5`)
        );
        if (!maxScore) {
            alert(`You enter a wrong number, max score return to default 5 `);
            maxScore = 5;
        }
        maxScoreBoard.innerHTML = `MAX SCORE: ${maxScore}`;
    }

    function playerSelector(e) {
        shake();
        playerHero = e.target.id;
        setTimeout(() => {
            userImage.src = `assets/${playerHero}.png`;
            console.log(`Player : ${playerHero}`);
            playGame();
        }, 1100);
        return playerHero;
    }

    function shake() {
        const shakeStartAt = new Date().getTime();
        setInterval(function () {
            if (new Date().getTime() - shakeStartAt > 1100) {
                clearInterval;
                return
            }
            userImage.src = 'assets/Rock.png';
            compImage.src = 'assets/Rock.png';
            userImage.classList.toggle("shake");
            compImage.classList.toggle("shake");
        }, 100);
    }

    function playGame() {
        compRandomSelector();
        checkWinner();
        checkMaxScore();
    }

    function compRandomSelector() {
        computerHero = Math.random();
        if (computerHero < 0.34) {
            computerHero = "Rock";
        } else if (computerHero <= 0.67) {
            computerHero = "Paper";
        } else {
            computerHero = "Scissors";
        }
        compImage.src = `assets/${computerHero}.png`;
        console.log(`Comp: ${computerHero}`);
        return computerHero;
    }

    function checkWinner() {
        if (
            (playerHero === "Paper" && computerHero === "Rock") ||
            (playerHero === "Rock" && computerHero === "Scissors") ||
            (playerHero === "Scissors" && computerHero === "Paper")
        ) {
            win();
        } else if (playerHero === computerHero) {
            draw();
        } else {
            lose();
        }
    }

    function win() {
        boardGame.innerHTML = "You win!";
        playerScore++;
        playerScoreBoard.innerHTML = playerScore;
        console.log(`You: ${playerScore}, comp: ${computerScore}`);
    }

    function draw() {
        boardGame.innerHTML = "Draw! It's a tie";
        console.log(`You: ${playerScore}, comp: ${computerScore}`);
    }

    function lose() {
        boardGame.innerHTML = "You Lose!";
        computerScore++;
        compScoreBoard.innerHTML = computerScore;
        console.log(`You: ${playerScore}, comp: ${computerScore}`);
    }

    function checkMaxScore() {
        setTimeout(() => {
            if (playerScore === maxScore) {
                alert(`YEEYYYYYY, YOU WIN!!`);
                reset();
            }

            if (computerScore === maxScore) {
                alert(`HAHAHA, YOU LOSE!!`);
                reset();
            }
        }, 100);
    }

    function reset() {
        playerScore = 0;
        computerScore = 0;
        playerScoreBoard.innerHTML = playerScore;
        compScoreBoard.innerHTML = computerScore;
        userImage.src = 'assets/Rock.png';
        compImage.src = 'assets/Rock.png';
        boardGame.innerHTML = "AYOK SUIT!!";
        maxScoreBoard.innerHTML = `MAX SCORE: ${maxScore}`;
    }

    function changeMaxScore() {
        askForChange = confirm(
            `Do you want to reset and change the maximum score?`
        );
        if (!askForChange) return;
        reset();
        gameInit();
    }

    function restart() {
        reset();
    }

    gameInit();

})();
