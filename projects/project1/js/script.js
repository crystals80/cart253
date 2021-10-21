/**
Draw till You Are Satisfied!!!
Lam Ky Anh Do

This is project is about simulation and I want users to enjoy and have fun drawing their own kaleidoscope and generating their own art piece!
*/

// Array variable (empty list)
let pointsList = [];
let linesList = [];


let leftScreen, rightScreen; // Variables for dividing canvas into 2  subcanvas
let brushSize = 0; // Variable for kaleidoscope

// Variables for automated drawing
let timePassed = 0;
let startTime = 0;
let interval = 200;
let choice = 0;

let state = `title`; // Possible states are title, message, simulation and ending

// Ending state image
let img;

// Spawning title screen balls
let b1 = {
  x: 100,
  y: 100,
  size: 60,
  vx: 2.8,
  vy: 2.2,
}
let b2 = {
  x: 400,
  y: 250,
  size: 10,
  vx: 2,
  vy: 3,
}
let b3 = {
  x: 100,
  y: 500,
  size: 32,
  vx: 2,
  vy: 2.5,
}
let b4 = {
  x: 1000,
  y: 300,
  size: 5,
  vx: 1.8,
  vy: 2.4,
}
let b5 = {
  x: 700,
  y: 400,
  size: 43,
  vx: 2,
  vy: 2.6,
}
let b6 = {
  x: 1000,
  y: 450,
  size: 20,
  vx: 2.5,
  vy: 2.5,
}
let b7 = {
  x: 550,
  y: 320,
  size: 80,
  vx: 2.3,
  vy: 3.7,
}
let b8 = {
  x: 880,
  y: 505,
  size: 28,
  vx: 1.5,
  vy: 2.5,
}
let b9 = {
  x: 50,
  y: 300,
  size: 28,
  vx: 2,
  vy: 2.9,
}
let b10 = {
  x: 600,
  y: 50,
  size: 24,
  vx: 3,
  vy: 1.8,
}
let b11 = {
  x: 900,
  y: 270,
  size: 15,
  vx: 2.9,
  vy: 2,
}
let b12 = {
  x: 140,
  y: 500,
  size: 22,
  vx: 3,
  vy: 4,
}

// Spawning subtitle screen balls
let b13 = {
  x: 500,
  y: 500,
  size: 22,
  vx: 1,
  vy: 2.5,
}
let b14 = {
  x: 700,
  y: 500,
  size: 12,
  vx: 2,
  vy: 1,
}
let b15 = {
  x: 300,
  y: 500,
  size: 5,
  vx: 1,
  vy: 2,
}
let b16 = {
  x: 400,
  y: 500,
  size: 15,
  vx: 1,
  vy: 1.5,
}
let b17 = {
  x: 100,
  y: 500,
  size: 25,
  vx: 1.5,
  vy: 1,
}
let b18 = {
  x: 900,
  y: 500,
  size: 10,
  vx: 2,
  vy: 2,
}

function preload() {
  img = loadImage('assets/images/well-done.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Setup for simulation

  // Divide canvas in 2 to create different simulations
  leftScreen = createGraphics(windowWidth / 2, windowHeight);
  rightScreen = createGraphics(windowWidth / 2, windowHeight);

  // Set angleMode to degrees for my understanding of angle
  angleMode(DEGREES);

  // Set up the save button to save sketching to .jpg file
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);
  saveButton.position(-100, 20);

  // Set up the clear screen buttons
  clearButton1 = createButton('clear');
  clearButton1.mousePressed(clearLeftScreen);
  clearButton1.position(-100, 20);

  clearButton2 = createButton('clear');
  clearButton2.mousePressed(clearRightScreen);
  clearButton2.position(-100, 20);

  // Set up the slider for the thickness of the brush
  brushSizeSlider = createSlider(1, 32, 1, 1);
  brushSizeSlider.position(-200, 20);
  brushSizeSlider.style('width', '100px');

  // Set up un-clickable instruction to switch to ending state
  endButton = createButton("Satisfied? Press ENTER");
  endButton.mousePressed(ending);
  endButton.position(-200, 20);

  // Set up initial position of automated line drawing
  linesList.push({
    x1: 3 * width / 4,
    y1: height / 2,
    x2: (3 * width / 4) + 5,
    y2: height / 2
  });
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `message`) {
    message();
  } else if (state === `simulation`) {
    saveButton.position(-110 + width / 2, 20);
    clearButton1.position(-65 + width / 2, 20);
    clearButton2.position(-65 + width, 20);
    brushSizeSlider.position(20, 20);
    endButton.position(17 + width / 2, 20);
    simulation();
  } else if (state === `ending`) {
    ending();
  }

}

