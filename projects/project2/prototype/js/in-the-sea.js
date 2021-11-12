/**
Project 2: Anything™ Proposal - Underwater Mini Game
Lam Ky Anh Do
**/

"use strict";

let bubble;
let bubbles = []; // Bubble array variables
let numBubble = 20; // Number of bubble

let state = `title`; // state: title, minigame, complete and gameover

// Font variables;
let fontRegular, fontItalic;

// Variables for mini game 1
let clownfish, angelfish, moorishIdol, shark; // Fish variables
let fishes = []; // Fish array variable
let numClownfish = 10; // Number of clownfish
let numAngelfish = 10; // Number of angelfish
let numMoorishIdol = 10; // Number of moorish idol fish
// Countdown timer variables
let timer = 30;


// Variables for images
let bubbleImg, clownfishImg1, clownfishImg2, angelfishImg1, angelfishImg2, sharkImg1, sharkImg2, moorishIdolImg1, moorishIdolImg2, bg;

// Give sea creatures an appearance
function preload() {
  // See README for more info on typeface
  fontRegular = loadFont('assets/fonts/PlayfairDisplay-VariableFont_wght.ttf')
  fontItalic = loadFont('assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')
  // See README for more info on images
  bubbleImg = loadImage('assets/images/bubble.png')
  clownfishImg1 = loadImage('assets/images/clown-fish1.png');
  clownfishImg2 = loadImage('assets/images/clown-fish2.png');
  angelfishImg1 = loadImage('assets/images/yellow-fish1.png');
  angelfishImg2 = loadImage('assets/images/yellow-fish2.png');
  moorishIdolImg1 = loadImage('assets/images/moorish-idol-fish1.png');
  moorishIdolImg2 = loadImage('assets/images/moorish-idol-fish2.png');
  sharkImg1 = loadImage('assets/images/shark1.png')
  sharkImg2 = loadImage('assets/images/shark2.png')
  bg = loadImage('assets/images/seabed2.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create new bubbles and store them in an array
  // Bubble floating up
  bubble = new Bubble(bubbleImg);
  for (let b = 0; b < numBubble; b++) {
    let bubble = new Bubble(bubbleImg)
    bubbles.push(bubble);
  }

  let x, y; // Position variables for array classes
  // User/Cursor appearance
  shark = new Shark(x, y, sharkImg1);

  // Create new fishes and store them in an array
  clownfish = new Clownfish(x, y, clownfishImg1);
  angelfish = new Angelfish(x, y, angelfishImg1);
  moorishIdol = new MoorishIdol(x, y, moorishIdolImg1);
  // Create new clownfishes
  for (let i = 0; i < numClownfish; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let clownfish = new Clownfish(x, y, clownfishImg1);
    fishes.push(clownfish);
  }
  // Create new angelfishes
  for (let i = 0; i < numAngelfish; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let angelfish = new Angelfish(x, y, angelfishImg1);
    fishes.push(angelfish);
  }
  // Create new moorish idol fishes
  for (let i = 0; i < numMoorishIdol; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let moorishIdol = new MoorishIdol(x, y, moorishIdolImg1);
    fishes.push(moorishIdol);
  }

}

function draw() {
  background(0);

  // Set game states for title screen, mini games and end screen
  if (state === `title`) {
    title();
  } else if (state === `minigame1`) {
    noCursor();
    minigame1();
  } else if (state === `complete1`) {
    complete1();
  } else if (state === `gameover1`) {
    gameover1();
  }
  // else if (state === `minigame2`) {
  //   minigame2();
  // } else if (state === `complete2`) {
  //   complete2();
  // } else if (state === `gameover2`) {
  //   gameover2();
  // } else if (state === `minigame3`) {
  //   minigame3();
  // } else if (state === `complete3`) {
  //   complete3();
  // } else if (state === `gameover3`) {
  //   gameover3();
  // } else if (state === `ending`) {
  // ending();}
}

function title() {

  // Set up gradient background
  let c1, c2, n;
  c1 = color(63, 191, 191); // Light teal
  //c2 = color(63,76,191); // light indigo
  c2 = color(63, 108, 191); // light blue

  for (let c = 0; c < height; c++) {
    n = map(c, 0, height, 0, 1);
    let newColor = lerpColor(c1, c2, n);
    stroke(newColor);
    line(0, c, width, c);
  }

  // For every bubble object in the bubbles array, call the display and move functions
  for (let b = 0; b < bubbles.length; b++) {
    let bubble = bubbles[b];
    bubble.move();
    bubble.display();
  }

  // Introduction message + Instruction for minigame1
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(255);
  textSize(60);
  text(`Welcome!`, width / 2, height / 4);
  textSize(40);
  text(`Here lies the sea of beautiful creatures!`, width / 2, -25 + height / 2);
  textSize(16);
  text(`You must first live like a hungry shark, eating its daily meal within 30 seconds!`, width / 2, -5 + 3 * height / 4);
  textSize(10);
  text(`~ PRESS to ENTER Underwater Trial 1 ~`, width / 2, height - 50);
  textFont(fontItalic);
  textSize(32);
  text(`Would you like to be part of their life?`, width / 2, 30 + height / 2);
  pop();
}

// function regulating state transitions
function keyPressed() {
  // Moving from title screen to minigame1
  if (state === `title` && keyIsDown(13)) {
    state = `minigame1`;
  }
  // If timer reaches 0, user will move from minigame1 to game over screen for minigame1
  if (state === `gameover1` && keyIsDown(32)) {
    state = `minigame1`;
    timer = 30;
    removeElements();
  }
  // Moving from minigame1's congratulating screen to minigame2
  if (state === `complete1` && keyIsDown(13)) {
    state === `minigame2`;
  }
}