/**
Exercise 2 Dodge'em
Lam Ky Anh Do

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
/*let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 255
  },
}*/

let covid19red = {
  x: 0,
  y: 200,
  size: 100,
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
  size: 100,
  vx: 10,
  vy: 0,
  speed: 5,
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
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  covid19yellow.y = random(0, height);
  covid19yellow.x = random(0, width);
  covid19yellow.vx = covid19yellow.speed;
  // covid19yellow.vy = covid19yellow.speed;

  noCursor();
}

function draw() {
  background(0);

  //Display static
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }

  // COVID-19 movement
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

  // COVID-19 chasing mouse

  // Acceleration
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

  // User movement
  user.x = mouseX;
  user.y = mouseY;

  // Check for catching COVID 19
  let d = dist(user.x, user.y, covid19red.x + covid19red.size / 2, covid19red.y + covid19red.size / 2);
  if (d < covid19red.size / 2 + user.size / 2) {
    noLoop();
  }
  let dd = dist(user.x, user.y, covid19green.x + covid19green.size / 2, covid19green.y + covid19green.size / 2);
  if (dd < covid19green.size / 2 + user.size / 2) {
    noLoop();
  }
  let ddd = dist(user.x, user.y, covid19yellow.x + covid19yellow.size / 2, covid19yellow.y + covid19yellow.size / 2);
  if (ddd < covid19yellow.size / 2 + user.size / 2) {
    noLoop();
  }

  // Display COVID 19
  image(covid19red.covidImage, covid19red.x, covid19red.y, covid19red.size, covid19red.size);
  image(covid19green.covidImage, covid19green.x, covid19green.y, covid19green.size, covid19green.size);
  image(covid19yellow.covidImage, covid19yellow.x, covid19yellow.y, covid19yellow.size, covid19yellow.size);


  // Display user
  fill(user.fill)
  ellipse(user.x, user.y, user.size);







}