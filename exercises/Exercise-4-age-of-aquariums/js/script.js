/**
Exercise 3 Age of Aquarium
Lam Ky Anh Do

Exercise for class 6: Understanding and playing with arrays
*/

"use strict";

function preload() {
  //cg.covidImage = loadImage('assets/images/covidgreen.png');
}
let school = [];
let schoolSize = 10; // equal to school.length

// Our fish
//let fish1, fish2, fish3, fish4; // replaced by array variable "school"

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }
}

// Create a new Javascript Object describing a fish and return it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
  }
  return fish;
}

// Moves and display fishes
function draw() {
  background(0);

  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
  }
  for (let i = 0; i < school.length; i++) {
    displayFish(school[i]);
  }
}

// Chooses whetehr the provided fish changes direction and moves it
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// Display the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}