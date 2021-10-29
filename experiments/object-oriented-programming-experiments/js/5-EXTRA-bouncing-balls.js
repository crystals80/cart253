/**
Activity 07: Object-Oriented Programming
Lam Ky Anh Do
*/

"use strict";

let force = 0.0025;
let paddle;
let balls = [];
let numBalls = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }
}

function draw() {
  background(0);

  paddle.move();
  paddle.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.gravity(force);
    ball.move();
    ball.bounce();
    ball.display();
  }

}