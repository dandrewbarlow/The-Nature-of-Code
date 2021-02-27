// This sketch focuses on implementing forces:
// drag, gravity, collisions, friction
// sketch2 goes into gravitational attraction
let movers = [];
let dragC = 0.1;


function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), 0, random(1,6))
  }
}

function draw() {
  background(0);

  fill(266, 125);
  noStroke();
  rect(0, height / 2, width, height / 2);

  let gravity = createVector(0, .2);
  for (let mover of movers) {

    let weight = p5.Vector.mult(gravity, mover.mass);
    
    mover.applyForce(weight);
    
    if (mouseIsPressed) {
      let wind = createVector(0.5, -1);
      mover.applyForce(wind);
    }
    if (mover.position.y > height / 2) {
      mover.drag(dragC);
    }
    mover.friction();
    // mover.drag();
    mover.update();
    mover.edges();
    mover.show();
  }
}