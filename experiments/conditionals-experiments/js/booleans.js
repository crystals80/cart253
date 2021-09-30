/**
Experimenting with conditionals
Lam Ky Anh Do

*/

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

    if (displayCircle) {
      ellipse(250, 250, 100, 100);
    }
  }