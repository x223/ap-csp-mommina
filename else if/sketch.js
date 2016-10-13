var bgColor = 'white'

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  fill(bgColor)
    // fill(bgColor);
   ellipse(250,250,mouseY,mouseY)
  if (mouseX < 2 * windowWidth / 5) {
    bgColor = '#6638F0';
  } else if (mouseX < 3 * windowWidth / 5) {
    bgColor = '#890424';
  } else if (mouseX < 4 * windowWidth / 5) {
    bgColor = '#20C8B6';
  } else if (mouseX < windowWidth / 5) {
    bgColor = '#82BCFB';
  } else {
    bgColor = '#E12874';
  }
}