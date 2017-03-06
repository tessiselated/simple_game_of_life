var height = 20;
var width = 80;

function randomiseInitialState() {


}

// function to draw a grid in the canvas area

function draw() {
    var ctx = document.getElementById('board').getContext('2d');
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            ctx.strokeRect(i * 10, j * 10, 10, 10);
        }
    }
}


draw();
