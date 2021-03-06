/********************************
Progress Report of Project 2: Anything™ Proposal - Underwater Mini Game
Lam Ky Anh Do

This is the main script for the project. This js file links all other js files together to make the project work. This js file includes:

1- USE STRICT
2- VARIABLES being DECLARED
3- PRELOAD FUNCTION (for typefaces, images and sounds)
4- SETUP FUNCTION to create a canvas to draw on and for array variables and parent classes with their children classes
5- DRAW FUNCTION where all states are being drawn and bracketed in if statements
6- TITLE FUNCTION for the title screen (the first page user will see upon clicking on the project's link)
7- ENDING FUNCTION for the closing screen (the last page user will be able to interact with before returning to the title screen)
8- KEYPRESSED FUNCTION where state changes are triggered by a specfic key on the user's keyboard
********************************/

"use strict";

// STATE VARIABLE: title, minigame, complete and gameover
let state = `title`;

// VARIABLE FOR TITLE SCREEN, including complete and gameover screens
let bubble;
let bubbles = []; // Bubble array variable
let numBubble = 20; // Number of bubble
let button; // Variable for button (that will activate audio files)

// FONT VARIABLES
let fontRegular, fontItalic;

// VARIABLES FOR MINIGAME1
let clownfish, angelfish, moorishIdol, shark; // Fish and user variables
let fishes = []; // Fish array variable
let numFish = 20; // Number of clownfish, angelfish, moorish idol fish
let timer = 30; // Countdown timer variable

// VARIABLES FOR MINIGAME2
let turtle; // User variable
let fishesCirculation = []; // Fish circulation array variable
let numFishes = 10; // Number of clownfish, angelfish, moorish idol fish
let numShark = 5; // Number of shark

// VARIABLES FOR MINIGAME3
let penguin; // User variable
let orcas = []; // Orca array variable
let numOrca = 75; // Number of orca
let longTimer = 45 // Countdown timer variable

// VARIABLES FOR ENDING SCREEN
let scuba; // User variable

// VARIABLES FOR IMAGES
let bubbleImg;
// Variables for images of minigame1
let clownfishImg1, angelfishImg1, moorishIdolImg1, sharkImg1, bg1;
// Variables for images of minigame2
let turtleImg, clownfishImg2, angelfishImg2, moorishIdolImg2, sharkImg2, deadTurtle, bg2;
// Variables for images of minigame3
let penguinImg, orcaImg, bg3;
// Variables for images of ending screen
let scubaImg;

// VARIABLES FOR AUDIO
// Variables playing the audio
let bubbly, crunch, waves; // Variables for SFX
let yay1, yay2, yay3, ohNo1, ohNo2, ohNo3, end; // Variables for complete, gameover and ending screens background sound
let bgAudio1, bgAudio2, bgAudio3, bgAudio4; // Variables for background music
// Array variables storing many audio to play at random
let bubblySFX = []; // Array variable storing bubble rising SFX
let crunchSFX = []; // Array variable storing crunching SFX

