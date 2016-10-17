var strokeColor ='black';

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // background('green')
  if (mouseIsPressed){
    stroke(strokeColor);
    line(pmouseX, pmouseY, mouseX,mouseY);
}
}

  function keyTyped() {
  if (key === 'g') {
    strokeColor = 'green';
  } else if (key === 'r') {
    strokeColor = '#E32173';
    weight = 10
  }
}
