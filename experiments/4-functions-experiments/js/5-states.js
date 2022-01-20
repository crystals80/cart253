/**
Experimenting with functions
Lam Ky Anh Do

*/

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
};

// Declaring state
let state = `title`; // Possible states are title, animation and ending

function setup() {
  createCanvas(500, 500);
  circle.vx = circle.speed;
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  /*// Title
  fill(255);
  text(`Life`, width / 2, height / 2);

  // Animation
  circle.x += circle.vx;
  circle.y += circle.vy;

  ellipse(circle.x, circle.y, circle.size);

  // Ending
  fill(127);
  text(`It's all over`, width / 2, height / 2);*/

  // To not have everything going on at the same time, Include states and conditionals
  /*if (state === `title`) {
    // Title
    fill(255);
    text(`Life`, width / 2, height / 2);
  } else if (state === `animation`) {
    // Animation
    circle.x += circle.vx;
    circle.y += circle.vy;

    if (circle.x > width + 50) {
      state = `ending`;
    }

    ellipse(circle.x, circle.y, circle.size);
  } else if (state === `ending`) {
    // Ending
    fill(127);
    text(`It's all over`, width / 2, height / 2);
  }*/

  // For legible code (you can make it even more tidy by giving more functions for the animatio movement etc)
  if (state === `title`) {
    title();
  } else if (state === `animation`) {
    animation();
  } else if (state === `ending`) {
    ending();
  }
}

function title() {
  // Title
  fill(255);
  text(`Life`, width / 2, height / 2);
}

function animation() {
  // Animation
  circle.x += circle.vx;
  circle.y += circle.vy;

  if (circle.x > width + 50) {
    state = `ending`;
  }

  ellipse(circle.x, circle.y, circle.size);
}

function ending() {
  // Ending
  fill(127);
  text(`It's all over`, width / 2, height / 2);
}

// To transition from one another
function keyPressed() {
  if (state === `title`) {
    state = `animation`;
  }
}