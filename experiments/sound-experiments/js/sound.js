/**
Learn how to use sound
Lam Ky Anh Do

Experimenting with sound and how to loop it 
*/

"use strict";

// Load and play a sound from library
/*let barkSFX;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
}

function mousePressed() {
  barkSFX.play();
}*/

// Laod and play music that I downloaded
let music;

function preload() {
  music = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(500, 500);
  // But sound only plays once and disappears for the rest of the times you refresh the page
  //music.play();
}

function draw() {
  background(0);
}

function mousePressed() {
  /*if (!music.isPlaying()) {
    // Play music once
    music.play();
  }*/
  tryMusic();
}

function keyPressed() {
  tryMusic();
}

function tryMusic() {
  if (!music.isPlaying()) {
    // Play music over and over
    music.loop();
  }
}