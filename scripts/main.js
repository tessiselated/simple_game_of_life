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
            }
        }
    }
}

// Check that any neighbour being tested is within boundaries of grid

function checkBoundaries(x, y) {
  try {
    gameState[x][y];
  } catch(e) {
    return;
  }
  return gameState[x][y];
}

// returns an array of true (alive) and undefined (dead or outside boundary) for the neighbours of the cell at a given location

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

// count how many neighbouring cells are alive

function countAliveNeighbours(x, y) {
  var neighbours = getNeighbours(x, y);
  var liveNeighbours = neighbours.filter(function(value){
    return value === true;
  });
  return liveNeighbours.length;
}

function updateGameState() {

}

draw();
