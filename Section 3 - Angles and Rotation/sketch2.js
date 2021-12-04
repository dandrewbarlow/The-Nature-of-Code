let mover;
let attractor;

function setup() {
    createCanvas(400, 400);
    background(0);
    mover = new Mover(50, 50, 0.011);
    attractor = new Attractor(200, 200, 5);
}

function draw() {
    // background(0);
    mover.update();
    mover.show();

    attractor.attract(mover);
    attractor.show();
}