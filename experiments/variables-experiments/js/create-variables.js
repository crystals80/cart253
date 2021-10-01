/**
Learning how to use variables
Lam Ky Anh Do

Experimenting with p5's to use variables to create interactivity of shapes, colours and objects
**/

// Variables Declaration Name can use symbols such as _ and & but recommended not to use them and the second words and more should be Capitalized

let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 100;

// Undefined makes it a default but causes trouble so recommended not to use
//let circleSize = undefined;

function setup() {

  // Create canvas
  createCanvas(500, 500);
  //circleSize = 100; Don't need to write it here since it can be determined in declaring the variable
}

function draw() {

  // Static background colour
  //background(0);
  // Background changes according to declaration
  background(backgroundShade);

  // Unchangeable numbers
  //ellipse(250, 250, 400, 400);
  //ellipse(250, 250, 300, 300);
  //ellipse(250, 250, 200, 200);
  //ellipse(250, 250, 100, 100);

  // Static shape
  //ellipse(250, 250, 100);
  // Shape changes according to declaration
  //ellipse(250, 250, circleSize);
  ellipse(circleX, circleY, circleSize)




}