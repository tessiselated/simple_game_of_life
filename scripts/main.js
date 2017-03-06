var height = 20;
var width = 80;
var gameState;



// function to draw a grid in the canvas area

function draw() {
    randomizeInitialState();
    var ctx = document.getElementById('board').getContext('2d');
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            ctx.strokeRect(i * 10, j * 10, 10, 10);
            if (gameState[i][j] === true) {
                ctx.fillRect(i * 10, j * 10, 10, 10);
            }
        }
    }
}


function randomizeInitialState() {
    gameState = new Array(20);
    for (var i = 0; i < 80; i++) {
        gameState[i] = new Array(80);
        for (var j = 0; j < 20; j++) {
            if (Math.round(Math.random()) ===1) {
                gameState[i][j] = true;
            } else {
                gameState[i][j] = false;
            }
        }
    }
}

draw();
