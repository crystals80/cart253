/**
Experimenting with conditionals
Lam Ky Anh Do

*/

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  //speed: 5,
  acceleration: 0.25,
  maxSpeed: 5,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // Circle moving towards mouse and/or faster
  /*if (mouseX < circle.x) {
    //circle.vx = -1;
    circle.vx = -circle.speed;
  } else {
    //circle.vx = 1;
    circle.vx = circle.speed;
  }
  if (mouseY < circle.y) {
    //circle.vy = -1
    circle.vy = -circle.speed;
  } else {
    //circle.vy = 1;
    circle.vy = circle.speed;
  }*/

  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  // Acceleration
  if (mouseX < circle.x) {
    circle.ax = -circle.acceleration;
  } else {
    circle.ax = circle.acceleration;
  }
  if (mouseY < circle.y) {
    circle.ay = -circle.acceleration;
  } else {
    circle.ay = circle.acceleration;
  }

  circle.vx = circle.vx + circle.ax;
  circle.vx = constrain(circle.vx, -circle.maxSpeed, circle.maxSpeed);
  circle.vy = circle.vy + circle.ay;
  circle.vy = constrain(circle.vy, -circle.maxSpeed, circle.maxSpeed);

  ellipse(circle.x, circle.y, circle.size);
}