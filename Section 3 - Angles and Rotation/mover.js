// Mover - a little moving ball in a world of vectors

class Mover {
    constructor(x, y, m) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.acceleration = createVector();
        this.acceleration.setMag(1);
        this.mass = m;
        this.radius = sqrt(this.mass) * 50;

        this.angle = 0;
        this.angleVel = 0;
        this.angleAcc = 0;
    }

    // (-1/2) * rho * (v^2) * A * C_d * ^v 
    drag(c) {
        // my version: I wanted to include area to be more accurate but got some weird errors

        // let coeffecientOfDrag = 0.1;
        // let drag = this.velocity.copy();
        // drag.normalize();
        // drag.mult(-1);
        // let speedSq = this.velocity.magSq();
        // let area = PI * pow(this.radius, 2);
        // drag.setMag(speedSq * area * coeffecientOfDrag)
        // this.applyForce(drag);

        let drag = this.velocity.copy();
        drag.normalize();
        drag.mult(-1);

        let speedSq = this.velocity.magSq();;
        drag.setMag(c * speedSq);

        this.applyForce(drag);
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
        
        // this.angleA = this.acceleration.y / 50.0;

        // this.angleVel += this.angleAcc;
        // this.angle += this.angleVel;

        this.angle = this.velocity.heading();

        this.acceleration.set(0,0);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        push();
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        triangle(-this.radius, -this.radius / 2, -this.radius, this.radius / 2, this.radius, 0);
        pop();
    }
}