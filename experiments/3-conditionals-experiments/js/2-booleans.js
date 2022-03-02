/**
Experimenting with conditionals
Lam Ky Anh Do

*/

let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 10,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
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
  } else {
    ellipse(250, 250, 100, 100);
  }
}