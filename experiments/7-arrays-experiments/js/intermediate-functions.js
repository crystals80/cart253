/**
Learning about intermediate functions
Lam Ky Anh Do

Experimenting with p5 on how to use more sophisticated functions for more legible code
*/

"use strict";

// Our user, tomove with the mouse
let user = {
  x: 0,
  y: 0,
  size: 100,
};

// First food object
/*let food1 = {
  x: 250,
  y: 300,
  size: 50,
  eaten: false, // we want to track whether the user has eaten food
};

// Second food object
let food2 = {
  x: 350,
  y: 300,
  size: 50,
  eaten: false,
};

let food3 = {
  x: 450,
  y: 300,
  size: 50,
  eaten: false,
};

let food4 = {
  x: 550,
  y: 300,
  size: 50,
  eaten: false,
};*/

// The variables above were transformed into this, as funtion createFood was createFood
// Foods
let food1, food2, food3, food4;

function setup() {
  createCanvas(windowWidth, windowHeight);

  food1 = createFood(250, windowHeight / 2);
  food2 = createFood(350, windowHeight / 2);
  food3 = createFood(450, windowHeight / 2);
  food4 = createFood(550, windowHeight / 2);
}

function createFood(x, y) {
  let food = {
    x: x,
    y: y,
    size: 50,
    eaten: false,
  };
  return food;
}

function draw() {
  background(0);

  // Move user with mouse
  moveUser();

  // Check whether user has eaten their food
  checkFood(food1);
  checkFood(food2);
  checkFood(food3);
  checkFood(food4);
  // These were replaced by the those above
  /*checkFood1();
  checkFood2();
  checkFood3();
  checkFood4();*/

  // Display the user and foods
  displayUser();
  // These replace the 4 below
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);
  /*displayFood1();
  displayFood2();
  displayFood3();
  displayFood4();*/
}

// Set user position to mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function checkFood(food) {
  if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if (d < user.size / 2 + food1.size / 2) {
      food.eaten = true;
    }
  }
}

// Not needed as the function above encompasses them all
// Check if user overlaps food1 objects and eats it if so:
/*function checkFood1() {
  // We only want to check an overlap if food1 hasn'T been eaten yet
  if (!food1.eaten) {
    let d = dist(user.x, user.y, food1.x, food1.y);
    if (d < user.size / 2 + food1.size / 2) {
      food1.eaten = true;
    }
  }
}

// The same as above but for food2
function checkFood2() {
  if (!food2.eaten) {
    let d = dist(user.x, user.y, food2.x, food2.y);
    if (d < user.size / 2 + food2.size / 2) {
      food2.eaten = true;
    }
  }
}

// The same as above but for food3
function checkFood3() {
  if (!food3.eaten) {
    let d = dist(user.x, user.y, food3.x, food3.y);
    if (d < user.size / 2 + food3.size / 2) {
      food3.eaten = true;
    }
  }
}

// The same as above but for food4
function checkFood4() {
  if (!food4.eaten) {
    let d = dist(user.x, user.y, food4.x, food4.y);
    if (d < user.size / 2 + food4.size / 2) {
      food4.eaten = true;
    }
  }
}*/


// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

function displayFood(food) {
  if (!food.eaten) {
    push();
    fill(255, 100, 200);
    ellipse(food.x, food.y, food.size);
    pop();
  }
}


// These displayFood1234 functions not needed anymore as we have one encompassing them all above
// Draw food1 as a circle
/*function displayFood1() {
  // We don't  want to display it if it has been eaten
  if (!food1.eaten) {
    push();
    fill(255, 100, 200);
    ellipse(food1.x, food1.y, food1.size);
    pop();
  }
}

// As above but for food2
function displayFood2() {
  if (!food2.eaten) {
    push();
    fill(255, 100, 100);
    ellipse(food2.x, food2.y, food2.size);
    pop();
  }
}

// As above but for food3
function displayFood3() {
  if (!food3.eaten) {
    push();
    fill(100, 100, 255);
    ellipse(food3.x, food3.y, food3.size);
    pop();
  }
}

// As above but for food4
function displayFood4() {
  if (!food4.eaten) {
    push();
    fill(100, 255, 100);
    ellipse(food4.x, food4.y, food4.size);
    pop();
  }
}*/