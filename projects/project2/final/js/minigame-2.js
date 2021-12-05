/********************************
Mini Game 2 and Its Complete and Gameover Screens
Lam Ky Anh Do

This js file is all about mini game 2 and includes the draw function for minigame2, the functions for the game's complete and gameover screen
********************************/

// Draw minigame2
function minigame2() {

  // Display background
  push();
  image(bg2, 0, 0, windowWidth, windowHeight + 150);
  imageMode(CORNER);
  pop();

  playAudio3(); // Play audio setup for minigame2

  // Display user
  turtle.handleInput();
  turtle.move();
  turtle.display();

  // Display fish circulation and check if the fishes would hit the turtle
  for (let i = 0; i < fishesCirculation.length; i++) {
    let fishC = fishesCirculation[i];
    fishC.move();
    fishC.wrap();
    fishC.display();

    turtle.checkHit(fishC);
  }

  // If turtle is hit by one of the fishes then it is game over
  if (!turtle.alive) {
    state = `gameover2`;
  }

  // If turtle reach the surface (top of canvas) then user have succeeded minigame2
  if (turtle.y < 0) {
    state = `complete2`;
  }
}

// Reset gameover2 to restart minigame2 by reactivating the turtle and placing at its initial position
function resetCirculation() {
  turtle.alive = true;
  let x = width / 2;
  let y = height - 50;
  turtle.x = x;
  turtle.y = y;
}

// Set up winning title screen of minigame2
function complete2() {
  playAudio6(); // Play happy background music for complete2

  // Set up gradient background
  let c1, c2, n;
  c1 = color(63, 191, 191); // Light teal
  c2 = color(63, 76, 191); // light indigo

  for (let c = 0; c < height; c++) {
    n = map(c, 0, height, 0, 1);
    let newColor = lerpColor(c1, c2, n);
    stroke(newColor);
    line(0, c, width, c);
  }

  // For every bubble object in the bubbles array, call the display and move functions
  for (let b = 0; b < bubbles.length; b++) {
    let bubble = bubbles[b];
    bubble.move();
    bubble.display();
  }

  // Congratulating message + Instruction for minigame3
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(0);
  textSize(60);
  text(`Congratulation!`, width / 2, height / 4);
  textSize(32);
  text(`Hang in there for just a bit more! Are you ready for the final trial?`, width / 2, 30 + height / 2);
  textSize(16);
  text(`What are you waiting for? You have 30 seconds!`, width / 2, -5 + 3 * height / 4);
  text(`Don't let the orcas get near you or you'll be eaten!!!`, width / 2, 25 + 3 * height / 4);
  textSize(10);
  text(`~ PRESS to ENTER Underwater Trial 3 ~`, width / 2, height - 50);
  textFont(fontItalic);
  textSize(40);
  text(`You have reach the surface of Antartica!`, width / 2, -25 + height / 2);
  pop();
}

// Set up game over title screen for minigame2
function gameover2() {
  playAudio9(); // Play underwater ambiance audio set up for gameover2

  // Set up gradient background
  push();
  let c1, c2, n;
  c1 = color(232, 0, 0); // red
  c2 = color(0);

  for (let c = 0; c < height; c++) {
    n = map(c, 0, height, 0, 1);
    let newColor = lerpColor(c1, c2, n);
    stroke(newColor);
    line(0, c, width, c);
  }
  // Set up "dramatic" bubbly background
  for (let b = 0; b < bubbles.length; b++) {
    let bubble = bubbles[b];
    tint(215, 0, 0); // lighter red
    bubble.move();
    bubble.display();
  }
  pop();

  // Add a representation of a turtle that didn't survived the crash
  push();
  imageMode(CENTER);
  image(deadTurtle, width / 2, 3 * height / 4, 300, 300);
  pop();

  // Game over message for minigame2
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(0);
  textSize(50);
  text(`Oh no!`, width / 2, height / 5);
  textSize(32);
  text(`A fish swam full speed towards you and`, width / 2, 50 + height / 4);
  textSize(40);
  text(`you died from the crash!`, width / 2, 40 + height / 3);
  fill(50);
  textSize(10);
  text(`~ PRESS to SPACE to restart Trial 1 ~`, width / 2, height - 50);
  textFont(fontItalic);
  fill(0);
  textSize(30);
  text(`...Be careful next time and beware of these vicious fishes!`, width / 2, 10 + height / 2);
  pop();

  push();
  tint(166, 0, 0);
  scuba.move();
  scuba.display();
  pop();
}