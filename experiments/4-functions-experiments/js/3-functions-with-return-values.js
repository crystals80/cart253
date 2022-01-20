/**
Experimenting with functions
Lam Ky Anh Do

*/

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 1,
  vy: 1,
};

function setup() {
  createCanvas(500, 500);

  let hotCelsius = toCelsius(100);
  // Use ${} to quote var that you want to show in text
  console.log(`100 degrees Farenheit is ${hotCelsius} degrees Celsius.`)

  let coldCelsius = toCelsius(10);
  console.log(`10 degrees Farenheit is ${coldCelsius} degrees Celsius.`)
}

function draw() {
  background(0);

  // So instead of declaring var here, you can do it straight in the ellipse()
  //let x = random(0, width);
  //let y = random(0, height);
  //ellipse(random(0, width), random(0, height), 100);

  move();
  checkOffscreen();
  display();
}

function move() {
  circle.x += circle.vx;
  circle.y += circle.vy;
}

function checkOffscreen() {
  let offscreen = circleIsOffscreen();

  // Already written in function circleIsOffscreen so you can replace it by that term and no need to reset()
  //if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {reset();}
  if (offscreen) {
    reset();
  }
}

// This function is to replace the previous by providing a situation (boolean --> true/false) rather than number (set the whole code and reset in this case) to the condition
function circleIsOffscreen() {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  } else {
    return false;
  }
}

function display() {
  ellipse(circle.x, circle.y, circle.size);
}

function reset() {
  circle.x = 250;
  circle.y = 250;
  circle.vx = random(-10, 10);
  circle.vy = random(-10, 10);
}

function toCelsius(farenheit) {
  let celsius = (farenheit - 32) * 5 / 9;
  // The return statement ends function execution and specifies a value to be returned to the function caller (basically return controls the function execution)
  return celsius;
}