/**
Exercise 5 Juggle Garden
Lam Ky Anh Do

Exercise for class 7: Understanding and playing with OOP
*/

"use strict";

// Variables for juggling balls
let force = 0.0025; // Gravity force controlling balls speed
let paddle, wall; // Trampoline and side paddles variables
let balls = []; // Array variables for balls
let numBalls = 10; // Number of balls
let music; // Sound effect for bouncing balls
let reward1, reward2, reward3; // Prizes and Punishment for winning or losing the game (basically states/endings)

let state = `juggle` // state: juggle, win and lose

let punishment = {
  x: 0,
  y: 0,
  size: 5,
  image: undefined,
};

function preload() {
  // Sound effect plays some times and other times don't work...
  music = loadSound(`assets/sounds/sfx-boing8.mp3`);
  reward1 = loadImage('assets/images/medal.png');
  reward2 = loadImage('assets/images/discounts.png');
  reward3 = loadImage('assets/images/sushi.png');
  punishment.image = loadImage('assets/images/clown.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 50);
  wall = new Wall(30, 200);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }

}

function draw() {
  background(0);
  if (state === `juggle`) {
    juggle();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }
}

function juggle() {
  paddle.move();
  paddle.display();

  wall.move();
  wall.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(force);
      ball.move();
      ball.bounce(paddle, wall);
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

function keyPressed() {
  if (state === `juggle` && keyIsDown(32)) {
    state = `win`;
  } else if (state === `juggle` && keyIsDown(8)) {
    state = `lose`;
  }
}

function win() {
  angleMode(DEGREES);
  //gradient background
  let c1 = color(78, 234, 242);
  let c2 = color(18, 110, 25);
  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
  push();
  noStroke();
  fill(255);
  textAlign(CENTER, TOP);
  textSize(32);
  text(`You earned a medal, discounts at Eaton Center and a free sushi meal!`, width / 2, 100)

  imageMode(CENTER);
  image(reward1, 200, 50 + height / 2, 200, 200);
  image(reward2, width / 2, 50 + height / 2, 200, 200);
  image(reward3, width - 200, 50 + height / 2, 100, 200);
  pop();
}

function lose() {
  angleMode(DEGREES);
  //gradient background
  let c3 = color(240, 26, 73);
  let c4 = color(64, 26, 26);
  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c3, c4, inter);
    stroke(c);
    line(0, y, width, y);
  }
  fill(255);
  textAlign(CENTER, TOP);
  textSize(32);
  text(`RUN!`, width / 2, 100)

  push();
  punishment.size = punishment.size + 10;
  imageMode(CENTER);
  punishment.x = width / 2;
  punishment.y = height / 2;
  image(punishment.image, punishment.x, punishment.y, punishment.size, punishment.size);
  pop();
}