// Code modified from https://p5js.org/examples/sound-frequency-spectrum.html

let mic, fft;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();

	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT();
	fft.setInput(mic);
}

function draw() {
	clear();
	let spectrum = fft.analyze();
	stroke("#2dff19");
	beginShape();
	for (i = 0; i < spectrum.length; i++) {
		var a = map(i, 0, spectrum.length, 0, windowWidth);
		vertex(a, map(spectrum[i], 0, 255, windowHeight, 0));
	}
	endShape();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
