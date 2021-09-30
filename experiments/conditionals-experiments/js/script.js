/**
Experimenting with conditionals
Lam Ky Anh Do

*/

"use strict";

let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 10,
}


/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

}


/**
Description of draw()
*/
function draw() {
  background(backgroundShade);

  circle.x = circle.x + circle.speed;
  ellipse(circle.x, circle.y, circle.size);

  //Conditionals
  if (circle.x > width) {
    circle.speed = -circle.speed;
  }
  if (circle.x < 0) {
    circle.speed = -circle.speed;
  }
  if (mouseY < height / 2) {
    fill(255, 0, 0);
  }
  if (mouseY > height / 2) {
    fill(0, 0, 255);
  }

  //More Conditionals

  if (mouseX < width / 2) {
    fill(255, 0, 0);
  }
  /*else {
    fill(0, 255, 0);
  }
  else if (mouseX < 2 * width / 3) {
    fill(0, 255, 0);
  } else {
    fill(0, 0, 255);
  }

  if (circle.x > width / 2 && circle.x < 2 * width / 3) {
    fill(255)
  }

  if (circle.x < width / 2 || circle.x > 2 * width / 3) {
    fill(255)
  }*/

  //Booleans
  if (mouseIsPressed === true) {
    background(255);
  } else {
    background(backgroundShade);
  }
  if (keyIsPressed) {
    background(255);
  } else {
    background(backgroundShade);
  }

  let displayCircle = false;

  if (mouseIsPressed) {
    displayCircle = true;
  }

  if (displayCircle) {
    ellipse(250, 250, 100, 100);
  }



}