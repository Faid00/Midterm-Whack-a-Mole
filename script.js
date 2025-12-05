let score = 0;
let currentMole = null;
let timer = 60;
let gameInterval;
let countdown;

const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const popup = document.getElementById("game-over-popup");
const finalScore = document.getElementById("final-score");
const playAgainButton = document.getElementById("play-again-button");

function randomMole() {
    if (currentMole) currentMole.innerHTML = "";

    const index = Math.floor(Math.random() * holes.length);
    currentMole = holes[index];

    const mole = document.createElement("div");
    mole.classList.add("mole");

    mole.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
    });

    currentMole.appendChild(mole);
}

function startGame() {
    score = 0;
    timer = 60;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timer;
    popup.style.display = "none";

    gameInterval = setInterval(randomMole, 700);
    countdown = setInterval(() => {
        timer--;
        timerDisplay.textContent = timer;

        if (timer === 0) stopGame();
    }, 1000);
}

function stopGame() {
    clearInterval(gameInterval);
    clearInterval(countdown);

    finalScore.textContent = score;
    popup.style.display = "block";
}

function resetGame() {
    score = 0;
    timer = 60;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timer;

    popup.style.display = "none";
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
playAgainButton.addEventListener("click", startGame);
