/**
Learn about "use strict"
Lam Ky Anh Do

Experimenting "use strict"
*/

// "use strict" is helpful for debugging?
"use strict";

let circle = {
  x: 0,
  y: 0,
  size: 100,
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  circle.x = mouseX;
  circle.y = mouseY;

  ellipse(circle.x, circle.y, circle.size);
}