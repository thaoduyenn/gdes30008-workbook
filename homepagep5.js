let laserBlast, ship;

function preload() {
	laserBlast = loadSound("assets/laser.wav");
	ship = loadImage("assets/spaceship.png");
}

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent("home-canvas");

	var shipx = windowWidth - windowWidth * 0.0675;
	var shipy = windowHeight - windowHeight * 0.125;

	// Spaceship sprite from https://millionthvector.blogspot.com/p/free-sprites.html.
	spaceship = new Sprite(shipx, shipy);

	spaceship.img = ship;
	spaceship.scale = windowHeight / 1250;
	spaceship.collider = "none";
	spaceship.layer = 2;

	// Soundforms
	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT();
	fft.setInput(mic);
}

function draw() {
	clear();
	spaceship.rotateTowards(mouse, 0.5, 90);

	// laser shoots from ship on press
	if (mouse.presses()) {
		var laserx = windowWidth - windowWidth * 0.0675;
		var lasery = windowHeight - windowHeight * 0.125;
		laser = new Sprite(laserx, lasery);
		laser.w = 7;
		laser.h = 50;
		laser.color = "#2dff19";
		laser.strokeWeight = 0;
		laser.collider = "none";
		laser.layer = 1;

		// Laser life proportional to distance from mouse.

		var d = dist(laserx, lasery, mouse.x, mouse.y);
		var l = map(d, 0, dist(laserx, lasery, 0, 0), 0, 120);
		laser.life = l;

		laser.rotateMinTo(mouse, 20, 90);
		laser.moveTo(mouse.x, mouse.y, 20);

		// Play laser blast
		laserBlast.play();
	}

	let spectrum = fft.analyze();
	stroke("#2dff19");
	noFill();
	beginShape();
	for (i = 0; i < spectrum.length; i++) {
		var a = map(i, 0, spectrum.length, 25, windowWidth * 0.15 + 25);
		vertex(
			a,
			map(spectrum[i], 0, 255, windowHeight - 25, windowHeight * 0.85 - 25)
		);
	}
	endShape();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
