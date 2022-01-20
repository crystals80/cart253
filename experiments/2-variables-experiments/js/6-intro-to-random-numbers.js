/**
Learning how to use variables
Lam Ky Anh Do

Experimenting with p5's to use variables to create interactivity of shapes, colours and objects
**/

let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1,
  fill: 0,
}

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(backgroundShade);

  // Not very efficient since fill will never be of value 0 but dark gray at max
  //circle.fill = random();
  // BUT random numbers can give flickering effect
  //circle.fill = random(0, 255);
  circle.fill = random(0, 255);
  fill(circle.fill);

  circle.x += circle.speed;

  // They can play the speed & position too
  circle.speed = random(-5, 5);
  circle.y = random(0, height);
  circle.size = random(10, 100);

  ellipse(circle.x, circle.y, circle.size);

  // You can use "let" in a function
  let randomNumber = random();
  // Never get #1 for random numbers, rather it will be 0 > 1
  console.log(randomNumber);
}