// Determines random colours for the shapes
const colors = ["#db0202", "#ffef0f", "#56d600", "#7300b5"];
const sides = [3, 4, 5, 6, 7, 8, 9, 10];

//Make canvas resize to browser window
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	noStroke();
	fill(random(colors));

	beginShape();
	var x = random(windowWidth);
	var y = random(windowHeight);
	var numSides = random(sides);

	for (let i = 0; i <= numSides; i++) {
		//The following code was created with the help of ChatGPT and then modified to suit my program.
		var angle = map(i, 0, numSides, 0, TWO_PI); // Map angle between 0 and TWO_PI
		var distance = random(0, 75); // Random distance from center
		var xPos = x + cos(angle) * distance; // Calculate x position
		var yPos = y + sin(angle) * distance; // Calculate y position
		vertex(xPos, yPos); // Add vertex
	}

	endShape(CLOSE);
}
