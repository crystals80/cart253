/**
Questions About Conditionals & Functions

- noise
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
  size: 100,
  vx: undefined,
  vy: undefined,
  t: 0,
  tx: 0,
  ty: 0,
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
  background(0);

  score++;

  moveTarget();
  displayTarget();
  displayScore();
}

function moveTarget() {

  // Target as automated shape - Velocity-based movement
  //target.x += target.vx;
  //target.y += target.vy;

  // Target moves in random directions
  //target.vx += random(-1, 1);
  //target.vy += random(-1, 1);

  // Appear at random places
  //target.x = random(0, width);
  //target.y = random(0, height);

  // Target appear in random places
  //target.x = map(random(), 0, 1, 0, width);
  //target.y = map(random(), 0, 1, 0, height);

  // Target appear in randomly BUT SMOOTHLY IN CONTROL
  //target.x = map(noise(0), 0, 1, 0, width);
  //target.y = map(noise(0), 0, 1, 0, height);

  // Target appearing randomly and moving diagonally
  //target.x = map(noise(target.t), 0, 1, 0, width);
  //target.y = map(noise(target.t), 0, 1, 0, height);

  // Target appearing randomly and moving in all directions
  //target.x = map(noise(target.tx), 0, 1, 0, width);
  //target.y = map(noise(target.ty), 0, 1, 0, height);

  // Target appearing in the CENTER and moving in all directions and STAY IN CANVAS
  target.vx = map(noise(target.tx), 0, 1, -3, 3);
  target.vy = map(noise(target.ty), 0, 1, -3, 3);

  target.x += target.vx;
  target.y += target.vy;

  target.x = constrain(target.x, 0, width);
  target.y = constrain(target.y, 0, height);

  // Moving rather than jumping BUT only move diagonally
  //target.t += 0.01;
  // Moving smoothly like the previous but in different direction
  target.tx += 0.03;
  target.ty += 0.05;
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