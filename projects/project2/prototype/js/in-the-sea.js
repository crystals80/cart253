/**
Project 2: Anything™ Proposal - Underwater Mini Game
Lam Ky Anh Do
**/

"use strict";

let state = `title`; // state: title, minigame, complete and gameover

// Font variables;
let fontRegular, fontItalic;

// Variables for mini game 1
let clownfish, angelfish, shark; // Fish variables
let fishes = []; // Fish array variable
let numClownfish = 10; // Number of clownfish
let numAngelfish = 10; // Number of angelfish
let clownfishImage1, clownfishImage2, angelfishImage1, angelfishImage2, sharkImage, bg; // Varriable for images

// Give sea creatures an appearance
function preload() {
  // see README for more info on typeface
  fontRegular = loadFont('assets/fonts/PlayfairDisplay-VariableFont_wght.ttf')
  fontItalic = loadFont('assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')
  // See README for more info on sea creatures' images
  clownfishImage1 = loadImage('assets/images/clown-fish1.png');
  clownfishImage2 = loadImage('assets/images/clown-fish2.png');
  angelfishImage1 = loadImage('assets/images/yellow-fish1.png');
  angelfishImage2 = loadImage('assets/images/yellow-fish2.png');
  sharkImage = loadImage('assets/images/shark1.png')
  bg = loadImage('assets/images/seabed2.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // let x, y;
  //
  // clownfish = new Clownfish(x, y, clownfishImage1);
  // angelfish = new Angelfish(x, y, angelfishImage1);
  // shark = new Shark(x, y, sharkImage);
  //
  // // Spawn moving fishes into sea aquarium
  // for (let i = 0; i < numClownfish; i++) {
  //   let x = random(0, width);
  //   let y = random(0, height);
  //   let clownfish = new Clownfish(x, y);
  //   //fishes.push(clownfish);
  // }
  //
  // for (let i = 0; i < numAngelfish; i++) {
  //   let x = random(0, width);
  //   let y = random(0, height);
  //   let angelfish = new Angelfish(x, y);
  //   //fishes.push(angelfish);
  // }
  //
  // for (let i = 0; i < fishes.length; i++) {
  //   let fish = fishes[i];
  //   // Set up directions
  //   let direction = random(0, 1);
  //   if (direction < 0.5) {
  //     this.vx = random(-this.speed, this.speed);
  //     this.vy = random(-this.speed, this.speed);
  //   }
}

function draw() {
  background(0);

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
  // }
}

function title() {
  // Introduction message + Instruction to minigame1
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
  text(`~ CLICK to enter Underwater Trial 1 ~`, width / 2, height - 50);
  textFont(fontItalic);
  textSize(32);
  text(`Would you like to be part of their life?`, width / 2, 30 + height / 2);
  pop();
}

function minigame1() {

  push();
  image(bg, width / 2, height / 2, windowWidth, windowHeight + 55);
  imageMode(CORNER);
  pop();

  // User movement
  shark.x = mouseX;
  shark.y = mouseY;

  for (let i = 0; i < fishes.length; i++) {
    let fish = fishes[i];
    fishes.move();
    fishes.wrap();
    fishes.display();
  }
}


/*  // Check if shark(user) can eat fishes
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
  } */

function success() {
  displayText(`You ate a special fish and now became a Turtle!`);
}

function dead() {
  displayText(`You waited too long for lunch time and died...Don't starve!`);
}

function keyPressed() {
  if (state === `title`) {
    state = `minigame1`;
  }
}