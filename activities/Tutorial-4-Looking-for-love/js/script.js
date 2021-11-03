/**
Tutorial 4: Looking for Love
Lam Ky Anh Do

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let circle1 = {
  x: 150,
  y: 250,
  size: 100,
  fill: {
    r: 255,
    g: 255,
    b: 0,
  },
  vx: 0,
  vy: 0,
  speed: 3,
};

let circle2 = {
  x: undefined,
  y: 250,
  size: 100,
  fill: {
    r: 0,
    g: 255,
    b: 255,
  },
  vx: 0,
  vy: 0,
  speed: 3,
};

let state = `title`; // Can be titled simulation, love, sadness

function setup() {
  createCanvas(500, 500);
  setupCircles();
}

function setupCircles() {
  // Position of circles separated from one another
  circle1.x = width / 3;
  circle2.x = 2 * width / 3;

  //Start circles moving in a random direction
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `love`) {
    love();
  } else if (state === `sadness`) {
    sadness();
  }


}

function title() {
  push();
  textSize(64);
  fill(255, 75, 100);
  textAlign(CENTER, CENTER);
  text(`LOVE?`, width / 2, height / 2);
  pop();
}

function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}

function love() {
  push();
  textSize(64);
  fill(255, 50, 75);
  textAlign(CENTER, CENTER);
  text(`LOVE!`, width / 2, height / 2);
  pop();
}

function sadness() {
  push();
  textSize(64);
  fill(25, 25, 255);
  textAlign(CENTER, CENTER);
  text(`Nooo
Don't go!
D;`, width / 2, height / 2);
  pop();
}


function move() {
  // Move circles
  circle1.x += circle1.vx;
  circle1.y += circle1.vy;

  circle2.x += circle2.vx;
  circle2.y += circle2.vy;
}

function checkOffscreen() {
  // Check if circles have gone offscreen
  //if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height)

  // Legible and short code
  if (isOffscreen(circle1) || isOffscreen(circle2)) {
    // SAD ENDING
    state = `sadness`;
  }
}

function isOffscreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  } else {
    return false;
  }
}

function checkOverlap() {
  // Check if circles overlap
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size / 2 + circle2.size / 2) {
    // LOVE ENDING
    state = `love`;
  }
}

function display() {

  // Display circles
  fill(circle1.fill.r, circle1.fill.g, circle1.fill.b);
  ellipse(circle1.x, circle1.y, circle1.size);
  fill(circle2.fill.r, circle2.fill.g, circle2.fill.b);
  ellipse(circle2.x, circle2.y, circle2.size);
}


function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}