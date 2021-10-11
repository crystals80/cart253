/**
Questions About Conditionals & Functions

- using acceleration with automated movement
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
  size: 75,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  tx: 0,
  ty: 1000,
}

let state = `title`; // title can be named title and game

function setup() {
  createCanvas(500, 500);

  startCircle.x = width / 2;
  startCircle.y = height / 2;

  // Appear at the center of canvas
  target.x = width / 2;
  target.y = height / 2;
}

function draw() {
  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();
  }

}

function title() {
  background(255, 255, 0);

  let d = dist(mouseX, mouseY, startCircle.x, startCircle.y);
  if (d < startCircle.size / 2) {
    state = `game`;
  }

  push();
  noStroke();
  fill(0);
  ellipse(startCircle.x, startCircle.y, startCircle.size);
  pop();

}

function game() {
  background(0); // If taken out, then the red target will drawn the canvas

  score++;

  moveTarget();
  displayTarget();
  displayScore();
}

function moveTarget() {

  target.ax = map(noise(target.tx), 0, 1, -.25, .25);
  target.ay = map(noise(target.ty), 0, 1, -.25, .25);

  target.vx += target.ax;
  target.vy += target.ay;

  target.vx = constrain(target.vx, -30, 30);
  target.vy = constrain(target.vy, -30, 30);

  target.x += target.vx;
  target.y += target.vy;

  //target.x = constrain(target.x, 0, width);
  //target.y = constrain(target.y, 0, height);

  // For a more natural constrain
  if (target.x < 0) {
    target.x += width;
  } else if (target.x > 0) {
    target.x > width;
  }
  if (target.y < 0) {
    target.y += height;
  } else if (target.y > 0) {
    target.y > height;
  }


  target.tx += 0.01;
  target.ty += 0.01;
}

function displayTarget() {

  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(target.x, target.y, target.size);
  pop();

}

function displayScore() {
  push();
  fill(255);
  textAlign(LEFT, TOP);
  textSize(16);
  text(score, 410, 25)
  pop();
}