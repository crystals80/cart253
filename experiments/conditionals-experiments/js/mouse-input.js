/**
Experimenting with conditionals
Lam Ky Anh Do

*/

let bg = {
  r: 0,
  g: 0,
  b: 0,
};


let circle = {
  x: 250,
  y: 250,
  size: 150,
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(bg.r, bg.g, bg.b);
  ellipse(circle.x, circle.y, circle.size);
}

function mousePressed() {
  // circle.x = mouseX;
  // circle.y = mouseY;

  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);
}

/*function mouseMoved() {
  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);
}*/

function mouseDragged() {
  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);
}