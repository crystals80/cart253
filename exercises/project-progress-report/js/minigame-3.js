function minigame3() {

  // Display background
  push();
  image(bg2, 0, 0, windowWidth, windowHeight);
  imageMode(CORNER);
  pop();

  // Display user
  penguin.move();
  penguin.display();
}