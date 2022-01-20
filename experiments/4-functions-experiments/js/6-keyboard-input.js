/**
Experimenting with functions
Lam Ky Anh Do

*/

let bg = 0;

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(bg);

  /*textAlign(CENTER);
  textSize(64);
  fill(255);
  // Any key pressed displays the letters or name of its Function
  //text(key, width / 2, height / 2);
  // Any key pressed displays keycode in numbers or so
  text(keyCode, width / 2, height / 2); // Use resource on keycode.info as reference for each key*/

  // Hold key "a" to display the square
  /*if (keyIsDown(65)) {
    rectMode(CENTER);
    rect(250, 250, 100, 100);
  }*/

  handleInput();
  move();
  display();
}

//function keyPressed() {
//bg = random(0, 255);
// Pressed any key to display it into keycode
/*if (key === `a`) {
  bg = 0;
} else if (key === `b`) {
  bg = 127;
} else if (key === `c`) {
  fill(0);
  bg = 255;
}*/

// Pressed any arrow keyCodes to change colour background
// Can also replace keycode # by terms (38 = UP_ARROW & 40 = DOWN_ARROW)
/*if (keyCode === UP_ARROW) {
  bg += 10;
  bg = constrain(bg, 0, 255);
} else if (keyCode === DOWN_ARROW) {
  bg -= 10;
  bg = constrain(bg, 0, 255);
}*/
//}

function handleInput() {

  if (keyIsDown(LEFT_ARROW)) {
    circle.vx = -circle.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    circle.vx = circle.speed;
  } else {
    circle.vx = 0;
  }


  if (keyIsDown(UP_ARROW)) {
    circle.vy = -circle.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    circle.vy = circle.speed;
  } else {
    circle.vy = 0;
  }
}

function move() {
  circle.x += circle.vx;
  circle.y += circle.vy;
}

function display() {
  ellipse(circle.x, circle.y, circle.size);
}