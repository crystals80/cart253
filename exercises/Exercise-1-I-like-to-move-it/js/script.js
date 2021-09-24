/**
Exercise 1: I like to move it!
Lam Ky Anh Do

Exercise for class 3: Understanding and playing with variables
*/

"use strict";

let rectangle = {
  size: 50,
  shade: 255,
};

let circle = {
  x: 0,
  y: 250,
  size: 100,
  shade: 255,
  speed: 2,
  fill: 255
}

let circle1 = {
  x: 900,
  y: 250,
  size: 100,
  shade: 255,
  speed: 2,
  fill: 255
}

let circle2 = {
  x: 1400,
  y: 250,
  size: 100,
  shade: 255,
  speed: 2,
  fill: 255
}

let circle3 = {
  x: 250,
  y: 250,
  size: 100,
  shade: 255,
  speed: 2,
  fill: 255
}

//let triangle = {}

let sides = 3;
let angle, px, py;

function setup() {

  createCanvas(windowWidth, windowHeight);
  setAttributes('antialias', true);
  noCursor();
}


function draw() {

  // Set up background
  background(mouseX, mouseY, mouseY / 7);
  background(mouseX, mouseY, mouseX / 7);

  // Set up square
  rectMode(CENTER);
  noFill();
  stroke(rectangle.shade);
  strokeWeight(2);
  rect(width / 2, height / 2, mouseX, mouseY);
  rect(300, 180, mouseX, mouseY);
  rect(300, 550, mouseX, mouseY);
  rect(1235, 180, mouseX, mouseY);
  rect(1235, 550, mouseX, mouseY);

  // Set up ellipse
  ellipseMode(CENTER);
  stroke(circle.shade);
  fill(circle1.fill)
  circle1.fill = random();
  ellipse(width / 2, height / 2, 100, 100)

  // Mouse customization
  ellipseMode(CORNER);
  colorMode(RGB);
  let from = color(72, 61, 139);
  let to = color("turquoise");
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);
  fill(from);
  ellipse(mouseX, mouseY, 100, 100);
  fill(interA);
  ellipse(mouseX, mouseY, 75, 75);
  fill(interB);
  ellipse(mouseX, mouseY, 50, 50);
  fill(to);
  ellipse(mouseX, mouseY, 25, 25);
  fill(to);
  ellipse(mouseX, mouseY, 10, 10);

  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX; // Inverse X
  let iy = height - mouseY; // Inverse Y
  fill(255, 150);
  ellipse(x, height / 6, y, y);
  fill(0, 159);
  ellipse(ix, height / 6, iy, iy);

  //Moving left-to-right circle
  push();
  circle.fill = map(circle.x, 0, width, 0, 255);
  fill(circle.fill);
  circle.x += circle.speed;
  circle.x = constrain(circle.x, 0, width);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
  pop();

  // Flickering circles
  fill(circle1.fill);
  circle1.fill = random();
  circle1.speed = random(-5, 5);
  circle1.y = random(0, height);
  circle1.size = random(10, 100);
  ellipse(circle1.x, circle1.y, circle1.size);

  fill(circle2.fill);
  circle2.fill = random();
  circle2.speed = random(-5, 5);
  circle2.y = random(0, height);
  circle2.size = random(10, 100);
  ellipse(circle2.x, circle2.y, circle2.size);

  fill(circle3.fill);
  circle3.fill = random();
  circle3.speed = random(-5, 5);
  circle3.y = random(0, height);
  circle3.size = random(10, 100);
  ellipse(circle3.x, circle3.y, circle3.size);

  // Set up triangle
  fill(mouseX / 2, 100, 100)
  translate(30, 500);
  triangle(30, 75, 58, 20, 86, 75);
  triangle(30, 95, 58, 150, 86, 95);

}