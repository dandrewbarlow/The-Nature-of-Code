// This sketch focuses on gravitational attraction
// sketch2 goes into implementing forces:
// drag, gravity, collisions, friction

let mover;
let attractor;

function setup() {
    createCanvas(400, 400);
    mover = new Mover(50, 50, 1);
    attractor = new Attractor(200, 200, 5);
}

function draw() {
    background(0);
    mover.update();
    mover.show();

    attractor.attract(mover);
    attractor.show();
}