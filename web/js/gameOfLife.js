var startButtonId = "startButton";
var restartButtonId = "restartButton";
var pauseButtonId = "pauseButton";
var canvasContainerId = "output";

var canvasId = "golOutput";
var canvasContext;

var gol;
var intervalId = null;

window.onload = init;

var boardDimensions = {x: 16, y: 16};
var cellSize = 15;
var speed = 250;
var testFunction = gliderTest;

function init() {
    gol = new GOL(boardDimensions, testFunction);

    initUI();
    initCanvas();
}

function initCanvas() {
    var canvas = document.getElementById(canvasId);
    if (canvas.getContext) {
        canvasContext = canvas.getContext("2d");

        var width = boardDimensions.x * cellSize;
        canvas.setAttribute("width", width + "");
        canvas.setAttribute("height", boardDimensions.y * cellSize + "");
        var canvasContainer = document.getElementById(canvasContainerId);
        canvasContainer.style.width = width + 2 + "px";
    } else {
        console.log("Your browser does not support html5 canvas, please upgrade!")
    }
}

function initUI() {
    initButtons();
}

function initButtons() {
    var startButton = document.getElementById(startButtonId);
    var restartButton = document.getElementById(restartButtonId);
    var pauseButton = document.getElementById(pauseButtonId);

    startButton.onclick = start;
    restartButton.onclick = restart;
    pauseButton.onclick = pause;
}

function pause() {
    clearInterval(intervalId);
    intervalId = null;
}

function restart() {
    gol = new GOL(boardDimensions, testFunction);
    clearInterval(intervalId);
    intervalId = null;
    start();
}

function start() {
    if (intervalId == null) {
        draw(gol.boardArrayWithoutEdges());
        intervalId = setInterval(processNextGeneration, speed);
    }
}

function processNextGeneration() {
    var nextGeneration = gol.getNextGeneration();
    draw(nextGeneration);
}

function draw(nextGeneration) {
    for (var i = 0; i < nextGeneration.length; i++) {
        for (var j = 0; j < nextGeneration[i].length; j++) {
            var color = nextGeneration[i][j] ? gol.color.alive : gol.color.dead;
            canvasContext.fillStyle = color;
            canvasContext.fillRect(cellSize * j, cellSize * i, cellSize, cellSize);
        }
    }
}


