var brushSize = 1;
var brushCol = "#000000";

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent("canvas-div");
	background(255, 255, 255);
	frameRate(60);
}

function draw() {
	if (mouseIsPressed === true) {
		fill(brushCol);
		stroke(brushSize);
		line(mouseX, mouseY, pmouseX, pmouseY);
	}

	//instructions
	noStroke();
	textSize(24);
	text("Use [ and ] to adjust brush size.", 5, 25);
}

function keyTyped() {
	if (key === "[" && brushSize > 1) {
		brushSize -= 1;
	} else if (key === "]") {
		brushSize += 1;
	}
	strokeWeight(brushSize);
}
