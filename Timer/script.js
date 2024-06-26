const minutesLabel = document.getElementById('minutes');
const secondLabel = document.getElementById('seconds');
const milliLabel = document.getElementById('milli');

const startb = document.getElementById('startb');
const stopb = document.getElementById('stopb');
const pauseb = document.getElementById('pauseb');
const resetb = document.getElementById('resetb');
const lapb = document.getElementById('lapb');
const laplist = document.getElementById('laplist');

let minutes = 0;
let seconds = 0;
let milli = 0;

let interval;

startb.addEventListener('click', starttimer);
stopb.addEventListener('click', stoptimer);
pauseb.addEventListener('click', pausetimer);
resetb.addEventListener('click', resettimer);
lapb.addEventListener('click', laptimer);

function starttimer() {
    interval = setInterval(updatetimer, 10);
    startb.disabled = true;
    stopb.disabled = false;
    pauseb.disabled = false;
    lapb.disabled = false;
}

function laptimer() {
    addlaplist();
}

function stoptimer() {
    addlaplist();
    clearInterval(interval);
    resettimerdata();
    stopb.disabled = true;
    startb.disabled = false;
    pauseb.disabled = true;
    lapb.disabled = true;
}

function pausetimer() {
    clearInterval(interval);
    startb.disabled = false;
    stopb.disabled = false;
    pauseb.disabled = true;
}

function resettimer() {
    clearInterval(interval);
    resettimerdata();
    clearlaplist();
    startb.disabled = false;
    stopb.disabled = true;
    pauseb.disabled = true;
    lapb.disabled = true;
}

function updatetimer() {
    milli++;
    if (milli === 100) {
        milli = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    displaytimer();
}

function displaytimer() {
    milliLabel.textContent = padtime(milli);
    secondLabel.textContent = padtime(seconds);
    minutesLabel.textContent = padtime(minutes);
}

function padtime(time) {
    return time.toString().padStart(2, '0');
}

function resettimerdata() {
    minutes = 0;
    seconds = 0;
    milli = 0;
    displaytimer();
}

function addlaplist() {
    const laptime = `${padtime(minutes)}:${padtime(seconds)}:${padtime(milli)}`;
    const listitem = document.createElement('li');
    listitem.innerHTML = `<span>lap ${laplist.childElementCount + 1}:</span> ${laptime}`;
    laplist.appendChild(listitem);
}

function clearlaplist() {
    while (laplist.firstChild) {
        laplist.removeChild(laplist.firstChild);
    }
}
