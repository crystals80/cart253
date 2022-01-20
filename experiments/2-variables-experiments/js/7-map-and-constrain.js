/**
Learning how to use variables
Lam Ky Anh Do

Experimenting with p5's to use variables to create interactivity of shapes, colours and objects
**/

//Declaration of Variables
let backgroundShade = 0;
let circle = {
  x: 250,
  y: 250,
  size: 100,
  speed: 1,
  fill: 255
}

function setup() {
  createCanvas(500, 500);

}

function draw() {
  // Background changes according to declaration
  background(backgroundShade);

  circle.x += circle.speed;
  circle.x = constrain(circle.x, 0, width);
  noStroke();
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);

  // Smooth size change
  //circle.size = map(mouseY, 0, height, 50, 500);
  // To inverse previous
  circle.size = map(mouseY, height, 0, 50, 500);

  // Smooth colour change
  //circle.fill = map(mouseX, 0, width, 0, 255);
  circle.fill = map(circle.x, 0, width, 0, 255);
  fill(circle.fill);
  fill(mouseX);


}