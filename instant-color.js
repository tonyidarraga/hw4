function setup() {
	createCanvas(400, 400);
	colorMode(HSB, width, height, 100);
}

function draw() {
	var x = random(width);
	var y = random(height);

	for (var x = 0; x < height; x = x + 1) {
		for (var y = 0; y < width; y = y + 1) {
			stroke(x, y, 100);
			point(x, y);
		}
	}
}
