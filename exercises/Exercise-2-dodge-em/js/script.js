/**
Exercise 2 Dodge'em - Microscopic Edition
Lam Ky Anh Do

Exercise for class 4: Understanding and playing with conditionals
*/

"use strict";
let backgroundShade = {
  fill: 0,
}

let covid19red = {
  x: 0,
  y: 500,
  size: 150,
  vx: 20,
  vy: 0,
  speed: 0,
  acceleration: 0.25,
  maxSpeed: 5,
  covidImage: ""
};
let covid19green = {
  x: 0,
  y: 400,
  size: 100,
  vx: 15,
  vy: 0,
  ax: 0,
  ay: 0,
  speed: 5,
  covidImage: ""
};
let covid19yellow = {
  x: 0,
  y: 0,
  size: 200,
  vx: 10,
  vy: 0,
  speed: 5,
  covidImage: ""
};
let cr = {
  x: -150,
  y: 300,
  size: 50,
  vx: 20,
  vy: 0,
  speed: 0,
  acceleration: 0.75,
  maxSpeed: 5,
  covidImage: ""
};
let cg = {
  x: -200,
  y: -200,
  size: 75,
  vx: 10,
  vy: 0,
  ax: 0,
  ay: 0,
  speed: 5,
  acceleration: 0.5,
  maxSpeed: 5,
  covidImage: ""
};
let cy = {
  x: 400,
  y: 300,
  size: 25,
  vx: 10,
  vy: 0,
  speed: 5,
  acceleration: 0.9,
  maxSpeed: 5,
  covidImage: ""
};

let user = {
  x: 250,
  y: 250,
  size: 50,
  fill: 255,
}

let numStatic = 1000;

