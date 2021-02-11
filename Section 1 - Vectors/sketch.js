function setup() {
    createCanvas(500, 500);
    mover = new Mover(width / 2, height / 2);
}

function draw() {
    background(0);
    mover.update();
    mover.show();
}