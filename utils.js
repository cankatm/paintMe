function resizeCanvas() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.canvas.height = window.innerHeight - 200;
    context.canvas.width = window.innerWidth - 10;
    context.fillStyle = "#F6EEE0";
    context.fillRect(0, 0, canvas.width, canvas.height);
}