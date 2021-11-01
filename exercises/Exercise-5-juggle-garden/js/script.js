/**
Exercise 5 Juggle Garden
Lam Ky Anh Do

Exercise for class 7: Understanding and playing with OOP
*/

"use strict";

// Variables for juggling balls
let force = 0.0025; // Gravity force controlling balls speed
let paddle; // Trampoline varriable
let balls = []; // Array variables for balls
let numBalls = 10; // Number of balls
let music; // Sound effect for bouncing balls
let reward1, reward2, reward3, punishment; // Prizes and Punishment for winning or losing the game (basically states/endings)

let state = `juggle` // state: juggle, win and lose

function preload() {
  // Sound effect plays some times and other times don't work...
  music = loadSound(`assets/sounds/sfx-boing8.mp3`);

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 50);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }

  angleMode(DEGREES);
  //gradient background
  let c1 = color(78, 234, 242);
  let c2 = color(18, 110, 25);
  setGradient(c1, c2);
  let x = 0
  let y = 0
}

function draw() {
  background(0);
  paddle.move();
  paddle.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(force);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }
}

function sfx() {
  if (!music.isPlaying()) {
    // Play music once
    music.play();
  }
}

function mousePressed() {
  if (keyIsDown(32)) {
    setGradient1();
  } else if (keyIsDown(8)) {
    setGradient2();
  }
}

function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);


  }