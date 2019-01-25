var s = function( sketch ) {
    var rSlider, gSlider, bSlider;
    
    sketch.setup = function() {
	// create canvas
	sketch.createCanvas(710, 400);
	sketch.textSize(15);
	sketch.noStroke();
	
	// create sliders
	rSlider = sketch.createSlider(0, 255, 100);
	rSlider.position(20, 20);
	gSlider = sketch.createSlider(0, 255, 0);
	gSlider.position(20, 50);
	bSlider = sketch.createSlider(0, 255, 255);
	bSlider.position(20, 80);
    }
    
    sketch.draw = function() {
	var r = rSlider.value();
	var g = gSlider.value();
	var b = bSlider.value();
	sketch.background(r, g, b);
	sketch.text("red", rSlider.x * 2 + rSlider.width, 35);
	sketch.text("green", gSlider.x * 2 + gSlider.width, 65);
	sketch.text("blue", bSlider.x * 2 + bSlider.width, 95);
    }
};

var myp5 = new p5(s, 'p5sketch');
