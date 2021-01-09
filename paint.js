window.addEventListener('load', () => {
    resizeCanvas();

    let painting = false;
    function startPosition(event) {
        painting = true;
        paint(event);
    }
    function finishPosition() {
        painting = false;
        context.beginPath();
    }
    
    function paint(event) {
        if (!painting) {
            return;
        }
    
        context.lineWidth = 5;
        context.lineCap = 'round';

        context.lineTo(event.clientX, event.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(event.clientX, event.clientY);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishPosition);
    canvas.addEventListener('mousemove', paint);
});

window.addEventListener('resize', () => {
    resizeCanvas();
});