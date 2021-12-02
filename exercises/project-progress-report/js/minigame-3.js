function minigame3() {

  // Display background
  push();
  image(bg3, 0, 0, windowWidth, windowHeight);
  imageMode(CORNER);
  pop();

  // Display user
  penguin.move();
  penguin.display();

  // Run all the orcas
  for (let i = 0; i < orcas.length; i++) {
    orcas[i].run(orcas);
  }
}