// This code was modified from the example provided at https://editor.p5js.org/ffd8/sketches/wwo8xjaIt.

let glitch;

function setup() {
	var canvas = createCanvas(480, 384);
	canvas.parent("canvas-div");

	imageMode(CENTER);

	glitch = new Glitch();
	loadImage("wb-images/wb-09-01.jpg", function (im) {
		glitch.loadImage(im);
	});
}

function draw() {
	glitch.resetBytes();

	glitch.replaceBytes(96, 21);
	glitch.randomBytes(1);

	glitch.buildImage();
	image(glitch.image, width / 2, height / 2);
}
