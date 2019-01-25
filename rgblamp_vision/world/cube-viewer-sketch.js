var s = function( sketch ) {
    var rSlider, gSlider, bSlider;
    var radius = 25;
    var circles = [
	{ x: -150, y: 150, color:' #FF0000', active: false },
	{ x: 0, y: 150, color: '#00FF00', active: false },
	{ x: 150, y: 150, color: '#0000FF', active: false }
    ]
    sketch.mousePressed =function() {
	var X=sketch.mouseX-sketch.width/2;	
	var Y=sketch.mouseY-sketch.height/2;
	for (var i = 0; i < circles.length; i++) {
	    var circle = circles[i],
		distance = sketch.dist(X, Y, circle.x, circle.y);
	    if (distance < radius) {
		circle.active = true;
	    } else {
		circle.active = false;
	    }
	}
	return true;
    }
    sketch.mouseDragged= function() {
	var X=sketch.mouseX-sketch.width/2;	
	var Y=sketch.mouseY-sketch.height/2;
	for (var i = 0; i < circles.length; i++) {
	    var circle = circles[i];
	    if (circle.active) {
		circle.x = X;
		circle.y = Y;
		break;
	    }
	}
	return true;
    }
    sketch.setup = function() {
	// create canvas
	var c=sketch.createCanvas(710, 400, sketch.WEBGL);
	sketch.frameRate(30);
	sketch.ellipseMode(sketch.RADIUS);
	rSlider=sketch.select("#rslider");
	gSlider=sketch.select("#gslider");
	bSlider=sketch.select("#bslider");
	rsSlider=sketch.select("#rsslider");
	gsSlider=sketch.select("#gsslider");
	bsSlider=sketch.select("#bsslider");
    }
    
    sketch.draw = function() {
	var r = rSlider.value();
	var g = gSlider.value();
	var b = bSlider.value();
	var rs = rsSlider.value();
	var gs = gsSlider.value();
	var bs = bsSlider.value();
	sketch.background(0);

	sketch.ambientLight(r*2.5,g*2,5,b*2.5);
	sketch.directionalLight(rs*2.5, 0, 0, -circles[0].x, -circles[0].y, -10);
	sketch.directionalLight( 0, gs*2.5, 0, -circles[1].x, -circles[1].y, -10);
	sketch.directionalLight(0, 0, bs*2.5, -circles[2].x, -circles[2].y, -10);

	sketch.push();
	sketch.translate(0, 0, -100);
	sketch.rotateZ(sketch.frameCount * 0.01);
	sketch.rotateX(sketch.frameCount * 0.02);
	sketch.rotateY(sketch.frameCount * 0.01);
	sketch.specularMaterial(255);
	sketch.box(100, 100, 100);
	sketch.pop();
	for (var i = 0; i < circles.length; i++) {
	    var circle = circles[i];
	    sketch.noStroke();
	    sketch.fill(circle.color);
	    sketch.ellipse(circle.x, circle.y, radius, radius);
	}
    }
};

var myp5 = new p5(s, 'p5sketch');


