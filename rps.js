//const currentScore 
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const currentResult = document.querySelector('.currentResult');
const currentScore = document.querySelector('.currentScore');
const endGame = document.querySelector('.endGame');

let wins = 0;
let losses = 0;
currentScore.textContent = wins + ' wins ' + losses + ' losses';

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    console.log(computerChoice)
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else if (computerChoice === 2) {
        return 'scissors';
    };
};


function getPlayerChoice() {
    const playerInput = guessField.value;
    const playerChoice = playerInput.toLowerCase();
    console.log(playerChoice);
    playerInput.value = '';
    let computerRps = getComputerChoice();
    console.log(computerRps);
    currentResult.textContent = singleRound(playerChoice, computerRps);
};

function singleRound(playerChoice, computerRps) {
    if (playerChoice === computerRps) {
        return 'It\'s a tie!'
    } else if (playerChoice === 'rock') {
        if (computerRps === 'scissors') {
            wins++;
            checkEnd();
            currentScore.textContent = wins + ' wins ' + losses + ' losses';
            return 'Rock crushes scissors, you win!'
        }
        else {
            losses++;
            checkEnd();
            currentScore.textContent = wins + ' wins ' + losses + ' losses';
            return 'Paper covers rock, you lose!'
        }
    } else if (playerChoice === 'paper') {
        if (computerRps === 'rock') {
            wins++;
            checkEnd();
            currentScore.textContent = wins + ' wins ' + losses + ' losses';
            return 'Paper covers rock, you win!'
        } else {
            losses++;
            checkEnd();
            currentScore.textContent = wins + ' wins ' + losses + ' losses';
            return 'Scissors cut paper, you lose!'
        }
    } else {
        if (computerRps === 'rock') {
            losses++;
            checkEnd();
            currentScore.textContent = wins + ' wins ' + losses + ' losses';
            return 'Rock crushes scissors, you lose!'
        } else {
            wins++;
            checkEnd();
            currentScore.textContent = wins + ' wins ' + losses + ' losses';
            return 'Scissors cut paper, you win!'
        }
    }
};

guessSubmit.addEventListener('click', getPlayerChoice);

function checkEnd() {
    if (wins === 3) {
        endGame.textContent = ' YOU WIN!!';
        setGameOver();
    } else if (losses === 3) {
        endGame.textContent = ' YOU LOSE!!';
        setGameOver();
    } else {
        return;
    }
}

function setGameOver() {
    guessSubmit.disabled = true;
    guessField.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    wins = 0;
    losses = 0;
    guessSubmit.disabled = false;
    guessField.disabled = false;
    currentResult.textContent = '';
    currentScore.textContent = wins + ' wins ' + losses + ' losses';
    endGame.textContent = '';
    guessField.value = '';
    guessField.focus();
    resetButton.parentNode.removeChild(resetButton);
};


//get computer choice and store to variable
//get player choice and store to variable
//compare variables and output win/lose message
<<<<<<< HEAD
//reset computer and player choice
<<<<<<< HEAD
=======
//reset computer and player choice
//testing commits
>>>>>>> 4659884 (please work)
=======
//git test
>>>>>>> 872514c (testing)
