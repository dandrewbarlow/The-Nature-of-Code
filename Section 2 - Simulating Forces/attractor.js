class Attractor {

    constructor(x, y, m) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = m;
        this.radius = sqrt(this.mass) * 10;

    }

    show() {
        fill(255);
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }

    attract(mover) {

        let force = p5.Vector.sub(this.position, mover.position);
        let distanceSq = constrain(force.magSq(), 25, 250);

        let G = 5;

        let strength = G *(this.mass * mover.mass) / distanceSq;

        force.setMag(strength);

        mover.applyForce(force);
        
    }
}