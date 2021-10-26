/**
Exercise 3 Age of Aquarium
Lam Ky Anh Do

Exercise for class 6: Understanding and playing with arrays
*/

"use strict";

let groupFish1 = [];
let groupFish2 = [];
let group = 10;
let displayFishes1, displayFishes2;

// Give fish an appearance
function preload() {
  groupFish1[0] = loadImage('assets/images/clown-fish1.png');
  groupFish2[0] = loadImage('assets/images/yellow-fish2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Attribute appearance to fish *see README for more info on this part)
  displayFishes1 = random(groupFish1);
  displayFishes2 = random(groupFish2);

  // Spawn fishes randomly on canvas
  for (let i = 0; i < group; i++) {
    groupFish1[i] = createFish(random(0, width), random(0, height));
  }

  for (let i = 0; i < group; i++) {
    groupFish2[i] = createFish(random(0, width), random(0, height));
  }
}

// Create a new Javascript object describing a fish and return it
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

function draw() {
  background(0);

  for (let i = 0; i < groupFish1.length; i++) {
    moveFish(groupFish1[i]);
  }
  for (let i = 0; i < groupFish1.length; i++) {
    displayFish1(groupFish1[i]);
  }

  for (let i = 0; i < groupFish2.length; i++) {
    moveFish(groupFish2[i]);
  }
  for (let i = 0; i < groupFish2.length; i++) {
    displayFish2(groupFish2[i]);
  }
}

// Allow fishes to move around
function moveFish(fish) {
  // Set up directions
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain fish to the canvas
  fish.x = constrain(fish.x, 50, width - 50);
  fish.y = constrain(fish.y, 50, height - 50);
}

// Display the fishes on the canvas
function displayFish1(fish) {
  image(displayFishes1, fish.x, fish.y, fish.size, fish.size);
  imageMode(CENTER);
}

function displayFish2(fish) {
  image(displayFishes2, fish.x, fish.y, fish.size, fish.size);
  imageMode(CENTER);
}