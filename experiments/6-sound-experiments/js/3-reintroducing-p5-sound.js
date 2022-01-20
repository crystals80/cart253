/**
Learn how to use sound (reintroduced)
Lam Ky Anh Do

Experimenting with sound and p5 sound library
*/

"use strict";

let barkSFX;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(600, 600);
  userStartAudio();
}

function draw() {
  // Just to be cute, let's also change the background color based on whether the dog bark is currently playing
  if (barkSFX.isPlaying()) {
    background(127);
  } else {
    background(0);
  }

  let newRate = map(mouseX, 0, width, -3, 3);
  barkSFX.rate(newRate);
}

function mousePressed() {
  //barkSFX.rate(-1);
  barkSFX.play();
  barkSFX.loop(); // For newRate
}