function preload() {
  covid19red.covidImage = loadImage('assets/images/covidred.png');
  covid19green.covidImage = loadImage('assets/images/covidgreen.png');
  covid19yellow.covidImage = loadImage('assets/images/covidyellow.png');
  cr.covidImage = loadImage('assets/images/covidred.png');
  cg.covidImage = loadImage('assets/images/covidgreen.png');
  cy.covidImage = loadImage('assets/images/covidyellow.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  covid19yellow.y = random(0, height);
  covid19yellow.vx = covid19yellow.speed;

  noCursor();
}

function draw() {
  backgroundShade.fill = random(0, 25);
  background(backgroundShade.fill);

  //Display static
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }

  // COVID-19 movement of larger COVID-19 figures
  covid19red.x = covid19red.x + covid19red.vx;
  covid19red.y = covid19red.y + covid19red.vy;
  covid19green.x = covid19green.x + covid19green.vx;
  covid19green.y = covid19green.y + covid19green.vy;
  covid19yellow.x = covid19yellow.x + covid19yellow.vx;
  covid19yellow.y = covid19yellow.y + covid19yellow.vy;

  if (covid19red.x > width) {
    covid19red.x = 0;
    covid19red.y = random(0, height);
  }
  if (covid19green.x > width) {
    covid19green.x = 0;
    covid19green.y = random(0, height);
  }
  if (covid19yellow.x > width) {
    covid19yellow.x = 0;
    covid19yellow.y = random(0, height);
  }

  // COVID-19 movement of smaller COVID-19 figures
  cr.x = cr.x + cr.vx;
  cr.y = cr.y + cr.vy;
  cg.x = cg.x + cg.vx;
  cg.y = cg.y + cg.vy;
  cy.x = cy.x + cy.vx;
  cy.y = cy.y + cy.vy;

  if (cr.x > width) {
    cr.x = 0;
    cr.y = random(0, height);
  }
  if (cg.x > width) {
    cg.x = 0;
    cg.y = random(0, height);
  }
  if (cy.x > width) {
    cy.x = 0;
    cy.y = random(0, height);
  }

  // COVID-19 chasing mouse

  // Acceleration covid19red
  if (mouseX < covid19red.x) {
    covid19red.ax = -covid19red.acceleration;
  } else {
    covid19red.ax = covid19red.acceleration;
  }
  if (mouseY < covid19red.y) {
    covid19red.ay = -covid19red.acceleration;
  } else {
    covid19red.ay = covid19red.acceleration;
  }

  covid19red.vx = covid19red.vx + covid19red.ax;
  covid19red.vx = constrain(covid19red.vx, -covid19red.maxSpeed, covid19red.maxSpeed);
  covid19red.vy = covid19red.vy + covid19red.ay;
  covid19red.vy = constrain(covid19red.vy, -covid19red.maxSpeed, covid19red.maxSpeed);

  // Acceleration cg
  if (mouseX < cg.x) {
    cg.ax = -cg.acceleration;
  } else {
    cg.ax = cg.acceleration;
  }
  if (mouseY < cg.y) {
    cg.ay = -cg.acceleration;
  } else {
    cg.ay = cg.acceleration;
  }

  cg.vx = cg.vx + cg.ax;
  cg.vx = constrain(cg.vx, -cg.maxSpeed, cg.maxSpeed);
  cg.vy = cg.vy + cg.ay;
  cg.vy = constrain(cg.vy, -cg.maxSpeed, cg.maxSpeed);

  // Acceleration cy
  if (mouseX < cy.x) {
    cy.ax = -cy.acceleration;
  } else {
    cy.ax = cy.acceleration;
  }
  if (mouseY < cy.y) {
    cy.ay = -cy.acceleration;
  } else {
    cy.ay = cy.acceleration;
  }

  cy.vx = cy.vx + cy.ax;
  cy.vx = constrain(cy.vx, -cy.maxSpeed, cy.maxSpeed);
  cy.vy = cy.vy + cy.ay;
  cy.vy = constrain(cy.vy, -cy.maxSpeed, cy.maxSpeed);

  // User movement
  user.x = mouseX;
  user.y = mouseY;

  // Display user
  fill(100);
  rect(user.x, user.y - 15, 2, 20, 100);
  rectMode(CENTER);
  fill(user.fill);
  ellipse(user.x, user.y, user.size + 5, user.size - 25);
  rect(user.x, user.y - 25, 5, 5, 100);
  fill(100);
  rect(user.x, user.y, 70, 10, 100);
  noFill();
  rect(user.x - 24, user.y, 5, 5, 100);
  rect(user.x - 12, user.y, 5, 5, 100);
  rect(user.x, user.y, 5, 5, 100);
  rect(user.x + 12, user.y, 5, 5, 100);
  rect(user.x + 24, user.y, 5, 5, 100);

  // Display COVID 19
  image(covid19red.covidImage, covid19red.x, covid19red.y, covid19red.size, covid19red.size);
  image(covid19green.covidImage, covid19green.x, covid19green.y, covid19green.size, covid19green.size);
  image(covid19yellow.covidImage, covid19yellow.x, covid19yellow.y, covid19yellow.size, covid19yellow.size);
  image(cr.covidImage, cr.x, cr.y, cr.size, cr.size);
  image(cg.covidImage, cg.x, cg.y, cg.size, cg.size);
  image(cy.covidImage, cy.x, cy.y, cy.size, cy.size);

  // Check for catching COVID 19
  let d = dist(user.x, user.y, covid19red.x + covid19red.size / 2, covid19red.y + covid19red.size / 2);
  if (d < covid19red.size / 2 + user.size / 2) {
    noLoop();
    background(0);
    nofill();
    tint(0);
  }
  let d1 = dist(user.x, user.y, covid19green.x + covid19green.size / 2, covid19green.y + covid19green.size / 2);
  if (d1 < covid19green.size / 2 + user.size / 2) {
    noLoop();
    background(0);
    tint(0);
    // Game Over Screen
    push();
    strokeWeight(5);
    fill(255);
    textSize(200);
    textAlign(CENTER, CENTER);
    text('GAME OVER', windowWidth / 2, windowHeight / 2.5);
    pop();
    fill(255);
    noStroke();
    textSize(30);
    textAlign(CENTER, BASELINE);
    text('Refresh Page to Restart Game ¯\_(ツ)_/¯', windowWidth / 2, windowHeight / 4 * 2.5)
  }
  let d2 = dist(user.x, user.y, covid19yellow.x + covid19yellow.size / 2, covid19yellow.y + covid19yellow.size / 2);
  if (d2 < covid19yellow.size / 2 + user.size / 2) {
    noLoop();
    background(0);
    tint(0);
    // Game Over Screen
    push();
    strokeWeight(5);
    fill(255);
    textSize(200);
    textAlign(CENTER, CENTER);
    text('GAME OVER', windowWidth / 2, windowHeight / 2.5);
    pop();
    fill(255);
    noStroke();
    textSize(30);
    textAlign(CENTER, BASELINE);
    text('Refresh Page to Restart Game ¯\_(ツ)_/¯', windowWidth / 2, windowHeight / 4 * 2.5)
  }
  let d3 = dist(user.x, user.y, cr.x + cr.size / 2, cr.y + cr.size / 2);
  if (d3 < cr.size / 2 + user.size / 2) {
    noLoop();
    background(0);
    tint(0);
    // Game Over Screen
    push();
    strokeWeight(5);
    fill(255);
    textSize(200);
    textAlign(CENTER, CENTER);
    text('GAME OVER', windowWidth / 2, windowHeight / 2.5);
    pop();
    fill(255);
    noStroke();
    textSize(30);
    textAlign(CENTER, BASELINE);
    text('Refresh Page to Restart Game ¯\_(ツ)_/¯', windowWidth / 2, windowHeight / 4 * 2.5)
  }
  let d4 = dist(user.x, user.y, cg.x + cg.size / 2, cg.y + cg.size / 2);
  if (d4 < cg.size / 2 + user.size / 2) {
    noLoop();
    background(0);
    tint(0);
    // Game Over Screen
    push();
    strokeWeight(5);
    fill(255);
    textSize(200);
    textAlign(CENTER, CENTER);
    text('GAME OVER', windowWidth / 2, windowHeight / 2.5);
    pop();
    fill(255);
    noStroke();
    textSize(30);
    textAlign(CENTER, BASELINE);
    text('Refresh Page to Restart Game ¯\_(ツ)_/¯', windowWidth / 2, windowHeight / 4 * 2.5)
  }
  let d5 = dist(user.x, user.y, cy.x + cy.size / 2, cy.y + cy.size / 2);
  if (d5 < cy.size / 2 + user.size / 2) {
    noLoop();
    background(0);
    tint(0);
    // Game Over Screen
    push();
    strokeWeight(5);
    fill(255);
    textSize(200);
    textAlign(CENTER, CENTER);
    text('GAME OVER', windowWidth / 2, windowHeight / 2.5);
    pop();
    fill(255);
    noStroke();
    textSize(30);
    textAlign(CENTER, BASELINE);
    text('Refresh Page to Restart Game ¯\_(ツ)_/¯', windowWidth / 2, windowHeight / 4 * 2.5)
  }

}