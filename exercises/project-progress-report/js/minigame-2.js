function minigame2() {

  // Display background
  push();
  image(bg2, 0, 0, windowWidth, windowHeight + 150);
  imageMode(CORNER);
  pop();

  // Display user
  turtle.handleInput();
  turtle.move();
  turtle.display();
}