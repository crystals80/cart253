function minigame1() {

  // Display background
  push();
  image(bg1, 0, 0, windowWidth, windowHeight + 20);
  imageMode(CORNER);
  pop();

  // Display user
  shark.move();
  shark.display();

  // Display fishes and their movements
  for (let i = 0; i < fishes.length; i++) {
    let fish = fishes[i];
    fish.move();
    fish.wrap();
    fish.display();
  }

  // Display countdown timer
  push();
  image(bubbleImg, width - 100, 25, 55, 55);
  noStroke();
  textFont(fontRegular);
  textSize(24);
  text(timer, width - 84, 58);
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }
  //text('0:0' + timer, width - 88, 56);
  //if (frameCount % 60 == 0 && timer < 10) {timer--;  }
  if (timer == 0 && state === `minigame1`) {
    state = `gameover1`;
  }
  pop();
}

// Set up winning title screen of minigame1
function complete1() {

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

  // Congratulating message + Instruction for minigame2
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(0);
  textSize(60);
  text(`Congratulation!`, width / 2, height / 4);
  textSize(32);
  text(`A step closer to your goal! Are you ready for the next trial?`, width / 2, 30 + height / 2);
  textSize(16);
  text(`In that case, you must swim across the different sea levels and`, width / 2, -5 + 3 * height / 4);
  text(`reach the surface without encountering another sea creature!`, width / 2, 25 + 3 * height / 4);
  textSize(10);
  text(`~ PRESS to ENTER Underwater Trial 2 ~`, width / 2, height - 50);
  textFont(fontItalic);
  textSize(40);
  text(`You ate a special fish and became a Turtle!`, width / 2, -25 + height / 2);
  pop();
}

// Set up game over title screen
function gameover1() {
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

  //
  let sadShark = createImg('assets/images/sad-shark-tinted.gif');
  sadShark.size(333, 200);
  sadShark.position(10 + width / 3, -260 + height);

  // Game over message for minigame1
  push();
  textAlign(CENTER, CENTER);
  textFont(fontRegular);
  noStroke();
  fill(0);
  textSize(50);
  text(`You waited too long for lunch time and died!`, width / 2, height / 3);
  fill(50);
  textSize(10);
  text(`~ PRESS to SPACE to restart Trial 1 ~`, width / 2, height - 50);
  textFont(fontItalic);
  fill(0);
  textSize(40);
  text(`...Don't starve yourself!`, width / 2, height / 2);
  pop();
}

// Check if shark(user) can eat fishes
function mousePressed(fish) {
  for (let i = 0; i < fishes.length; i++) {
    // Store the current fishes in the fish variable
    let fish = fishes[i];
    // Calculate the distance between the mouse position and the fish
    let d1 = dist(shark.x, shark.y, fish.x, fish.y);
    // If a fish is clicked within the shark, it will be removed/eaten
    if (d1 < fish.size / 2 + shark.size / 2) {
      fishes.splice(i, 1);
      // This forces the for-loop to stop immediately
      break;
    }
  }
  // When shark(user) eats all fishes, user wins and transition to a congratulating screen and therefore to minigame2
  if (state === `minigame1` && fishes.length == 0) {
    state = `complete1`;
  }
}