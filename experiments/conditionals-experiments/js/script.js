/**
Experimenting with conditionals
Lam Ky Anh Do

*/

"use strict";

//let backgroundShade = 0;
/*let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 10,
};*/

let circle1 = {
  x: undefined,
  y: undefined,
  size: 100,
};

let dangerZone = {
  x: 250,
  y: 250,
  size: 150,
};

let circle = {
  x: 250,
  y: 250,
  size: 150,
}

let bg = {
  r: 0,
  g: 0,
  b: 0,
};

/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

  // Loops beyond counting
  circle1.x = random(0, width);
  circle1.y = random(0, height);

  let d = dist(circle1.x, circle1.y, dangerZone.x, dangerZone.y);
  while (d < circle1.size / 2 + dangerZone.size / 2) {
    circle1.x = random(0, width);
    circle1.y = random(0, height);
    d = dist(circle1.x, circle1.y, dangerZone.x, dangerZone.y);
  }
}


/**
Description of draw()
*/
function draw() {
  //background(backgroundShade);

  //circle.x = circle.x + circle.speed;
  //ellipse(circle.x, circle.y, circle.size);

  //Conditionals
  /*if (circle.x > width) {
    circle.speed = -circle.speed;
  }
  if (circle.x < 0) {
    circle.speed = -circle.speed;
  }
  if (mouseY < height / 2) {
    fill(255, 0, 0);
  }
  if (mouseY > height / 2) {
    fill(0, 0, 255);
  }

  //More Conditionals

  if (mouseX < width / 2) {
    fill(255, 0, 0);
  }
  /*else {
    fill(0, 255, 0);
  }
  else if (mouseX < 2 * width / 3) {
    fill(0, 255, 0);
  } else {
    fill(0, 0, 255);
  }

  if (circle.x > width / 2 && circle.x < 2 * width / 3) {
    fill(255)
  }

  if (circle.x < width / 2 || circle.x > 2 * width / 3) {
    fill(255)
  }*/

  //Booleans
  /*if (mouseIsPressed === true) {
    background(255);
  } else {
    background(backgroundShade);
  }
  if (keyIsPressed) {
    background(255);
  } else {
    background(backgroundShade);
  }

  let displayCircle = false;

  if (mouseIsPressed) {
    displayCircle = true;
  }

  if (displayCircle) {
    ellipse(250, 250, 100, 100);
  }*/

  // Loops

  /*let catepillar = {
    x: 100,
    y: 250,
    segmentSize: 50,
  };

  noStroke();
  fill(100, 200, 100);

  ellipse(catepillar.x, catepillar.y, catepillar.segmentSize);
  // ellipse(catepillar.x + 40, catepillar.y, catepillar.segmentSize);
  // ellipse(catepillar.x + 80, catepillar.y, catepillar.segmentSize);
  // ellipse(catepillar.x + 120, catepillar.y, catepillar.segmentSize);
  // ellipse(catepillar.x + 160, catepillar.y, catepillar.segmentSize);

  //To avoid repeating same lengthy code (above)
  let x = catepillar.x;*/

  /*ellipse(x, catepillar.y, catepillar.segmentSize);
  x = x + 40
  ellipse(x, catepillar.y, catepillar.segmentSize);
  x = x + 40
  ellipse(x, catepillar.y, catepillar.segmentSize);
  x = x + 40
  ellipse(x, catepillar.y, catepillar.segmentSize);
  x = x + 40*/

  //While Loop

  /*let numSegments = 5;
  let segmentsDrawn = 0;

  while (segmentsDrawn < numSegments) {
    ellipse(x, catepillar.y, catepillar.segmentSize);
    x = x + 40;
    //segmentDrawn += 1;
    segmentDrawn++; //same as above
  }*/

  // For Loop
  /*let numSegments = 10;

  //for (let segmentsDrawn = 0; segmentsDrawn < numSegments; segmentsDrawn++) {
  for (let i = 0; i < numSegments; i++) { // i = increment
    ellipse(x, catepillar.y, catepillar.segmentSize);
    x = x + 40;
  }*/

  // Loops beyong counting
  /*fill(255);
  noStroke();
  ellipse(circle1.x, circle1.y, circle1.size);

  //Danger zone
  noFill();
  stroke(255, 0, 0);
  ellipse(dangerZone.x, dangerZone.y, dangerZone.size);*/


  //Mouse input

  background(bg.r, bg.g, bg.b);
  ellipse(circle.x, circle.y, circle.size);
}

function mousePressed() {
  // circle.x = mouseX;
  // circle.y = mouseY;

  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);
}

function mouseMoved() {
  // circle.x = mouseX;
  // circle.y = mouseY;

  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);
}

function mouseDragged() {
  // circle.x = mouseX;
  // circle.y = mouseY;

  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);
}