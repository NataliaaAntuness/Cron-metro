const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let minute = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;
let interval;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            if (!isPaused) {
                milliseconds += 10;

                if (milliseconds === 1000) {
                    seconds++;
                    milliseconds = 0;
                }

                if (seconds === 60) {
                    minute++;
                    seconds = 0;
                }

                minutesEl.textContent = minute < 10 ? "0" + minute : minute;
                secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
                millisecondsEl.textContent = milliseconds < 100 ? "0" + milliseconds : milliseconds;

                // Mudança de cor durante a execução
                startBtn.style.backgroundColor = getRandomColor();
            }
        }, 10);
    }
}

function getRandomColor() {
    // Função para gerar uma cor hexadecimal aleatória
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function pauseTimer() {
    isPaused = true;
}

function resumeTimer() {
    isPaused = false;
}

function resetTimer() {
    clearInterval(interval);
    isPaused = false;
    minute = 0;
    seconds = 0;
    milliseconds = 0;
    interval = null;
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";
    
    startBtn.style.backgroundColor = "orangered";
}
