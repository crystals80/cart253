/**
Progress Report of Project 2: Anything™ Proposal - Underwater Mini Game
Lam Ky Anh Do
**/

"use strict";

// STATE VARIABLE: title, minigame, complete and gameover
let state = `title`;

// VARIABLE FOR TITLE SCREEN, including complete and gameover screens
let bubble;
let bubbles = []; // Bubble array variables
let numBubble = 20; // Number of bubble

// FONT VARIABLES
let fontRegular, fontItalic;

// VARIABLES FOR MINIGAME1
let clownfish, angelfish, moorishIdol, shark; // Fish variables
let fishes = []; // Fish array variable
let numClownfish = 10; // Number of clownfish
let numAngelfish = 10; // Number of angelfish
let numMoorishIdol = 10; // Number of moorish idol fish
let timer = 30; // Countdown timer variable

// VARIABLES FOR MINIGAME2
let turtle; // Sea creature variables
let fishesCirculation = []; // Fish circulation array variable
let numCfish = 10; // Number of clownfish circulating
let numAfish = 10; // Number of angelfish circulating
let numMIFish = 10; // Number of moorish idol fish circulating

// VARIABLES FOR IMAGES
let bubbleImg;
// Variables for images of minigame1
let clownfishImg1, clownfishImg2, angelfishImg1, angelfishImg2, sharkImg1, sharkImg2, moorishIdolImg1, moorishIdolImg2, bg1;
// Variables for images of minigame2
let turtleImg, bg2;
// Variables for images of minigame3
//let bg3;

function preload() {
  // See README for more info on typeface
  fontRegular = loadFont('assets/fonts/PlayfairDisplay-VariableFont_wght.ttf')
  fontItalic = loadFont('assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')
  // See README for more info on images
  // Title special effect
  bubbleImg = loadImage('assets/images/bubble.png')
  // Minigame 1's fish icons
  clownfishImg1 = loadImage('assets/images/clown-fish1.png');
  clownfishImg2 = loadImage('assets/images/clown-fish2.png');
  angelfishImg1 = loadImage('assets/images/yellow-fish1.png');
  angelfishImg2 = loadImage('assets/images/yellow-fish2.png');
  moorishIdolImg1 = loadImage('assets/images/moorish-idol-fish1.png');
  moorishIdolImg2 = loadImage('assets/images/moorish-idol-fish2.png');
  sharkImg1 = loadImage('assets/images/shark1.png');
  sharkImg2 = loadImage('assets/images/shark2.png');
  //Minigame 2's sea creatures directions
  turtleImg = loadImage('assets/images/turtle.png');
  // Background for minigames
  bg1 = loadImage('assets/images/seabed2.png');
  bg2 = loadImage('assets/images/seabed1.png')
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

  // User/Cursor appearance for minigame1
  let x1, y1; // Position variables for array classes
  shark = new SharkUser(x1, y1, sharkImg1);
  // User appearance for minigame2
  let x2 = width / 2;
  let y2 = height - 50;
  turtle = new TurtleUser(x2, y2, turtleImg);

  // MINIGAME 1'S SETUP
  let x, y; // Declare x and y position
  // Create clownfishes
  for (let i = 0; i < numClownfish; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let clownfish = new Clownfish(x, y, clownfishImg1);
    fishes.push(clownfish);
  }
  // Create angelfishes
  for (let i = 0; i < numAngelfish; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let angelfish = new Angelfish(x, y, angelfishImg1);
    fishes.push(angelfish);
  }
  // Create moorish idol fishes
  for (let i = 0; i < numMoorishIdol; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let moorishIdol = new MoorishIdol(x, y, moorishIdolImg1);
    fishes.push(moorishIdol);
  }

  // MINIGAME 2'S SETUP
  // Create a circulation with clownfishes
  for (let i = 0; i < numCfish; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let fishC = new CfishCirculation(x, y, clownfishImg1);
    fishesCirculation.push(fishC);
    // Create a circulation with clownfishes
    let fishA = new AfishCirculation(x, y, angelfishImg1);
    fishesCirculation.push(fishA);
    // Create a circulation with clownfishes
    let fishMI = new MIFishCirculation(x, y, moorishIdolImg1);
    fishesCirculation.push(fishMI);
  }
  // Make fishes circulate in random directions
  for (let i = 0; i < fishesCirculation.length; i++) {
    let fishC = fishesCirculation[i];
    let r = random(0, 1);
    if (r < 0.5) {
      fishC.vx = -fishC.speed;
    } else {
      fishC.vx = fishC.speed;
    }
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
    cursor();
    complete1();
  } else if (state === `gameover1`) {
    gameover1();
  } else if (state === `minigame2`) {
    noCursor();
    minigame2();
  } else if (state === `complete2`) {
    cursor();
    complete2();
  } else if (state === `gameover2`) {
    gameover2();
  }
  //else if (state === `minigame3`) {
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
  // Testing minigame2 so adding "skipping minigame1" option to go to minigame 2
  // Will delete after done testing
  else if (state === `title` && keyIsDown(32)) {
    state = `minigame2`;
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