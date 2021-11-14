/**
Exercise 6: Make some Noise
Lam Ky Anh Do

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let balls = []; // Array of balls

let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`]; // F-minor

function setup() {
  createCanvas(600, 600);
  userStartAudio();
}

function draw() {
  background(0);

  // Display moving balls
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed() {
  // Add new ball per click
  createBall(mouseX, mouseY);
}

function createBall(x, y) {
  // Play notes randomly
  let note = random(notes);
  // Each new ball play a note
  let ball = new Ball(x, y, note);
  balls.push(ball);
}