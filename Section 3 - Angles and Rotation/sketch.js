let angle = 0;
let angleVel = 0;
let angleAcc = 0.01;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent(sketch);
    angleMode(RADIANS);
}

function draw() {

    angleAcc = map(mouseX, 0, width, -0.01, 0.01);
    angleV = constrain(angleVel, -0.2, 0.2);
    background(146, 83, 161);

    noStroke()
    fill(240, 99, 164);
    rectMode(CENTER);
    translate (width / 2, height / 2);
    rotate(-angle);
    rect(0, 0, 2 * 128, 64); 
    angle += angleVel;
    angleVel += angleAcc;


}