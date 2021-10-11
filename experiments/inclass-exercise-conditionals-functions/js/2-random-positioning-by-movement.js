/**
Questions About Conditionals & Functions

- random positioning followed by movement
- target as cursor
**/

let score = 0;

let startCircle = {
  x: undefined,
  y: undefined,
  size: 100,
}

let target = {
  x: undefined,
  y: undefined,
  size: 50,
  vx: 0,
  vy: 0,
}

function setup() {
  createCanvas(500, 500);

  // Appear at random places
  target.x = random(0, width);
  target.y = random(0, height);
  target.vx = random(-1, 1);
  target.vy = random(-1, 1);

}

function draw() {
  background(0);

  // Target as automated shape - Velocity-based movement
  //target.x += target.vx;
  //target.y += target.vy;

  // Target as mouse - Mouse-based movement
  target.x = mouseX;
  target.y = mouseY;

  score++;


  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(target.x, target.y, target.size);
  pop();


  displayScore();
}

function displayScore() {
  push();
  fill(255);
  textAlign(LEFT, TOP);
  textSize(16);
  text(score, 410, 25)
  pop();
}