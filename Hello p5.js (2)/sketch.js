var fill1 = 'white'
var fill2 = 'red'
var fill3 = 'green'
var fill4 = 'yellow'

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  fill(fill1)
    // fill(bgColor);
   ellipse(200,250,50,50)
   fill (fill2);
    ellipse(200,310,50,50)
     fill (fill3);
     ellipse(200,370,50,50)
    if (mouseY< windowHeight / 3){
      fill1 = 'red'
      fill2 = 'white'
      fill3 = 'white'
    }
   else if (mouseY < 2*windowHeight / 3){
      fill1 = 'white'
      fill2 = 'yellow'
      fill3 = 'white'
    }
    else if (mouseY < windowHeight ){
      fill1 = 'white'
      fill2 = 'white'
      fill3 = 'green'
    }
}
