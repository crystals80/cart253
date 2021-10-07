/**
Experimenting with functions
Lam Ky Anh Do

In javascript and other programming languages, TEXT as a value assigned to variable is called STRING. Use "" or '' or `` to make it work.
*/

/*let hamlet1 = "To be or not to be";
let hamlet2 = 'That is the question';
let hamlet3 = `Whether 'this nobler in the mind...`;

// Add \""\ if you want to quote something, else the program will be confused
let string = "She said, \"I do not agree!\"";
// OR Use different quotation marks
let stringg = 'She said, "I do not agree"';

// What to use for legibility
let name = "hamlet";
let title = "Prince";
let country = "Denmark";
// IMPORTANT NOTE: OK so I discovered that ${quoted var} only works with these quotation marks (``)
let string1 = `Hi, my name is ${Hamlet}, ${title} of ${country}!`;
// So you can also write text using "" BUT space between words, + and "" is CRUCIAL AND I MEAN IT WHEN I SAY CRUCIAL or else it won't work!
// Personally it's waaaay more waork than the last
let string2 = "Hi, my name is " + name + ", " + title + " of " + country + "!";*/

let hello = {
  string: `Hello, world!`,
  x: 50,
  y: 50,
  size: 64,
  vx: 5,
  vy: 1,
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  //background(127);
  background(0);
  //rect(250, 250, 10);

  hello.x += hello.vx;
  hello.y += hello.vy;
  hello.size += 1;

  // Styling
  textAlign(CENTER, CENTER);
  //textSize(64);
  textSize(hello.size)
  textStyle(BOLD)

  fill(200, 50, 200);
  stroke(50, 200, 50);
  strokeWeight(3);
  // Default text colour is black
  //text(`Hello, world!`, 250, 250);
  text(`Hello, world!`, hello.x, hello.y);
}