function title() {
  bouncingBalls();
  // Title screen
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(64);
  text(`Hello there!`, width / 2, height / 2.3);
  textSize(25);
  text(`~ Take a moment to enjoy the visuals ~`, width / 2, height / 1.8);
  textSize(10);
  text(`Click anywhere to move to the next step!`, width / 2, height / 1.1);
}

function bouncingBalls() {
  // Setup of balls
  ellipseMode(RADIUS);
  noStroke();

  // Ball movement
  b1.x += b1.vx;
  b1.y += b1.vy;

  b2.x += b2.vx;
  b2.y += b2.vy;

  b3.x += b3.vx;
  b3.y += b3.vy;

  b4.x += b4.vx;
  b4.y += b4.vy;

  b5.x += b5.vx;
  b5.y += b5.vy;

  b6.x += b6.vx;
  b6.y += b6.vy;

  b7.x += b7.vx;
  b7.y += b7.vy;

  b8.x += b8.vx;
  b8.y += b8.vy;

  b9.x += b9.vx;
  b9.y += b9.vy;

  b10.x += b10.vx;
  b10.y += b10.vy;

  b11.x += b11.vx;
  b11.y += b11.vy;

  b12.x += b12.vx;
  b12.y += b12.vy;

  // Keep ball within canvas
  if (b1.x < b1.size || b1.x > width - b1.size) {
    b1.vx *= -1;
  }
  if (b1.y < b1.size || b1.y > height - b1.size) {
    b1.vy *= -1;
  }

  if (b2.x < b2.size || b2.x > width - b2.size) {
    b2.vx *= -1;
  }
  if (b2.y < b2.size || b2.y > height - b2.size) {
    b2.vy *= -1;
  }

  if (b3.x < b3.size || b3.x > width - b3.size) {
    b3.vx *= -1;
  }
  if (b3.y < b3.size || b3.y > height - b3.size) {
    b3.vy *= -1;
  }

  if (b4.x < b4.size || b4.x > width - b4.size) {
    b4.vx *= -1;
  }
  if (b4.y < b4.size || b4.y > height - b4.size) {
    b4.vy *= -1;
  }

  if (b5.x < b5.size || b5.x > width - b5.size) {
    b5.vx *= -1;
  }
  if (b5.y < b5.size || b5.y > height - b5.size) {
    b5.vy *= -1;
  }

  if (b6.x < b6.size || b6.x > width - b6.size) {
    b6.vx *= -1;
  }
  if (b6.y < b6.size || b6.y > height - b6.size) {
    b6.vy *= -1;
  }

  if (b7.x < b7.size || b7.x > width - b7.size) {
    b7.vx *= -1;
  }
  if (b7.y < b7.size || b7.y > height - b7.size) {
    b7.vy *= -1;
  }

  if (b8.x < b8.size || b8.x > width - b8.size) {
    b8.vx *= -1;
  }
  if (b8.y < b8.size || b8.y > height - b8.size) {
    b8.vy *= -1;
  }

  if (b9.x < b9.size || b9.x > width - b9.size) {
    b9.vx *= -1;
  }
  if (b9.y < b9.size || b9.y > height - b9.size) {
    b9.vy *= -1;
  }

  if (b10.x < b10.size || b10.x > width - b10.size) {
    b10.vx *= -1;
  }
  if (b10.y < b10.size || b10.y > height - b10.size) {
    b10.vy *= -1;
  }

  if (b11.x < b11.size || b11.x > width - b11.size) {
    b11.vx *= -1;
  }
  if (b11.y < b11.size || b11.y > height - b11.size) {
    b11.vy *= -1;
  }

  if (b12.x < b12.size || b12.x > width - b12.size) {
    b12.vx *= -1;
  }
  if (b12.y < b12.size || b12.y > height - b12.size) {
    b12.vy *= -1;
  }
  // Display ball
  fill(7, 224, 220); // cyan
  ellipse(b1.x, b1.y, b1.size);
  fill(219, 136, 209); // pastel pink
  ellipse(b2.x, b2.y, b2.size);
  fill(88, 227, 183); // pastel green teal
  ellipse(b3.x, b3.y, b3.size);
  fill(44, 33, 209); // blue
  ellipse(b4.x, b4.y, b4.size);
  fill(214, 50, 70); // red pink
  ellipse(b5.x, b5.y, b5.size);
  fill(119, 95, 231); // purple
  ellipse(b6.x, b6.y, b6.size);
  fill(182, 248, 121); // pastel lime green
  ellipse(b7.x, b7.y, b7.size);
  fill(53, 136, 248); // sky blue
  ellipse(b8.x, b8.y, b8.size);
  fill(156, 76, 21); // brown
  ellipse(b9.x, b9.y, b9.size);
  fill(190, 38, 217); // magenta
  ellipse(b10.x, b10.y, b10.size);
  fill(245, 228, 25); // yellow
  ellipse(b11.x, b11.y, b11.size);
  fill(223, 68, 33); // orange
  ellipse(b12.x, b12.y, b12.size);
}

