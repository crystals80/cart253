function minigame3() {

  // Display background
  push();
  imageMode(CORNER);
  image(bg3, 0, 0, windowWidth, windowHeight);
  pop();

  // Display user
  penguin.move();
  penguin.display();

  // Run all the orcas
  for (let i = 0; i < orcas.length; i++) {
    orcas[i].run(orcas);
  }

  // If penguin is hit by orcas then it is game over
  if (!penguin.alive) {
    state = `gameover2`;
  }

  // If penguin reach the surface (top of canvas) then user have succeeded minigame2
  if (penguin.y < 0) {
    state = `complete3`;
  }

  // If timer reaches 0 and penguin still hasn't gotten hit by orcas then user wins the game and proceed to move to the last title screen
  if (timer == 0 && state === `minigame3`) {
    state = `complete3`;
  }
}

// Set up winning title screen of minigame3
function complete3() {

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

  // Congratulating message + Instruction for what happens after minigame3
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(0);
  textSize(60);
  text(`Congratulation!`, width / 2, height / 4);
  textSize(32);
  text(`You can now explore new territories and encounter its challenging trials`, width / 2, 30 + height / 2);
  textSize(16);
  text(`Are you ready to explore the deeper levels of the ocean?`, width / 2, -5 + 3 * height / 4);
  text(`What are you waiting for?`, width / 2, 25 + 3 * height / 4);
  textSize(10);
  text(`~ PRESS to ENTER to enter the ocean abyss ~`, width / 2, height - 50);
  textFont(fontItalic);
  textSize(40);
  text(`You have succeeded all trials and gain unlimited access to surf through the ocean!`, width / 2, -25 + height / 2);
  pop();
}

// Set up game over title screen for minigame3
function gameover3() {
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
    tint(215, 0, 0);
    bubble.move();
    bubble.display();
  }
  pop();

  // Add special effect showing that orcas' tummy are happy
  let happyOrca = createImg('assets/images/orca-loop-cropped.gif');
  happyOrca.size(333, 200);
  happyOrca.position(10 + width / 3, -260 + height);

  // Game over message for minigame1
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(0);
  textSize(50);
  text(`Oh no! The orcas caught up to you!`, width / 2, height / 3);
  fill(50);
  textSize(10);
  text(`~ PRESS to SPACE to restart Trial 3 ~`, width / 2, height - 50);
  textFont(fontItalic);
  fill(0);
  textSize(40);
  text(`Watch out and swim faster!`, width / 2, height / 2);
  pop();
}