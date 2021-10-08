/**
Questions About Conditionals & Functions

- Display points/growing score
**/

let score = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(0);

  score++;

  fill(255);
  textAlign(LEFT, TOP);
  textSize(16);
  text(score, 410, 25);
}