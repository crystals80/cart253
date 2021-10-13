/**
Title of Project
Lam Ky Anh Do

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let leftScreen;
let rightScreen;

let state = `title`; // Possible states are title, animation and ending

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
  rightScreen.text("Stop when you are satisfied!", windowWidth / 4, 50);
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