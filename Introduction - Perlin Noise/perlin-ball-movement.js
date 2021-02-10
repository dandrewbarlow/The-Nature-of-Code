// An example of perlin noise being used to randomly move a circle around

// x-offset
var xoff1 = 0
var xoff2 = 10000


function setup() {
    createCanvas(400,400);
  }
  
  function draw() {
    background(50);

    var x = map( noise(xoff1), 0, 1, 0, width);
    var y = map( noise(xoff2), 0, 1, 0, width);

    xoff1 += 0.01;
    xoff2 += 0.01;

    ellipse(x, y, 24, 24)
  }