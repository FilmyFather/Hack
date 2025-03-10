let gameDuration = 30000; // 30 seconds
let countdown = 30;
let countdownInterval;
let progressBar;

function startGame() {
    document.getElementById("result").innerText = "Game Started!";

    countdown = 30;
    updateCountdown();
    startProgressBar();

    countdownInterval = setInterval(() => {
        countdown--;
        document.getElementById("countdown").innerText = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    let winningNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("result").innerText = "Winning Number: " + winningNumber;

    setTimeout(() => {
        startGame(); // Restart the game after 30 seconds
    }, 1000);
}

function updateCountdown() {
    document.getElementById("countdown").innerText = countdown;
}

function startProgressBar() {
    progressBar = document.querySelector(".progress-bar");
    progressBar.style.transition = "width 30s linear";
    progressBar.style.width = "100%";
    setTimeout(() => {
        progressBar.style.width = "0%";
    }, 50);
}

document.getElementById("startButton").addEventListener("click", () => {
    startGame();
    document.getElementById("startButton").style.display = "none"; // Hide button after first start
});

window.onload = () => {
    document.getElementById("countdown").innerText = countdown;
};