function message() {
  // Display floating balls
  floatingBalls();

  // For a dynamic background
  let numStatic = 500;
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }

  // Display message for the next state
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(64);
  text(`Now...`, width / 2, height / 5);
  textSize(25);
  text(`Would you like to draw?`, width / 2, height / 3);
  textSize(30);
  text(`Well... `, width / 2, height / 1.9);
  textSize(20);
  text(`What are you waiting for?!`, width / 2, height / 1.7);
  textSize(15);
  text(`Well, move on, will you Mate?!`, width / 2, height / 1.55);
  textSize(10);
  text(`Press SPACE to open the sketchbook!`, width / 2, height / 1.1);
}

function floatingBalls() {
  // Setup balls
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  fill(r, g, b);


  // Balls move up by jiggling randomly on the horizontal axis
  b13.y -= b13.vy;
  b13.x += random(-1, 1);
  b13.y -= 1;

  b14.y -= b14.vy;
  b14.x += random(-2, 2);
  b14.y -= 1.5;

  b15.y -= b15.vy;
  b15.x += random(-2, 1);
  b15.y -= 2;

  b16.y -= b16.vy;
  b16.x += random(-1, 2);
  b16.y -= 1.5;

  b17.y -= b17.vy;
  b17.x += random(-1.5, 1);
  b17.y -= 1;

  b18.y -= b18.vy;
  b18.x += random(-1, 1.5);
  b18.y -= 2;

  // Reset balls to the bottom of canvas
  if (b13.y < 0) {
    b13.y = height;
    b13.x = random(0, width);
  }

  if (b14.y < 0) {
    b14.y = height;
    b14.x = random(0, width);
  }
  if (b15.y < 0) {
    b15.y = height;
    b15.x = random(0, width);
  }
  if (b16.y < 0) {
    b16.y = height;
    b16.x = random(0, width);
  }
  if (b17.y < 0) {
    b17.y = height;
    b17.x = random(0, width);
  }
  if (b18.y < 0) {
    b18.y = height;
    b18.x = random(0, width);
  }

  // Display balls
  ellipse(b13.x, b13.y, b13.size);
  ellipse(b14.x, b14.y, b14.size);
  ellipse(b15.x, b15.y, b15.size);
  ellipse(b16.x, b16.y, b16.size);
  ellipse(b17.x, b17.y, b17.size);
  ellipse(b18.x, b18.y, b18.size);
}

function simulation() {
  //Display different screens to draw differently
  leftSubcanvas();
  image(leftScreen, 0, 0);
  drawKaleidoscope()
  rightSubcanvas();
  image(rightScreen, width / 2, 0);
  generateLines();
}

function leftSubcanvas() {
  // Set up left screen
  background(0);
  noStroke();
  fill(255);
  textAlign(CENTER, TOP);
  textSize(20);
  text("Draw your kaleidoscope!", windowWidth / 4, 50);

}

function rightSubcanvas() {
  //Set up right canvas
  rect(width / 2, 0, width / 2, windowHeight);
  fill(0);
  textAlign(CENTER, TOP);
  textSize(20);
  text("Generate an artwork!", windowWidth / 4 + windowWidth / 2, 50);
}

/*******
NOTE coding this drawKaleidoscope, drawLines and generateLines functions were successful with the help of the Computation Lab Tech (Sabine)
*******/

