/**
Learning how to use arrays in different ways
Lam Ky Anh Do

Experimenting with arrays
********ISSUE: cant see trail
*/

"use strict";

// A FORTUNE TELLER
// No order
/*let fortunes = [
  `It's not looking so good.`,
  `You will trip over Brad Pitt today.`,
  `You are going to enjoy gum.`,
  `Happiness is your for the taking`,
  `You will meet David Lynch.`,
];

let chosenFortune = `Click to see your future!`;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}

function draw() {
  background(0);
  text(chosenFortune, width / 2, height / 2);
}

function mousePressed() {
  chosenFortune = random(fortunes);
}*/

// A SPEECH
// Order is important
/*let soliloquy = [
  // These are basically index but in order
  `To be or not to be`,
  `That is the question.`,
  `Whether 'tis nobler in the mind'`,
  `To suffer the slings and arrows`,
  `Of outrageous fortune`,
  `Or to take arms`,
  `Against a sea of sorrows`,
  `And by opposing end them.`,
];

let currentIndex = 0;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}

function draw() {
  background(0);
  text(soliloquy[currentIndex], width / 2, height / 2);
}

function mousePressed() {
  currentIndex += 1;

  // "Reset and Restart" Go back to starting point
  if (currentIndex === soliloquy.length) {
    currentIndex = 0;
  }
}*/

// A TRAIL
/*let circle = {
  x: 0,
  y: 0,
  size: 100,
  trail: [],
  trailSize: 20,
};

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  //background(random(200, 255));

  // Draw the trail the circle leave
  for (let i = 0; i < circle.trail.length; i++) {
    let position = circle.trail[i];
    ellipse(position.x, position.y, position.size);
  }

  circle.x = mouseX;
  circle.y = mouseY;

  ellipse(circle.x, circle.y, circle.size);

  // Allow the circle to leave its traces
  let newTrailPosition = {
    x: circle.x,
    y: circle.y,
  };
  // Position at the end of the last circle
  circle.trail.push(newTrailPosition);

  // A LIMITED TRAIL
  // Remove Indez 0 and shuffle the array
  if (circle.trail.length > circle.trailSize) {
    circle.trail.shift();
  }
}*/

// SINGING DOGS

/*let barkSFX;

let rates = [1.5, 1.75, 2.25, 2.5, 2.75, 3];

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`)
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
}

function mousePressed() {
  barkSFX.play();

  // Make sound play faster
  // barkSFX.rate(2);
  // barkSFX.rate(random(1,3));

  let randomRate = random(rates);
  barkSFX.rate(randomRate);
}*/

// LOADING MANY IMAGES & CHOOSING ONE

/*let images = [];
let numImages = 10;
let displayImage;

// Load 10 images
function preload() {

  images[0] = loadImage(`assets/images/clown-0.png`);
  images[0] = loadImage(`assets/images/clown-1.png`);
  images[0] = loadImage(`assets/images/clown-2.png`);
  images[0] = loadImage(`assets/images/clown-3.png`);
  images[0] = loadImage(`assets/images/clown-4.png`);
  images[0] = loadImage(`assets/images/clown-5.png`);
  images[0] = loadImage(`assets/images/clown-6.png`);
  images[0] = loadImage(`assets/images/clown-7.png`);
  images[0] = loadImage(`assets/images/clown-8.png`);
  images[0] = loadImage(`assets/images/clown-9.png`);

  // The above becomes the following for a cleaner code
  for (let i = 0; i < numImages; i++) {
    // Load the image into a variable
    // Note that we use i to specify the number in the filename!
    // Note how nice this is with a template literal string
    let loadedImage = loadImage(`assets/images/clown-${i}.png`);
    images.push(loadedImage);
  }
}

// Select the image to display randomly
function setup() {
  createCanvas(600, 600);
  // Choose an image to display randomly from the array
  displayImage = random(images);
}

// Display the randomly chosen image
function draw() {
  background(0);

  push();
  imageMode(CENTER);
  image(displayImage, width / 2, height / 2);
  pop();
}*/