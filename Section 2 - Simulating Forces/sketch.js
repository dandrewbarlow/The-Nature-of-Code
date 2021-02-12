let movers = [];

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), 200, random(1,6))
  }
}

function draw() {
  background(0);

  let gravity = createVector(0, .2);
  for (let i = 0; i < 10; i++) {

    let weight = p5.Vector.mult(gravity, movers[i].mass);
    
    movers[i].applyForce(weight);
    
    if (mouseIsPressed) {
      let wind = createVector(0.5, -.1);
      movers[i].applyForce(wind);
    }
    
    movers[i].friction();
    movers[i].update();
    movers[i].edges();
    movers[i].show();
  }
}