function drawKaleidoscope() {
  push();
  // Give value to the size of the brush
  brushSize = brushSizeSlider.value();

  // Create continuous lines
  if (mouseX > 30 && mouseX < width / 3 + width / 7 && mouseY > 100 && mouseY < height - 30) {
    if (mouseIsPressed === true) {
      // Add to list : if mouseX/Y and previous mouseX/Y  are not the same
      if (mouseX !== pmouseX || mouseY !== pmouseY) {
        pointsList.push({
          mx: mouseX,
          my: mouseY,
          px: pmouseX,
          py: pmouseY,
          // Add a customizable stroke weight
          lineStrokeSize: brushSize,
          // Add colour to brushstrokes
          lineStrokeColor: color(random(255), random(255), random(255)),
        });
      }
    }
  }

  // length = number of items in the list
  if (pointsList.length !== 0) {
    let degrees = 0;
    // Go through every line object and draw
    for (let i = 0; i < pointsList.length; i++) {
      noStroke();
      strokeWeight(pointsList[i].lineStrokeSize);
      // Draw the original line object
      line(pointsList[i].mx, pointsList[i].my, pointsList[i].px, pointsList[i].py);
      // Draw line object 8 times each time rotate by 45 degrees and mirror
      for (let j = 0; j < 8; j++) {
        degrees += 45;
        push();
        translate(width / 4, height / 2);
        scale(1, -1);
        rotate(degrees)
        stroke(pointsList[i].lineStrokeColor);
        line(pointsList[i].mx - width / 4, pointsList[i].my - height / 2, pointsList[i].px - width / 4, pointsList[i].py - height / 2);
        pop();
      }
    }
  }
  pop();
}

function generateLines() {
  // Draw lines
  for (let i = 0; i < linesList.length; i++) {
    stroke(255, 0, 0);
    line(linesList[i].x1, linesList[i].y1, linesList[i].x2, linesList[i].y2);
  }

  // Set up intervals for lines to generate
  timePassed = millis() - startTime;
  if (timePassed > interval) {
    let tempchoice = Math.floor(random(0, 5));
    if (choice === 1 && tempchoice === 3) {
      choice = 4;
    } else if (choice === 3 && tempchoice === 1) {
      choice = 2;
    } else if (choice === 2 && tempchoice === 4) {
      choice = 1;
    } else if (choice === 4 && tempchoice === 2) {
      choice = 3;
    } else {
      choice = tempchoice;
    }
    console.log(choice);
    console.log("reset");
    timePassed = 0;
    startTime = millis();
  }
  // Set up how lines should move
  let previousLine = linesList[linesList.length - 1];
  if (choice === 0) {
    linesList.push({
      x1: previousLine.x2,
      y1: previousLine.y2,
      x2: previousLine.x2,
      y2: previousLine.y2,
    });
  }
  // Line go right
  if (choice === 1) {
    if (previousLine.x2 + 3 >= width - 25) {
      choice = 2;
    } else {
      linesList.push({
        x1: previousLine.x2,
        y1: previousLine.y2,
        x2: previousLine.x2 + 3,
        y2: previousLine.y2,
      });
    }
  }
  // Line go down
  if (choice === 2) {
    if (previousLine.y2 + 3 >= height - 25) {
      choice = 1;
    } else {
      linesList.push({
        x1: previousLine.x2,
        y1: previousLine.y2,
        x2: previousLine.x2,
        y2: previousLine.y2 + 3,
      });
    }
  }
  // Line go left
  if (choice === 3) {
    if (previousLine.x2 - 3 <= 25 + width / 2) {
      choice = 4;
    } else {
      linesList.push({
        x1: previousLine.x2,
        y1: previousLine.y2,
        x2: previousLine.x2 - 3,
        y2: previousLine.y2,
      });
    }
  }
  // Line go up
  if (choice === 4) {
    if (previousLine.y2 - 3 <= 100) {
      choice = 3;
    } else {
      linesList.push({
        x1: previousLine.x2,
        y1: previousLine.y2,
        x2: previousLine.x2,
        y2: previousLine.y2 - 3,
      });
    }
  }
}

function ending() {
  // Once you are satisfied with your artwork, an end screen appears
  title();
  saveButton.position(-100, 20);
  clearButton1.position(-100, 20);
  clearButton2.position(-100, 20);
  brushSizeSlider.position(-200, 20);
  endButton.position(-200, 20);

  // Set up ending state's image
  imageMode(CENTER);
  image(img, width / 2, height / 2, 3 * width / 4, 9 * height / 10);
}

// Save kaleidoscope and automated drawing
function saveFile() {
  save('design.jpg');
}

// Clear kaleidoscope
function clearLeftScreen() {
  pointsList = [];
}

// Clear automated drawing
function clearRightScreen() {
  linesList = [];
  linesList.push({
    x1: 3 * width / 4,
    y1: height / 2,
    x2: (3 * width / 4) + 5,
    y2: height / 2
  });
  choice = 0;
  timePassed = 0;
  startTime = millis();
}

// Switch to subtitle screen
function mouseClicked() {
  if (state === `title`) {
    state = `message`;
  }
}

// Start the simulation
function keyPressed() {
  if (state === `message` && keyIsDown(32)) {
    state = `simulation`;
  }
  if (state === `simulation` && keyIsDown(13)) {
    state = `ending`;
  }
}

// Set window dimension to resize to any screen size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}