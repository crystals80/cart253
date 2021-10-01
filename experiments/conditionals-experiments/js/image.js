/**
Experimenting with conditionals
Lam Ky Anh Do

*/

let clownImage;

function preload() {
  clownImage = loadImage('assets/images/clown.png');
}


function setup() {
  createCanvas(500, 500);
}


function draw() {
  background(0);

  image(clownImage, 0, 0);
  push();
  imageMode(CENTER);
  image(clownImage, mouseX, mouseY, 50, 50);
  pop();
}