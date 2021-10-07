/**
Experimenting with functions
Lam Ky Anh Do

*/

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  //parallels();
  // If you want to draw more parallels(), then u add info into () and add that info into the () of the function parallels() too
  /*parallels(100, 100);
  parallels(50, 50);
  parallels(200, 200);
  parallels(312, 257);
  parallels(-50, 400);
  parallels(70, 475);*/

  // Adding customizable number of lines (numLines)
  /*parallels(100, 100, 5);
  parallels(50, 50, 10);
  parallels(200, 200, 15);
  parallels(312, 257, 20);*/

  // Adding customizable line size (lineWidth & lineHeight)
  parallels(100, 100, 5, 1, 100);
  parallels(50, 50, 10, 2, 20);
  parallels(200, 200, 15, 7, 3);
  parallels(312, 257, 20, 0.5, 300);

  // Adding customizable line spacing (lineSpacing)
  parallels(100, 100, 5, 1, 100, 1);
  parallels(50, 50, 10, 2, 20, 10);
  parallels(200, 200, 15, 7, 3, 20);
  parallels(312, 257, 20, 0.5, 300, 2);
}

function parallels(x, y, numLines, lineWidth, lineHeight, lineSpacing) {
  /*// Declaring var for this specific task, so no need to do it at the top
  let x = 50;
  let y = 250;*/ // Erasing this part since it was mentioned in the ()

  // i = counting variable; i ++ means i is growing by 1 or so; now we have a constant growing loop)
  // numLines for x number of lines
  for (let i = 0; i < numLines; i++) {
    noStroke();
    fill(255);
    rectMode(CENTER);
    // Change the width/height of lines here
    //rect(x, y, 2, 150);
    // Replace width and height of previous rect to with lineWidth & lineHeight for customization
    rect(x, y, lineWidth, lineHeight);
    // Change the spacing
    //x += 10;
    // Customizable spacing
    x += lineSpacing;
  }
}