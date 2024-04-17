function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent("home-canvas");

	spaceship = new Sprite(
		windowWidth - windowWidth * 0.0675,
		windowHeight - windowHeight * 0.125
	);

	// Sprite from https://millionthvector.blogspot.com/p/free-sprites.html.

	spaceship.img = "assets/spaceship.png";
	spaceship.scale = windowHeight / 1250;
	spaceship.collider = "none";

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
		laser = new Sprite(
			windowWidth - windowWidth * 0.0675,
			windowHeight - windowHeight * 0.125
		);
		laser.w = 7;
		laser.h = 50;
		laser.color = "#2dff19";
		laser.strokeWeight = 0;
		laser.collider = "none";
		laser.rotateMinTo(mouse, 20, 90);
		laser.moveTo(mouse.x, mouse.y, 20);
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
