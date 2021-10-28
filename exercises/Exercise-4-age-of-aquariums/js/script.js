/**
Exercise 4 Age of Aquarium
Lam Ky Anh Do

Exercise for class 6: Understanding and playing with arrays
*/

"use strict";

let groupFish1 = [];
let groupFish2 = [];
let group = 10;
let displayFishes1, displayFishes2, bg;
let shark = {
  x: 250,
  y: 250,
  size: 125,
  img: ""
}

// Give fish an appearance
function preload() {
  groupFish1[0] = loadImage('assets/images/clown-fish1.png');
  groupFish2[0] = loadImage('assets/images/yellow-fish2.png');
  shark.img = loadImage('assets/images/shark1.png')
  bg = loadImage('assets/images/seabed2.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  noCursor();

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
    size: 40,
    vx: 0,
    vy: 0,
    speed: 2,
  }
  return fish;
}

function draw() {
  background(0);

  image(bg, width / 2, height / 2, windowWidth, windowHeight + 55);
  push();
  imageMode(CORNER);
  pop();

  // User movement
  shark.x = mouseX;
  shark.y = mouseY;

  // Display user
  image(shark.img, shark.x, shark.y, shark.size, shark.size);

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

// Check if shark(user) can eat fishes
function mousePressed(fish) {
  for (let i = 0; i < groupFish1.length; i++) {
    // Store the current fishes in the fish variable
    let f1 = groupFish1[i];
    let f2 = groupFish2[i];
    // Calculate the distance between the mouse position and the fish
    let d1 = dist(shark.x, shark.y, f1.x, f1.y);
    let d2 = dist(shark.x, shark.y, f2.x, f2.y);
    // If a fish is clicked within the shark, it will be removed/eaten
    if (d1 < f1.size / 2 + shark.size / 2) {
      groupFish1.splice(i, 1);
      // This forces the for-loop to stop immediately
      break;
    }
    if (d2 < f2.size / 2 + shark.size / 2) {
      groupFish2.splice(i, 1);
      break;
    }
  }
}