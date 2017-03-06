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

// function to create a multi-dimensional array of same height and width of the grid
//  where each entry is a boolean, true to indicate a live cell and false to indicate
//  a dead cell

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

function checkBoundaries(x, y) {
  try {
    gameState[x][y] !== undefined;
  } catch(e) {
    return;
  }
  return gameState[x][y];
}

function getNeighbours(x, y) {
  return [
    checkBoundaries(x, y-1),
    checkBoundaries(x + 1, y-1),
    checkBoundaries(x + 1, y),
    checkBoundaries(x+1, y+1),
    checkBoundaries(x, y+1),
    checkBoundaries(x -1, y+1),
    checkBoundaries(x-1, y),
    checkBoundaries(x-1, y-1)
  ];
}

function updateGameState() {

}

draw();
