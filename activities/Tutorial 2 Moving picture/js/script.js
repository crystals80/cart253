/**
Activity 3: Moving Picture
Lam Ky Anh Do

Draw an alien on canvas
*/

"use strict";

let bg = {
  r: 0,
  g: 0,
  b: 0,
};

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  growthRate: 1,
  speed: 1,
  fill: 255,
  alpha: 200,
};

let circle2 = {
  x: 500,
  y: 250,
  size: 75,
  sizeRatio: 0.5,
  speed: -1,
  fill: 255,
  alpha: 200,
};

/**
Description of setup
*/
function setup() {

  // Create background
  createCanvas(500, 500);
  //circle1.y = height / 2;
  //circle2.x = width;
  //circle2.y = height / 2;
  noStroke();
}


/**
Description of draw()
*/
function draw() {

  // Set up background
  background(bg.r, bg.g, bg.b);
  //bg.r += 1; bg.b += 5;
  bg.g = map(circle1.size, 100, width, 0, 255);
  bg.b = map(circle1.size, 100, width, 0, 255);

  // Left circle

  // Circle moves to center
  //circle1.x += 1;
  circle1.x += circle1.speed;
  circle1.x = constrain(circle1.x, 0, width / 2);

  // Circle size grows
  circle1.size += circle1.growthRate;
  circle1.size = constrain(circle1.size, 0, width);

  // Appearance of circle
  fill(circle1.fill, circle1.alpha);
  ellipse(circle1.x, circle1.y, circle1.size);

  // Right circle

  // Circle moves to center
  //circle2.x -= 1;
  circle2.x += circle2.speed;
  circle2.x = constrain(circle2.x, width / 2, width);

  // Circle size grows
  circle2.size = circle1.size * circle2.sizeRatio;

  // Appearance of circle
  fill(circle2.fill, circle2.alpha);
  ellipse(circle2.x, circle2.y, circle2.size);

}