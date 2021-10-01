/**
Learning how to use variables
Lam Ky Anh Do

Experimenting with p5's to use variables to create interactivity of shapes, colours and objects
**/

let backgroundShade = 0;
// Instead of writing multiples "let," you can write it like this:
let circle = {
  x: 0,
  y: 250,
  size: 200,
  speed: 2,
  fill: 255
}

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(backgroundShade);
  circle.x += circle.speed;
  ellipse(circle.x, circle.y, circle.size);
}