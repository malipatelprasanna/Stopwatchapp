let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

function updateDisplay(){

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = `${h} : ${m} : ${s}`;
}

function stopwatch(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

document.getElementById("startBtn").addEventListener("click", () => {

    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch,1000);
});

document.getElementById("pauseBtn").addEventListener("click", () => {

    clearInterval(timer);
});

document.getElementById("resetBtn").addEventListener("click", () => {

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    lapList.innerHTML = "";
});

document.getElementById("lapBtn").addEventListener("click", () => {

    let lapTime = display.innerHTML;

    let li = document.createElement("li");

    li.innerText = `Lap : ${lapTime}`;

    lapList.appendChild(li);
});