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
  size: 100,
  vx: 0,
  vy: 0,
}

let state = `title`; // title can be named title and game

function setup() {
  createCanvas(500, 500);

  startCircle.x = width / 2;
  startCircle.y = height / 2;

  // Appear at random places
  //target.x = random(0, width);
  //target.y = random(0, height);
  target.vx = random(-1, 1);
  target.vy = random(-1, 1);

  //Appear at the center of canvas
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

  target.x += target.vx;
  target.y += target.vy;


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