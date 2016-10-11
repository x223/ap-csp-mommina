var xpos = 50;
var ypos = 50;
var xdir = 10;
var ydir = 1;

function setup() { 
  createCanvas(windowHeight, windowWidth);
} 

function draw() { 
	background('black');
	noStroke();
	ellipse (xpos, ypos, 50,50);
	ellipse (xpos1, ypos1, 30,30);
	xpos = xpos + xdir;
	if (xpos === xpos1){
		ypos1 + ypos1 + 100;
		}
	if (xpos >= windowWidth || xpos <= 25){
		xdir + xdir + -1;
	}
} 

