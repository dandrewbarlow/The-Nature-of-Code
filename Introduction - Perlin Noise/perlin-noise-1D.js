// Creating a graph of perlin noise in one dimension


// increment
var inc = 0.01;
var start = 0;

function setup() {
    createCanvas(400,400);
}
  
function draw() {
    background(50);

    stroke(255);
    noFill();

    beginShape();

    var xoff = start;

    for (var x = 0; x < innerWidth; x++) {
        stroke(255);
        y = noise(xoff) * height;
        vertex(x, y);

        xoff += inc;
    }
    endShape();

    start += inc;
}