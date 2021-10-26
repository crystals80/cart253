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
  groupFish1[0] = loadImage('assets/images/clown-fish.png');
  groupFish2[0] = loadImage('assets/images/yellow-fish.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Attribute appearance to fish
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
  let fish1 = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
  }
  return fish1;
}

// Moves and display fishes
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

// Chooses whetehr the provided fish changes direction and moves it
function moveFish(fish1) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish1.vx = random(-fish1.speed, fish1.speed);
    fish1.vy = random(-fish1.speed, fish1.speed);
  }

  // Move fish
  fish1.x = fish1.x + fish1.vx;
  fish1.y = fish1.y + fish1.vy;

  // Constrain fish to the canvas
  fish1.x = constrain(fish1.x, 50, width - 50);
  fish1.y = constrain(fish1.y, 50, height - 50);
}

// Display the provided fish on the canvas
function displayFish1(fish1) {

  noStroke();
  image(displayFishes1, fish1.x, fish1.y, fish1.size, fish1.size);
  imageMode(CENTER);

}

function displayFish2(fish1) {

  noStroke();
  image(displayFishes2, fish1.x, fish1.y, fish1.size, fish1.size);
  imageMode(CENTER);

}