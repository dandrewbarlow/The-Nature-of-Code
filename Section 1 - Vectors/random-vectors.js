function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  
    translate(width / 2, height / 2);
    
    // This creates a square of vectors
    // the vector's max magnitude depends on its angle
    // let v = createVector(random(-100, 100), random(-100, 100));

    // this function creates unit vectors, aka constant magnitude
    let v = p5.Vector.random2D();

    // it has length 1, though. it needs some sort of scaling
    // the mult() function scales a vector by a, well a scalar
    v.mult(random(50, 100));

  
    strokeWeight(4);
    stroke(255, 50);
    line(0, 0, v.x, v.y);
}