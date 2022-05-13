

function getDefaultTime(){
    clockElement = document.getElementById("clock");
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    clockElement.innerHTML = hour + ":" + minute + ":" + second;
}

function startTimer() {
    clockElement = document.getElementById("clock");
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    clockElement.innerHTML = hour + ":" + minute + ":" + second;
    setInterval(startTimer, 1000); 
}

getDefaultTime();
