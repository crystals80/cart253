/**
Learning how to use variables
Lam Ky Anh Do

Experimenting with p5's to use variables to create interactivity of shapes, colours and objects
**/

/*****************
DEBUGGING VARIABLES uses Javascript console!!!
Javacript console > Javacript Sources > Watch (basically adding the variables there to see if it works for debugging)
*****************/

let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(backgroundShade);
  circleX += circleSpeed;
  circleSpeed = circleSpeed + circleAcceleration;

  ellipse(circleX, circleY, circleSize);

  // Terms should be the same as log or else it doesn't work
  //console.log("circleX: " + circleX);
  // Javascript recently introduced function
  //console.log(`circleY: ${circleY}`);
  // And then jam everything in one line
  console.log(`circleX: ${circleX}, circleY:${circleY},circle.size: ${circleSize}, circleSpeed:${circleSpeed}`);

}