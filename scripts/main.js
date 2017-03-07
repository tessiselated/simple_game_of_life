var height = 20;
var width = 80;
var gameState;

randomizeInitialState();
draw();
tick();


// draw the state of the game in the canvas area

function draw() {
    var canvas = document.getElementById('board');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    gameState = new Array(height);
    for (var i = 0; i < width; i++) {
        gameState[i] = new Array(width);
        for (var j = 0; j < height; j++) {
            if (Math.round(Math.random()) ===1) {
                gameState[i][j] = true;
            }
        }
    }
}

// Check that any neighbour being tested is within boundaries of grid

function checkBoundaries(y, x) {
  try {
    gameState[y][x];
  } catch(e) {
    return;
  }
  return gameState[y][x];
}

// returns an array of true (alive) and undefined (dead or outside boundary) for the neighbours of the cell at a given location

function getNeighbours(y, x) {
  return [
    checkBoundaries(y-1, x),
    checkBoundaries(y-1, x + 1),
    checkBoundaries(y, x + 1),
    checkBoundaries(y+1, x+1),
    checkBoundaries(y+1, x),
    checkBoundaries(y+1, x -1),
    checkBoundaries(y, x-1),
    checkBoundaries(y-1, x-1)
  ];
}

// count how many neighbouring cells are alive

function countAliveNeighbours(y, x) {
  var neighbours = getNeighbours(y, x);
  var liveNeighbours = neighbours.filter(function(value) {
    return value === true;
  });
  return liveNeighbours.length;
}


function updateGameState() {
  var holdingArray = new Array(height);
  for (var h = 0; h < width; h++) {
      holdingArray[h] = new Array(width);
      }
  for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
          var liveNeighbours = countAliveNeighbours(i, j);
          if (gameState[i][j] === true && liveNeighbours < 2) {
            holdingArray[i][j] = undefined;
          } else if (gameState[i][j] === true && liveNeighbours > 3) {
            holdingArray[i][j] = undefined;
          } else if (gameState[i][j] === true) {
            holdingArray[i][j] = true;
          } else if (gameState[i][j] === undefined && liveNeighbours === 3) {
            holdingArray[i][j] = true;
          }
      }
  }
  return holdingArray;
}

function tick() {
  gameState = updateGameState();
  draw();
  setTimeout(tick, 500);
}
