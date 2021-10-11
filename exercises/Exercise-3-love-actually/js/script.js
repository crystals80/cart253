/**
Exercise 3 Love, Actually - Find your True Love Edition
Lam Ky Anh Do

Exercise for class 5: Understanding and playing with functions
*/

"use strict";

let person1 = {
  x: 150,
  y: 250,
  size: 90,
  fill: {
    r: 255,
    g: 255,
    b: 0,
  },
  vx: 0,
  vy: 0,
  speed: 2,
  tx: 0,
  ty: 0,
};

let person2 = {
  x: undefined,
  y: 250,
  size: 90,
  fill: {
    r: 0,
    g: 255,
    b: 255,
  },
  vx: 0,
  vy: 0,
  speed: 2,
  tx: 0,
  ty: 0,
};

let savior = {
  x: 0,
  y: 0,
  size: 75,
  fill: {
    r: 255,
    g: 0,
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
  person1.x = width / 3;
  person2.x = 2 * width / 3;
  savior.x = width / 2;

  //Start circles moving in a random direction
  person1.vx = random(-person1.speed, person1.speed);
  person1.vy = random(-person1.speed, person1.speed);
  person2.vx = random(-person2.speed, person2.speed);
  person2.vy = random(-person2.speed, person2.speed);
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `love1`) {
    love1();
  } else if (state === `love2`) {
    love2();
  } else if (state === `sadness`) {
    sadness();
  } else if (state === `noChemistry`) {
    noChemistry();
  }

  handleInput();
}

function title() {
  push();
  textSize(44);
  fill(255, 75, 100);
  textAlign(CENTER, CENTER);
  text(`Who is your true love?`, width / 2, height / 2);
  pop();
}

function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  checkTouch();
  display();
}

function noChemistry() {
  push();
  textSize(40);
  fill(25, 25, 255);
  textAlign(CENTER, CENTER);
  text(`Not meant to be...`, width / 2, height / 2);
  textSize(14);
  fill(255);
  textAlign(BOTTOM, CENTER);
  text(`Refresh page to meet your true love!`, width / 2, 450);
  pop();
}

function sadness() {
  push();
  textSize(40);
  fill(25, 25, 255);
  textAlign(CENTER, CENTER);
  text(` Oh no!
You missed your chance!`, width / 2, height / 2);
  textSize(14);
  fill(255);
  textAlign(BOTTOM, CENTER);
  text(`Refresh page to meet your true love!`, width / 2, 450);
  pop();
}

function love1() {
  push();
  textSize(40);
  fill(255, 50, 75);
  textAlign(CENTER, CENTER);
  text(`  Congratulation!
  May both of you live
  a happy life!`, width / 2, height / 2);
  textSize(14);
  fill(255);
  textAlign(BOTTOM, CENTER);
  text(`Refresh page to restart!`, width / 2, 450);
  pop();
}

function love2() {
  push();
  textSize(40);
  fill(255, 50, 75);
  textAlign(CENTER, CENTER);
  text(` Wow!
It must be destiny!`, width / 2, height / 2);
  textSize(14);
  fill(255);
  textAlign(BOTTOM, CENTER);
  text(`Refresh page to restart!`, width / 2, 450);
  pop();
}


function move() {
  // Move circles
  person1.x += person1.vx;
  person1.y += person1.vy;

  person2.x += person2.vx;
  person2.y += person2.vy;

  // Add some interesting movements (noise)
  person1.vx = map(noise(person1.tx), 0, 1, -2, 4);
  person1.vy = map(noise(person1.ty), 0, 1, 4, -2);
  person1.tx += 0.03;
  person1.ty += 0.05;

  person2.vx = map(noise(person2.tx), 0, 1, -5, 3);
  person2.vy = map(noise(person2.ty), 0, 1, 3, -5);
  person2.tx += 0.05;
  person2.ty += 0.03;
}

function checkOffscreen() {
  if (isOffscreen(person1) || isOffscreen(person2)) {
    // NEUTRAL ENDING - NO ONE IS DESTINED TO BE TOGETHER
    state = `noChemistry`;
  }
}

function isOffscreen(person) {
  if (person.x < 0 || person.x > width || person.y < 0 || person.y > height) {
    return true;
  } else {
    return false;
  }
}

function checkOverlap() {
  // Check if circles overlap
  let d = dist(person1.x, person1.y, person2.x, person2.y);
  if (d < person1.size / 2 + person2.size / 2) {
    // BAD ENDING - YOU ARE ALONE AND THEY ARE TOGETHER
    state = `sadness`;
  }
}

function checkTouch() {
  // Check if person(1 or 2) and savior touch
  let d1 = dist(person1.x, person1.y, savior.x, savior.y);
  if (d1 <= person1.size / 2 + savior.size / 2) {
    // GOOD ENDING - YOU STEAL/ARE NOT ALONE
    state = `love1`;
  }
  let d2 = dist(person2.x, person2.y, savior.x, savior.y);
  if (d2 <= person2.size / 2 + savior.size / 2) {
    // GOOD ENDING - YOU STEAL/ARE NOT ALONE
    state = `love2`;
  }
}

function display() {

  // Display circles
  fill(person1.fill.r, person1.fill.g, person1.fill.b);
  ellipse(person1.x, person1.y, person1.size);
  fill(person2.fill.r, person2.fill.g, person2.fill.b);
  ellipse(person2.x, person2.y, person2.size);
  fill(savior.fill.r, savior.fill.g, savior.fill.b);
  rect(savior.x, savior.y, savior.size);
}

function handleInput() {
  // User movement
  if (keyIsDown(LEFT_ARROW)) {
    savior.x -= 10;
  } else if (keyIsDown(RIGHT_ARROW)) {
    savior.x += 10;
  }


  if (keyIsDown(UP_ARROW)) {
    savior.y -= 10;
  } else if (keyIsDown(DOWN_ARROW)) {
    savior.y += 10;
  }
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}