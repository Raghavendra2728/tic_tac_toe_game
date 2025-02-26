let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");
const stopwatch = document.querySelector(".stopwatch");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");

startBtn.addEventListener("click", function () {
    if (!running) {
        running = true;
        stopwatch.classList.add("running");
        timer = setInterval(updateTime, 10);
    }
});

pauseBtn.addEventListener("click", function () {
    running = false;
    stopwatch.classList.remove("running");
    clearInterval(timer);
});

resetBtn.addEventListener("click", function () {
    running = false;
    clearInterval(timer);
    minutes = 0; seconds = 0; milliseconds = 0;
    updateDisplay();
    stopwatch.classList.remove("running");
    lapsContainer.innerHTML = "";
});

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}
function updateDisplay() {
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
    millisecondsEl.textContent = String(milliseconds / 10).padStart(2, "0");
}

lapBtn.addEventListener("click", function () {
    if (running) {
        let lapTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds / 10).padStart(2, "0")}`;
        let lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
        lapsContainer.appendChild(lapItem);
    }
});
