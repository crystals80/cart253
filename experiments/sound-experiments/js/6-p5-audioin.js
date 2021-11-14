/**
Learn how to use p5 oscillator
Lam Ky Anh Do

Experimenting with sound and p5 oscillator
No need for audio
*/

"use strict";

// The microphone
let mic;

let ghost = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  image: undefined,
}

function preload() {
  ghost.image = loadImage(`assets/images/clown.png`);
}

function setup() {
  createCanvas(600, 600);

  // Create our AudioIn object
  mic = new p5.AudioIn();
  // Try to connect to the user's microphone
  mic.start();

  // Ghost position
  ghost.x = width / 2;
  ghost.y = height / 2;

}

function draw() {
  background(0);

  // Get the current level of sound going into the microphone
  // We're doing this in draw() so we can see it changing over time
  let level = mic.getLevel(); // Get volume into microphone

  // Display the current level on the canvas
  push();
  textAlign(LEFT, CENTER);
  textSize(32);
  fill(255);
  text(level, width / 5, height / 4);
  pop();

  //console.log(level);

  // Change size of ellipse according to audioIn
  let size = map(level, 0, 1, 0, width);

  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(width / 2, height / 2, size);
  pop();

  //console.log(size);

  // Ghost runs away when sound too loud
  // Trembling ghost
  ghost.x += random(-1, 1);
  ghost.y += random(-1, 1);

  // Move the ghost
  ghost.x += ghost.vx;
  ghost.y += ghost.vy;

  // Check if the ghost is scared
  if (level > 0.6) {
    // Exit stage right
    ghost.vx = 20;
  }

  // Ghost appearance
  push();
  imageMode(CENTER);
  tint(255, 50);
  image(ghost.image, ghost.x, ghost.y);
  pop();
}