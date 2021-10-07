/**
Experimenting with functions
Lam Ky Anh Do

*/

"use strict";

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0,
};

// So far we have been learning how to call a function: function
// Then define the function: setup Iname of function
// Then add the parenthesis to give extra info to function
// Then add curly brackets, which indicates instructions of what the function should do
function setup() {

  createCanvas(500, 500);
}

function draw() {
  // Universal colour background
  background(0);

  // These can also be replace with functions:
  /*circle.x += circle.vx;
  circle.y += circle.vy;

  if (circle.x > width) {
    // Replace these codes by a function that is set up to avoid repetition (QUITE USEFUL OMG)
    // circle.x = 0;
    // circle.vx += 2;
    // circle.size += 5;
    reset();
}

  fill(255, 0, 0);
  ellipse(circle.x, circle.y, circle.size);*/

  //This way it is easier to read the code and we will know exactly where we can change the code easily ==> ORGANIZED AND LEGIBLE CODE
  move();
  wrap();
  display();


}

function move() {
  circle.x += circle.vx;
  circle.y += circle.vy;
}

function wrap() {
  if (circle.x > width) {
    reset();
  }
}

function display() {
  fill(255, 0, 0);
  ellipse(circle.x, circle.y, circle.size);
};

function reset() {
  // Change whatever you need in here and will be applied to wherever you add this function
  circle.x = 0;
  circle.vx += 2;
  circle.vy -= 0.25;
  circle.size += 5;
}

function mousePressed() {
  // Same thing; it makes the code shorter BUT SHORTER DOES NOT MEAN BETTER
  // circle.x = 0;
  // circle.vx += 2;
  // circle.size += 5;
  reset();
}