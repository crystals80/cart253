/**
Project 2: Anything™ Proposal - Underwater Mini Game
Lam Ky Anh Do
**/

"use strict";

// Variables for mini game 1
let fishes, shark;
let fish = [];
let numClownfish = 10;
let numAngelfish = 10;
let clownfishImage1, clownfishImage2, angelfishImage1, angelfishImage2, sharkImage, bg;

// Give sea creatures an appearance
function preload() {
  // See README for more info on sea creatures' images)
  clownfishImage1 = loadImage('assets/images/clown-fish1.png');
  clownfishImage2 = loadImage('assets/images/clown-fish2.png');
  angelfishImage1 = loadImage('assets/images/yellow-fish1.png');
  angelfishImage2 = loadImage('assets/images/yellow-fish2.png');
  sharkImage = loadImage('assets/images/shark1.png')
  bg = loadImage('assets/images/seabed2.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  noCursor();

  clownfish = new Clownfish(x, y, clownfishImage1);
  angelfish = new Angelfish(x, y, angelfishImage1);
  shark = new Shark(x, y, sharkImage);

  // Spawn moving fishes into sea aquarium
  for (let i = 0; i < numClownfish; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let clownfish = new Clownfish(x, y);
    fishes.push(clownfish);
  }

  for (let i = 0; i < numAngelfish; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let angelfish = new Angelfish(x, y);
    fishes.push(angelfish);
  }

  for (let i = 0; i < fishes.length; i++) {
    let fish = fishes[i];
    // Set up directions
    let direction = random(0, 1);
    if (direction < 0.5) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
  }

  function draw() {
    background(0);

    if (state === `title`) {
      title();
    } else if (state === `minigame1`) {
      minigame1();
    } else if (state === `complete1`) {
      complete1();
    } else if (state === `gameover1`) {
      gameover1();
    } else if (state === `minigame2`) {
      minigame2();
    } else if (state === `complete2`) {
      complete2();
    } else if (state === `gameover2`) {
      gameover2();
    } else if (state === `minigame3`) {
      minigame3();
    } else if (state === `complete3`) {
      complete3();
    } else if (state === `gameover3`) {
      gameover3();
    }
  }

  function title() {
    displayText(`Welcome!`);
  }

  function minigame1() {

    push();
    image(bg, width / 2, height / 2, windowWidth, windowHeight + 55);
    imageMode(CORNER);
    pop();

    // User movement
    shark.x = mouseX;
    shark.y = mouseY;

    // Display user
    image(shark.img, shark.x, shark.y, shark.size, shark.size);

    for (let i = 0; i < fishes.length; i++) {
      let fish = fishes[i];
      fishes.move();
      fishes.wrap();
      fishes.display();
    }

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

  function success() {
    displayText(`You ate a special fish and now became a Turtle!`);
  }

  function dead() {
    displayText(`You waited too long for lunch time and died...Don't starve!`);
  }

  function displayText(string) {
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(string, width / 2, height / 2);
    pop();
  }

  function keyPressed() {
    if (state === `title`) {
      state = `minigame1`;
    }
  }