function preload() {
  // TYPEFACES (see assets README for more info on typeface)
  fontRegular = loadFont('assets/fonts/PlayfairDisplay-VariableFont_wght.ttf')
  fontItalic = loadFont('assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')

  // IMAGES (see assets README for more info on images)
  // Title special effect
  bubbleImg = loadImage('assets/images/bubble.png')
  // Minigame 1's fish icons
  clownfishImg1 = loadImage('assets/images/clown-fish1-orig.png');
  angelfishImg1 = loadImage('assets/images/yellow-fish1-orig.png');
  moorishIdolImg1 = loadImage('assets/images/moorish-idol-fish1-orig.png');
  sharkImg1 = loadImage('assets/images/shark1.png');
  //Minigame 2's sea creatures directions
  turtleImg = loadImage('assets/images/turtle.png');
  clownfishImg2 = loadImage('assets/images/clown-fish1.png');
  angelfishImg2 = loadImage('assets/images/yellow-fish1.png');
  moorishIdolImg2 = loadImage('assets/images/moorish-idol-fish1.png');
  sharkImg2 = loadImage('assets/images/shark2.png');
  deadTurtle = loadImage('assets/images/turtle-died-tinted.png');
  //Minigame 3's sea creatures directions
  penguinImg = loadImage('assets/images/penguin-orig.png');
  orcaImg = loadImage('assets/images/orca1.png');
  // Background for minigames
  bg1 = loadImage('assets/images/seabed2.png');
  bg2 = loadImage('assets/images/seabed1.png');
  bg3 = loadImage('assets/images/antarctica-cropped.png');
  // Cursor
  scubaImg = loadImage('assets/images/scubadiver.png');

  // AUDIO (see assets README for more info on sounds)
  // Audios for title screen and complete screens
  bubblySFX[0] = loadSound('assets/sounds/zapsplat-bubble_rising1.mp3');
  bubblySFX[1] = loadSound('assets/sounds/zapsplat-bubble_rising2.mp3');
  bgAudio1 = loadSound('assets/sounds/YAL_Seaside_Piazza_Aaron_Kenny.mp3'); // Title screen background audio
  // Audios for minigame1
  crunchSFX[0] = loadSound('assets/sounds/zapsplat-bite1.mp3');
  crunchSFX[1] = loadSound('assets/sounds/zapsplat-bite2.mp3');
  crunchSFX[2] = loadSound('assets/sounds/zapsplat-bite3.mp3');
  bgAudio2 = loadSound('assets/sounds/YAL_Doh_De_Oh_Kevin_MacLeod.mp3'); // Mini game background audio
  yay1 = loadSound('assets/sounds/YAL_Fiesta_de_la_Vida_Aaron_Kenny.mp3'); // complete1 background audio
  ohNo1 = loadSound('assets/sounds/zapsplat-underwater-ambiance3.mp3'); // gameover1 background audio

  // Audio for minigame2
  bgAudio3 = loadSound('assets/sounds/YAL_Across_the_Savannah_Aaron_Kenny.mp3'); // Mini game background audio
  yay2 = loadSound('assets/sounds/YAL_In_the_Temple_Garden_Aaron_Kenny.mp3'); // complete2 background audio
  ohNo2 = loadSound('assets/sounds/zapsplat-underwater-ambiance4.mp3'); // gameover1 background audio

  // Audio for minigame3
  bgAudio4 = loadSound('assets/sounds/YAL_Hot_Swing_Kevin_MacLeod.mp3'); // Mini game background audio
  waves = loadSound('assets/sounds/zapsplat-felix_blume_ocean_waves.mp3'); // Mini game SFX
  yay3 = loadSound('assets/sounds/YAL_Timpani_Beat_Nana_Kwabena.mp3'); // complete2 background audio
  ohNo3 = loadSound('assets/sounds/zapsplat-underwater-ambiance1.mp3'); // gameover1 background audio

  // Audio for ending screen
  end = loadSound('assets/sounds/zapsplat-underwater-ambiance2.mp3'); // ending background audio
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

  // Create button that makes web browser play audio files of title screen because Google Chrome and Microsoft Edge don't play the title screen's audio files once entered the online/github link
  button = createButton('Of course!');
  button.center(); // Center the text within the button
  let noColour = color(255, 255, 255, 0); // Set transparent colour
  button.style('background-color', noColour); // Apply transparent colour to button initial grey background
  button.mousePressed(mouseReleased); // Get audio files to play (see mouseReleased() function)

  // Position variables for array classes
  let x1, y1;
  let x2 = width / 2;
  let y2 = height - 50;
  // User/Cursor appearance for minigame1
  shark = new MouseUser(x1, y1, sharkImg1);
  // User appearance for minigame2
  turtle = new ArrowUser(x2, y2, turtleImg);
  // User/Cursor appearance for minigame3
  penguin = new PenguinUser(x1, y1, penguinImg);
  // User/Cursor appearance for ending
  scuba = new ScubaUser(x1, y1, scubaImg);

  // MINIGAME 1'S SETUP
  let x, y; // Declare x and y position
  // Create clownfishes
  for (let i = 0; i < numFish; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let clownfish = new Clownfish(x, y, clownfishImg1);
    fishes.push(clownfish);
    // Create angelfishes
    let angelfish = new Angelfish(x, y, angelfishImg1);
    fishes.push(angelfish);
    // Create moorish idol fishes
    let moorishIdol = new MoorishIdol(x, y, moorishIdolImg1);
    fishes.push(moorishIdol);
  }

  // MINIGAME 2'S SETUP
  // Create a circulation with clownfishes
  for (let i = 0; i < numFishes; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let fishCl = new CfishCirculation(x, y, clownfishImg2);
    fishesCirculation.push(fishCl);
    // Create a circulation with angelfishes
    let fishA = new AfishCirculation(x, y, angelfishImg2);
    fishesCirculation.push(fishA);
    // Create a circulation with mooorish idol fishes
    let fishMI = new MIFishCirculation(x, y, moorishIdolImg2);
    fishesCirculation.push(fishMI);
  }

  // Create a circulation with sharks
  for (let i = 0; i < numShark; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let shark = new SharkCirculation(x, y, sharkImg2);
    fishesCirculation.push(shark);
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

  //MINIGAME 3'S setup
  // Set up the initial position of flocks of orcas
  for (let i = 0; i < numOrca; i++) {
    orcas[i] = new Orca(random(width), random(height), orcaImg);
  }
}

function draw() {
  background(0);

  // Set game states for title screen, mini games and end screen
  if (state === `title`) {
    title();
    button.position(-35 + width / 2, -25 + 2 * height / 3); // Show the button in the middle bottom of canvas
    stopEnd();
  } else if (state === `minigame1`) {
    noCursor();
    minigame1();
    button.position(-500, -500); // Hide button from canvas
    stopBubbly(); // Stop bubblySFX
    bgAudio1.stop(); // Stop background audio of title screen
    ohNo1.pause(); // Pause underwater audio of gameover1 screen
  } else if (state === `complete1`) {
    cursor();
    complete1();
    crunch.stop(); // Stop crunchSFX
    bgAudio2.stop(); // Stop background audio of minigame1 screen
  } else if (state === `gameover1`) {
    gameover1();
    crunch.stop(); // Stop crunchSFX
    bgAudio2.stop(); // Stop background audio of minigame1 screen
  } else if (state === `minigame2`) {
    noCursor();
    minigame2();
    stopBubbly(); // Stop bubblySFX
    yay1.stop(); // Stop background audio of complete1 screen
    ohNo2.pause(); // Pause underwater audio of gameover2 screen
    // bgAudio1.stop(); // Stop background audio of title screen FOR TESTING
  } else if (state === `complete2`) {
    cursor();
    complete2();
    stopBgAudio3(); // Stop background audio of minigame2 screen
  } else if (state === `gameover2`) {
    gameover2();
    stopBgAudio3(); // Stop background audio of minigame2 screen
  } else if (state === `minigame3`) {
    noCursor();
    minigame3();
    stopBubbly(); // Stop bubblySFX
    yay2.stop(); // Stop background audio of complete2 screen
    ohNo3.pause(); // Pause underwater audio of gameover3 screen
    waves.pause(); // Pause waves SFX of gameover3 screen
    // bgAudio1.stop(); // Stop background audio of title screen FOR TESTING
  } else if (state === `complete3`) {
    cursor();
    complete3();
    stopBgAudio4(); // Stop background audio of minigame3 screen
  } else if (state === `gameover3`) {
    gameover3();
    stopBgAudio4(); // Stop background audio of minigame3 screen
  } else if (state === `ending`) {
    noCursor();
    ending();
    stopBubbly(); // Stop bubblySFX
    yay3.stop(); // Stop background audio of complete3 screen
    // bgAudio1.stop(); // Stop background audio of title screen FOR TESTING
  }

  // In case the button keeps showing up in the middle of the screen, this if statement ensure that the button is hidden if the state is any other state than the title screen
  if (!state === `title`) {
    button.position(-500, -500); // Hide button from canvas
  }
}

function title() {
  // Play bubbly sound effects at random
  bubbly = random(bubblySFX);
  playAudio1(); // Play audio setup for title screen

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

function ending() {
  playAudio11(); // Play underwater audio for ending screen

  // Set up gradient background
  let c1, c2, n;
  c1 = color(0, 23, 61); // very dark blue
  c2 = color(0);

  for (let c = 0; c < height; c++) {
    n = map(c, 0, height, 0, 1);
    let newColor = lerpColor(c1, c2, n);
    stroke(newColor);
    line(0, c, width, c);
  }

  // For every bubble object in the bubbles array, call the display and move functions
  for (let b = 0; b < bubbles.length; b++) {
    let bubble = bubbles[b];
    tint(0, 38, 102);
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
  text(`What were you thinking?!`, width / 2, height / 4);
  textSize(24);
  text(`Go back to the surface and get to it!`, width / 2, 90 + height / 2);
  textSize(16);
  text(`Then come back when you are fully prepared!
    We'll be waiting for you!`, width / 2, 15 + 3 * height / 4);
  textSize(10);
  text(`~ PRESS to SPACE to return to the surface ~`, width / 2, height - 50);
  textFont(fontItalic);
  textSize(40);
  text(`You came unprepared and almost got asphyxiated!`, width / 2, -40 + height / 2);
  textSize(32);
  text(`No oxygen tank, no training and no experience!`, width / 2, 10 + height / 2)
  pop();

  push();
  tint(0, 52, 166);
  scuba.move();
  scuba.display();
  pop();
}

// This function is to ensure that the title screen has its audio play and loop
// User must click to start audio files of title screen so when user released their finger from mouse button then audios should resume playing (only for Google Chrome and Microsoft Edge)
function mouseReleased() {
  // If entering the title screen and the state is suspended... (which Chrome and Edge initiate a website, link and such in an suspended state requiring user to interact to trigger simulation)
  if (getAudioContext().state === "suspended") {
    // ...then audio files should resume
    getAudioContext().resume();
  }
}

// function regulating most of state transitions
function keyPressed() {
  // Moving from title screen to minigame1 by pressing ENTER
  if (state === `title` && keyIsDown(13)) {
    state = `minigame1`;
  }

  //SKIPPING THE ORDER TO GO TO THE MINIGAME OF CHOICE
  // I decided to leave these codes in the script to show how I test the mini games
  // Testing minigame2 so adding "skipping minigame1" option to go to minigame 2
  // else if (state === `title` && keyIsDown(32)) {
  //   state = `minigame2`;
  // }
  // Testing minigame3 so adding "skipping minigame1 and minigame2" option to go to minigame 3
  // else if (state === `title` && keyIsDown(16)) {
  //   state = `minigame3`;
  // }
  // Testing final screen so adding "skipping all minigames" option to go to ending screen by moving from title screen to ending screen by pressing character "a"
  // else if (state === `title` && keyIsDown(65)) {
  //   state = `ending`;
  // }

  //console.log(keyIsDown(13), keyIsDown(32));

  // To leave game over screen and restart minigame1, user will press SPACE
  if (state === `gameover1` && keyIsDown(32)) {
    state = `minigame1`;
    timer = 30;
    removeElements();
  }
  // Moving from minigame1's congratulating screen to minigame2 by pressing ENTER
  if (state === `complete1` && keyIsDown(13)) {
    state = `minigame2`;
  }
  // To leave game over screen and restart minigame2, user will press SPACE
  if (state === `gameover2` && keyIsDown(32)) {
    state = `minigame2`;
    removeElements();
    resetCirculation();
    return;
  }
  // Moving from minigame2's congratulating screen to minigame3 by pressing ENTER
  if (state === `complete2` && keyIsDown(13)) {
    state = `minigame3`;
  }
  // To leave game over screen and restart minigame3, user will press SPACE
  if (state === `gameover3` && keyIsDown(32)) {
    state = `minigame3`;
    removeElements();
    resetSimulation();
    return;
  }
  // Moving from minigame3's congratulating screen to the ending screen by pressing ENTER
  if (state === `complete3` && keyIsDown(13)) {
    state = `ending`;
  }
  // Returning to the main page from the ending screen by pressing SPACE
  if (state === `ending` && keyIsDown(32)) {
    state = `title`;
    noTint();
  }
}