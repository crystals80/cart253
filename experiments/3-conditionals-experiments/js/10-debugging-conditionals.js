/**
Experimenting with conditionals
Lam Ky Anh Do

*/
let circle = {
  x: 250,
  y: 250,
  size: 100,
};

function setup() {
  createCanvas(500, 500);
}


function draw() {
  background(0);

  /*if (mouseX < width / 2) {
    fill(255, 0, 0);
  } else {
    fill(0, 255, 0);
  }*/

  let mouseIsLeft = undefined;

  if (mouseX > 0) {
    console.log("Mouse is to the right...")
    mouseIsLeft = false;
  } else {
    console.log("Mouse is to the left...")
    mouseIsLeft = true;;
  }


  ellipse(circle.x, circle.y, circle.size);
}