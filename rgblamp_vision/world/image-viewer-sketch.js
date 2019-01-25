var s = function( sketch ) {
    var rSlider, gSlider, bSlider;
    var img;
    var oriimg;
    var spotx=100;
    var spoty=100;
    
    sketch.mousePressed =function() {
	if(sketch.mouseX<sketch.width &&
	   sketch.mouseY<sketch.height) {
	    spotx=sketch.mouseX;
	    spoty=sketch.mouseY;
	}
	return true;
    }
    sketch.mouseDragged =function() {
	if(sketch.mouseX<sketch.width &&
	   sketch.mouseY<sketch.height) {
	    spotx=sketch.mouseX;
	    spoty=sketch.mouseY;
	}
	return true;
    }
    sketch.gotFile = function (file) {
	// If it's an img file
	if (file.type === 'image') {
	    // Create an img DOM element but don't show it
	    sketch.loadImage(file.data, function(loadedimg) {
		oriimg=loadedimg;
		oriimg.loadPixels();
		oriimg.updatePixels();
		img=new sketch.createImage(oriimg.width,oriimg.height);
		img.loadPixels();
	    });
	} else {
	    console.println('Not an image file!');
	}
    }

    sketch.setup = function() {
	// create canvas
	var c=sketch.createCanvas(710, 400);
	sketch.textSize(15);
	sketch.noStroke();
	sketch.frameRate(10);
	rSlider=sketch.select("#rslider");
	gSlider=sketch.select("#gslider");
	bSlider=sketch.select("#bslider");
	rsSlider=sketch.select("#rsslider");
	gsSlider=sketch.select("#gsslider");
	bsSlider=sketch.select("#bsslider");
	isSlider=sketch.select("#isslider");
	c.drop(sketch.gotFile);
    }
    
    sketch.draw = function() {
	
	var r = rSlider.value();
	var g = gSlider.value();
	var b = bSlider.value();
	var rs = rsSlider.value();
	var gs = gsSlider.value();
	var bs = bsSlider.value();
	var is = isSlider.value();
	var maxdist=is/100*2*sketch.width;
	if(oriimg) {
	    for (var x = 0; x < img.width; x++) {
		for (var y = 0; y < img.height; y++ ) {
		    // Calculate the 1D location from a 2D grid
		    var loc = (x + y*img.width)*4;
		    // Get the R,G,B values from img
		    var red,green,blue;
		    red = oriimg.pixels[loc];
		    green = oriimg.pixels[loc+1];
		    blue = oriimg.pixels[loc+2];

		    var d = Math.abs(sketch.dist(x, y, spotx, spoty));
		    var adjustbrightness = 0;
		    if(d<maxdist) {
			adjustbrightness = (maxdist-d)/maxdist;
		    }
		    red=sketch.constrain(red*(r/100+(1-r/100)*(rs/100*adjustbrightness)),
					 0, 255);
		    green=sketch.constrain(green*(g/100+(1-g/100)*(gs/100*adjustbrightness)),
					   0, 255);
		    blue=sketch.constrain(blue*(b/100+(1-b/100)*(bs/100*adjustbrightness)),
		   			  0, 255);
		    var pixloc = loc;
		    img.pixels[pixloc] = red;
		    img.pixels[pixloc+1] = green;
		    img.pixels[pixloc+2] = blue;
		    img.pixels[pixloc+3] = 255;
		}
	    }
	    img.updatePixels();
	    sketch.image(img, 0, 0, sketch.width, sketch.height);
	    //sketch.image(oriimg, 200, 0);
	} else {
	    sketch.background(r*2.5, g*2.5, b*2.5);
	    sketch.fill(255);
	    sketch.noStroke();
	    sketch.textSize(24);
	    sketch.textAlign(sketch.CENTER);
	    sketch.text('Drag an image file onto the canvas.', sketch.width/2, sketch.height/2);
	}
    }
};

var myp5 = new p5(s, 'p5sketch');


