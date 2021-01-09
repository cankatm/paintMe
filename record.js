const recordButton = document.getElementById('record');
const playButton = document.getElementById('play');
const clearButton = document.getElementById('clear');
const canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");
let isRecording = false;
let canPlayable = false;
let canClearable = false;
let frames = [];
const fps = 15;
let saveInterval = null;
let drawInterval = null;

function handleRecord() {
    isRecording = !isRecording;
    if (isRecording) {
        clearCanvas();
        recordButton.style.backgroundColor = 'lightGreen';
        recordButton.style.color = 'black';
        recordButton.innerHTML = 'Stop';
        return saveInterval = window.setInterval(() => {
            let frame = context.getImageData(0, 0, canvas.width, canvas.height);
            frames.push(frame)
        }, 1000 / fps);
    }
    window.clearInterval(saveInterval);
    recordButton.style.backgroundColor = 'green';
    recordButton.style.color = 'white';
    recordButton.innerHTML = 'Record';
}

function playRecord() {
    if (isRecording || frames.length === 0) {
        return;
    }
    let i = 0;
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawInterval = window.setInterval(() => {
        if (i === frames.length){
            return window.clearInterval(drawInterval);
        }
        context.putImageData(frames[i], 0, 0);
        i++;
        
    }, 1000 / fps);
}

function clearCanvas() {
    localStorage.clear();
    i = 0;
    frames = [];
    resizeCanvas();
    canPlayable = false;
    canClearable = false;
}

recordButton.addEventListener('mousedown', handleRecord);
playButton.addEventListener('mousedown', playRecord);
clearButton.addEventListener('mousedown', clearCanvas);