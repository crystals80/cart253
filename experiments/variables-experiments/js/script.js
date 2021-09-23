/**
Learning how to use variables
Lam Ky Anh Do

Experimenting with p5's to use variables to create interactivity of shapes, colours and objects
**/

"use strict";

// Declare variables in Creating & Changing Variables
let backgroundShade = 0;
//let circleX = 250;
//let circleX = 500;
//let circleX = 0
//let circleY = 250;
//let circleSize = 200;
//let circleSpeed = 2;
// If you want circleSpeed to run backwards, it needs a negative symbol OR you can leave it be here and change symbol in the draw function
//let circleSpeed = 2;
//let circleAcceleration = 0.25;

// Undefined makes it a default but causes trouble
//let circleSize = undefined;

// Declare variables in Intro to Javascript Objects
// Instead of writing multiples "let," you can write it like this
let circle = {
  x: 0,
  y: 250,
  size: 200,
  speed: 2
}

/**
Exercises 1,2,3,4,5
**/
function setup() {

  // Create canvas
  createCanvas(500, 500);
  //createCanvas(800, 500);
  //createCanvas(windowWidth, windowHeight);


}

/**
Intro to Variables
**/
//function draw() {

/*background(255, 220, 220);

// Limited colours
//background(mouseX, mouseY, 0)

// A bit more colours
background(mouseX, mouseY, mouseY / 2);

rectMode(CENTER);
//rect(250, 250, 100, 100);

// Rect stays in mid of any canvas
rect(width / 2, height / 2, 100, 100);

// Mouse with rect following it
rect(mouseX, mouseY, 100, 100);

// Mouse with rect following opp side
//rect(mouseY, mouseX, 100, 100);

// Mouse moves and changes size of rect
//rect(250, 250, mouseX, mouseY);*/

/**
Creating & Changing Variables + Intro to Javascript Objects
**/
function draw() {

  // Creating variables

  // Static background colour
  background(0);
  // Background changes according to declaration
  background(backgroundShade);
  // Change backgroundShade
  backgroundShade = backgroundShade + 1;

  //ellipse(250, 250, 400, 400);
  //ellipse(250, 250, 300, 300);
  //ellipse(250, 250, 200, 200);
  //ellipse(250, 250, 100, 100);

  // Static shape
  //ellipse(250, 250, 100);
  // Shape changes according to declaration
  //ellipse(250, 250, circleSize);

  // Change circleSize from declaration
  //circleSize = 50;
  // Change circleSize by letting it grows infinitely
  //circleSize = circleSize + 1;
  // Change circleY values by making it going up
  //circleY = circleY - 1;

  // Change same as previous but faster
  //circleSize = circleSize * 1.01;
  //circleY = circleY - 1.01;

  // Control the speed of the moving object
  //circleX = circleX + circleSpeed;
  //circleX = circleX - circleSpeed;
  // Shortcut for previous
  //circleX -= circleSpeed;
  // Accelerate circleSpeed
  //circleSpeed = circleSpeed + circleAcceleration;

  // Ellipse changes according to declaration
  //ellipse(circleX, circleY, circleSize);

  circle.x += circle.speed;
  ellipse(circle.x, circle.y, circle.size);

}