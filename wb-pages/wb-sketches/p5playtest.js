let star, planet;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent("canvas-div");
	world.gravity.y = 0;

	// set up star
	star = new Sprite(canvas.w, canvas.h);
	star.diameter = 100;
	star.color = "#ffd117";
	star.strokeweight = 0;
	star.collider = "static";

	//set up planets
	planet = new Group();
	planet.vel.x = 4;
	planet.vel.y = 5;
	planet.diameter = 20;
}

function draw() {
	clear();

	textSize(24);
	textAlign(CENTER);
	fill(200);
	text(
		"Click anywhere to create new celestial body",
		canvas.w / 2,
		canvas.h * 0.6
	);

	// make planet
	if (mouse.presses()) {
		new planet.Sprite(mouse.x, mouse.y);
	}

	planet.attractTo(star, 10);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
