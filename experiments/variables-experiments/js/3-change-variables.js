/**
Learning how to use variables
Lam Ky Anh Do

Experimenting with p5's to use variables to create interactivity of shapes, colours and objects
**/

let backgroundShade = 0;
let circleX = 0;
//let circleX = 250;
//let circleX = 500;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2;
// If you want circleSpeed to run backwards, it needs a negative symbol OR you can leave it be here and change symbol in the draw function
let circleAcceleration = 0.25;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  // Static background colour
  //background(0);
  // Background changes according to declaration
  background(backgroundShade);
  // Change backgroundShade
  backgroundShade = backgroundShade + 1;
  // Change circleSize from declaration
  //circleSize = 50;
  // Change circleSize by letting it grows infinitely
  circleSize = circleSize + 1;
  // Change circleY values by making it going up
  circleY = circleY - 1;

  // Change same as previous but faster
  //circleSize = circleSize * 1.01;
  //circleY = circleY - 1.01;

  // Control the speed of the moving object
  circleX = circleX + circleSpeed;
  //circleX = circleX - circleSpeed;
  // Shortcut for previous
  //circleX -= circleSpeed;
  // Accelerate circleSpeed
  circleSpeed = circleSpeed + circleAcceleration;

  // Ellipse changes according to declaration
  ellipse(circleX, circleY, circleSize);


}