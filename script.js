const clearBtn = document.querySelector('.clear');
const strokeWeight = document.querySelector('.stroke-weight');
const colorPicker = document.querySelector('.color-picker');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// variable for drawings current state
let isDrawing = false;

// functionality for start drawing on mouse down
canvas.addEventListener('mousedown', start);
// functionality for drawing on mouse move
canvas.addEventListener('mousemove', draw);
// functionality for stop of drawing on mouse up
canvas.addEventListener('mouseup', stop);

// clear the canvas functionality
clearBtn.addEventListener('click', clearCanvas);


function start(e) {
    isDrawing = true;
    draw(e);
}

function draw({ clientX: x, clientY: y }) {
    if (!isDrawing) return;

    ctx.lineWidth = strokeWeight.value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorPicker.value;

    //  drawing the line
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);

}

function stop() {
    isDrawing = false;
    // to make the line draw a new path each time mouse clicks
    ctx.beginPath();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// functionality of the resising window with that, the canvas
window.addEventListener('resize', resizeCanvas);


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('load', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
});