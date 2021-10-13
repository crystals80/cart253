/**
Title of Project
Lam Ky Anh Do

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let leftScreen;
let rightScreen;

let state = `title`; // Possible states are title, animation and ending

// Spawning title screen balls
let b1 = {
  x: 100,
  y: 100,
  size: 60,
  vx: 2.8,
  vy: 2.2,
}
let b2 = {
  x: 400,
  y: 250,
  size: 10,
  vx: 2,
  vy: 3,
}
let b3 = {
  x: 100,
  y: 500,
  size: 32,
  vx: 2,
  vy: 2.5,
}
let b4 = {
  x: 1000,
  y: 300,
  size: 5,
  vx: 1.8,
  vy: 2.4,
}
let b5 = {
  x: 700,
  y: 400,
  size: 43,
  vx: 2,
  vy: 2.6,
}
let b6 = {
  x: 1000,
  y: 450,
  size: 20,
  vx: 2.5,
  vy: 2.5,
}
let b7 = {
  x: 550,
  y: 320,
  size: 80,
  vx: 2.3,
  vy: 3.7,
}
let b8 = {
  x: 880,
  y: 505,
  size: 28,
  vx: 1.5,
  vy: 2.5,
}
let b9 = {
  x: 50,
  y: 300,
  size: 28,
  vx: 2,
  vy: 2.9,
}
let b10 = {
  x: 600,
  y: 50,
  size: 24,
  vx: 3,
  vy: 1.8,
}
let b11 = {
  x: 900,
  y: 270,
  size: 15,
  vx: 2.9,
  vy: 2,
}
let b12 = {
  x: 140,
  y: 500,
  size: 22,
  vx: 3,
  vy: 4,
}
// Symmetry is the number of reflecting surface of kaleidoscope.
let symmetry = 8;

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Divide canvas in 2 to create different simulation
  leftScreen = createGraphics(windowWidth / 2, windowHeight);
  rightScreen = createGraphics(windowWidth / 2, windowHeight);

  angleMode(DEGREES);
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `message`) {
    message();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `ending`) {
    ending();
  }

}

function title() {
  bouncingBalls();
  // Title screen
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(64);
  text(`Hello there!`, width / 2, height / 2.3);
  textSize(25);
  text(`~ Take a moment to enjoy the visuals ~`, width / 2, height / 1.8);
  textSize(10);
  text(`Click anywhere to move to the next step!`, width / 2, height / 1.1);
}

function bouncingBalls() {
  // Setup of balls
  ellipseMode(RADIUS);
  noStroke();
  // let r = random(0, 255);
  // let g = random(0, 255);
  // let b = random(0, 255);
  // fill(r, g, b);

  // Ball movement
  b1.x += b1.vx;
  b1.y += b1.vy;

  b2.x += b2.vx;
  b2.y += b2.vy;

  b3.x += b3.vx;
  b3.y += b3.vy;

  b4.x += b4.vx;
  b4.y += b4.vy;

  b5.x += b5.vx;
  b5.y += b5.vy;

  b6.x += b6.vx;
  b6.y += b6.vy;

  b7.x += b7.vx;
  b7.y += b7.vy;

  b8.x += b8.vx;
  b8.y += b8.vy;

  b9.x += b9.vx;
  b9.y += b9.vy;

  b10.x += b10.vx;
  b10.y += b10.vy;

  b11.x += b11.vx;
  b11.y += b11.vy;

  b12.x += b12.vx;
  b12.y += b12.vy;

  // Keep ball within canvas
  if (b1.x < b1.size || b1.x > width - b1.size) {
    b1.vx *= -1;
  }
  if (b1.y < b1.size || b1.y > height - b1.size) {
    b1.vy *= -1;
  }

  if (b2.x < b2.size || b2.x > width - b2.size) {
    b2.vx *= -1;
  }
  if (b2.y < b2.size || b2.y > height - b2.size) {
    b2.vy *= -1;
  }

  if (b3.x < b3.size || b3.x > width - b3.size) {
    b3.vx *= -1;
  }
  if (b3.y < b3.size || b3.y > height - b3.size) {
    b3.vy *= -1;
  }

  if (b4.x < b4.size || b4.x > width - b4.size) {
    b4.vx *= -1;
  }
  if (b4.y < b4.size || b4.y > height - b4.size) {
    b4.vy *= -1;
  }

  if (b5.x < b5.size || b5.x > width - b5.size) {
    b5.vx *= -1;
  }
  if (b5.y < b5.size || b5.y > height - b5.size) {
    b5.vy *= -1;
  }

  if (b6.x < b6.size || b6.x > width - b6.size) {
    b6.vx *= -1;
  }
  if (b6.y < b6.size || b6.y > height - b6.size) {
    b6.vy *= -1;
  }

  if (b7.x < b7.size || b7.x > width - b7.size) {
    b7.vx *= -1;
  }
  if (b7.y < b7.size || b7.y > height - b7.size) {
    b7.vy *= -1;
  }

  if (b8.x < b8.size || b8.x > width - b8.size) {
    b8.vx *= -1;
  }
  if (b8.y < b8.size || b8.y > height - b8.size) {
    b8.vy *= -1;
  }

  if (b9.x < b9.size || b9.x > width - b9.size) {
    b9.vx *= -1;
  }
  if (b9.y < b9.size || b9.y > height - b9.size) {
    b9.vy *= -1;
  }

  if (b10.x < b10.size || b10.x > width - b10.size) {
    b10.vx *= -1;
  }
  if (b10.y < b10.size || b10.y > height - b10.size) {
    b10.vy *= -1;
  }

  if (b11.x < b11.size || b11.x > width - b11.size) {
    b11.vx *= -1;
  }
  if (b11.y < b11.size || b11.y > height - b11.size) {
    b11.vy *= -1;
  }

  if (b12.x < b12.size || b12.x > width - b12.size) {
    b12.vx *= -1;
  }
  if (b12.y < b12.size || b12.y > height - b12.size) {
    b12.vy *= -1;
  }
  // Display ball
  fill(7, 224, 220); // cyan
  ellipse(b1.x, b1.y, b1.size);
  fill(219, 136, 209); // pastel pink
  ellipse(b2.x, b2.y, b2.size);
  fill(88, 227, 183); // pastel green teal
  ellipse(b3.x, b3.y, b3.size);
  fill(44, 33, 209); // blue
  ellipse(b4.x, b4.y, b4.size);
  fill(214, 50, 70); // red pink
  ellipse(b5.x, b5.y, b5.size);
  fill(119, 95, 231); // purple
  ellipse(b6.x, b6.y, b6.size);
  fill(182, 248, 121); // pastel lime green
  ellipse(b7.x, b7.y, b7.size);
  fill(53, 136, 248); // sky blue
  ellipse(b8.x, b8.y, b8.size);
  fill(156, 76, 21); // brown
  ellipse(b9.x, b9.y, b9.size);
  fill(190, 38, 217); // magenta
  ellipse(b10.x, b10.y, b10.size);
  fill(245, 228, 25); // yellow
  ellipse(b11.x, b11.y, b11.size);
  fill(223, 68, 33); // orange
  ellipse(b12.x, b12.y, b12.size);
}

function message() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(64);
  text(`Now...`, width / 2, height / 5);
  textSize(25);
  text(`Would you like to draw?`, width / 2, height / 3);
  textSize(30);
  text(`Well... `, width / 2, height / 1.9);
  textSize(20);
  text(`What are you waiting for?!`, width / 2, height / 1.7);
  textSize(15);
  text(`Well, move on, will you Mate?!`, width / 2, height / 1.55);
  textSize(10);
  text(`Press SPACE to open the sketchbook!`, width / 2, height / 1.1);
}

function simulation() {
  display();
}

function ending() {

}

function display() {
  stroke(255);
  line(width / 2, 0, width / 2, height);
  // Display different screens to draw differently
  drawLeftScreen();
  drawRightScreen();
  // Display screens onto the main canvas
  image(leftScreen, 0, 0);
  image(rightScreen, windowWidth / 2, 0);
}

function drawLeftScreen() {
  leftScreen.background(0);
  leftScreen.fill(255);
  leftScreen.textAlign(CENTER, TOP);
  leftScreen.textSize(20);
  leftScreen.text("Draw your kaleidoscope!", windowWidth / 4, 50);
}

function drawRightScreen() {
  rightScreen.background(255);
  rightScreen.fill(0);
  rightScreen.textAlign(CENTER, TOP);
  rightScreen.textSize(20);
  rightScreen.text("Generate an artwork!", windowWidth / 4, 50);
}

// To switch to subtitle screen
function mouseClicked() {
  if (state === `title`) {
    state = `message`;
  }
}

// To start the simulation
function keyPressed() {
  if (state === `message` && keyIsDown(32)) {
    state = `simulation`;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}