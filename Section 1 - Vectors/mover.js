

class Mover {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(3));
        this.acceleration = createVector();
        this.acceleration.setMag(1);
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        this.acceleration = p5.Vector.sub(mouse, this.position);
        this.acceleration.setMag(0.1);

        this.velocity.add(this.acceleration);
        this.velocity.limit(6)
        this.position.add(this.velocity);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.position.x, this.position.y, 32);
    }
}