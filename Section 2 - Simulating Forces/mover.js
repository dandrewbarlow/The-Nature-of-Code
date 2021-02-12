// Mover - a little moving ball in a world of vectors

class Mover {
    constructor(x, y, m) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector();
        this.acceleration.setMag(1);
        this.mass = m;
        this.radius = sqrt(this.mass) * 50;
    }

    friction() {
        let diff = height - (this.position.y + this.radius);
        if (diff < 1) {
            // Direction of friction
            let friction = this.velocity.copy();
            friction.normalize();
            friction.mult(-1);

            // magnitude of friction
            let mu = 0.1;
            let normal = this.mass;
            friction.setMag(mu * normal);
            this.applyForce(friction);
        }
    }

    edges() {
        if (this.position.y >= height - this.radius) {
            this.position.y = height - this.radius;
            this.velocity.y *= -1;
        }

        if (this.position.x >= width - this.radius) {
            this.position.x = width - this.radius;
            this.velocity.x *= -1;
        } else if (this.position.x <= this.radius) {
            this.position.x = this.radius;
            this.velocity.x *= -1;
        }
        
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        // let mouse = createVector(mouseX, mouseY);
        // this.acceleration = p5.Vector.sub(mouse, this.position);
        // this.acceleration.setMag(0.1);

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.set(0,0);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }
}