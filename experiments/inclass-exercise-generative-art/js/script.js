/**
Learning how to use variables
Lam Ky Anh Do

Experimenting with p5's to use variables to create interactivity of shapes, colours and objects
**/

"use strict";

let rectangle = {
  x: 250,
  y: 250,
  size: 50,
  shade: 255,
  sizeAngle: 0,
  angle: 0
};

function setup() {

  createCanvas(500, 500);

  background(0);
}

function draw() {

  rectangle.sizeAngle = rectangle.sizeAngle + 0.1;
  rectangle.size = map(sin(rectangle.sizeAngle), -1, 1, 500, 500);
  rectangle.shade = rectangle.shade + 2;


  rectMode(CENTER);
  noFill();
  stroke(rectangle.shade);
  rectangle.angle += 0.1;
  translate(rectangle.x, rectangle.y);
  rotate(rectangle.angle);
  rect(rectangle.x, rectangle.y, rectangle.size, rectangle.size);


}