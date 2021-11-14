/**
Exercise 6: Make some Noise
Lam Ky Anh Do

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let balls = []; // Array of balls
let chime = [] // Array of chime SFX
let user, synth;
let currentNote = 0;


let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`]; // F-minor
let otherNotes = [`F5`, `G1`, `Ab2`, `Bb2`, `C2`, `Db2`, `Eb2`, `F2`, `G2`, `Ab3`, `Bb3`, `C3`, `Db3`, `Eb3`, `F3`];

function preload() {
  chime.push(loadSound(`assets/sounds/chime1.mp3`));
  chime.push(loadSound(`assets/sounds/chime2.mp3`));
  chime.push(loadSound(`assets/sounds/chime3.mp3`));
  chime.push(loadSound(`assets/sounds/chime4.mp3`));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  userStartAudio();

  synth = new p5.PolySynth();

  // Allow cube(user) to leave its trace
  background(0);
  // Position of user
  let x = random(0, 1000);
  let y = random(0, 600);
  user = new User(x, y);
}

function draw() {
  // Display instruction
  displayText(`Draw your own music by clicking and moving arrows!`);
  // Control user
  user.handleInput();
  user.move();
  user.display();

  // Display moving balls
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function createBall(x, y) {
  // Play notes randomly
  let note = random(notes);
  // Each new ball play a note
  let ball = new Ball(x, y, note);
  balls.push(ball);
}

// Set up text string
function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(28);
  fill(255);
  text(string, width / 2, height / 4);
  pop();
}

function mousePressed() {
  // Add new ball per click
  createBall(mouseX, mouseY);
}

function keyPressed() {
  // Chime SFX are produced each time a arrow key is pressed
  if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) {
    random(chime).play();
  } else if (keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
    let note = otherNotes[currentNote];
    synth.play(note, 1, 0, 0.4);

    currentNote += 1;
    if (currentNote === otherNotes.length) {
      currentNote = 0;
    }
  }
}