let angle = 0;
let inc;
let diameter;
let radius;

function setup() {
	createCanvas(400, 400);
	// P5 doesn't let you use PI in global scope
	inc = - PI / 64;
	diameter = width * (2 / 3);
	radius = diameter / 2;
	angleMode(RADIANS);
}

function draw() {
	background('white');
	push();
		translate(width / 2, height / 2);
		noFill();
		circle(0, 0, diameter);

		line(0, 0, radius, 0);
		arc(0, 0, 50, 50, angle, 0);


		let x = cos(angle) * radius;
		let y = sin(angle) * radius;

		// console.log(x, y);
		line(0, 0, x, y);

		fill('black');

		textSize(32);
		text("θ", 25, -25);

		let angleFormatted = abs(round((angle / PI) * 10) / 10);

		text("θ = " + angleFormatted + "π", -radius, radius + 25);

		let xFormatted = round(cos(angle) * 10) / 10;
		let yFormatted = round(sin(angle) * 10) / 10;
		text("x = " + xFormatted, radius - 50, -radius - 25);
		text("y = " + yFormatted, radius - 50, -radius);

		circle(x, y, 25);
		angle += inc;

		if (angle <= -PI * 2) {
			angle = 0;
		}
		
	pop();
}