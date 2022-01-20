/**
Experimenting with functions
Lam Ky Anh Do

*/

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
};

function setup() {
  createCanvas(500, 500);

  //circle.vx = circle.speed;
  //circle.vy = circle.speed;
}

function draw() {
  background(0);

  // Circle moves randomly every single frame solely aka not much changing direct and slower movement
  //circle.vx = random(-circle.speed, circle.speed);
  //circle.vy = random(-circle.speed, circle.speed);

  // Circle moves randomly not every single frame aka changing direction and faster movement
  // let change = random();
  // if (change < 0.1) {
  //   /*# in percentage*/
  //   circle.vx = random(-circle.speed, circle.speed);
  //   circle.vy = random(-circle.speed, circle.speed);
  // }

  // Distance of circle from mouse (circle chasing mouse)
  // let dx = circle.x - mouseX
  // let dy = circle.y - mouseY;
  //
  // if (dx < 0) {
  //   circle.vx = circle.speed;
  // } else if (dx > 0) {
  //   circle.vx = -circle.speed;
  //
  // }
  // if (dy < 0) {
  //   circle.vy = circle.speed;
  // } else if (dy > 0) {
  //   circle.vy = -circle.speed;
  // }

  // Distance of circle from mouse (mouse chasing circle)
  let dx = circle.x - mouseX
  let dy = circle.y - mouseY;

  if (dx < 0) {
    circle.vx = -circle.speed;
  } else if (dx > 0) {
    circle.vx = circle.speed;

  }
  if (dy < 0) {
    circle.vy = -circle.speed;
  } else if (dy > 0) {
    circle.vy = circle.speed;
  }

  circle.x += circle.vx;
  circle.y += circle.vy;

  ellipse(circle.x, circle.y, circle.size);
}