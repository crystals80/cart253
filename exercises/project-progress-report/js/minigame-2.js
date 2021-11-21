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

  // Display fish circulation and if the fishes would hit the turtle
  for (let i = 0; i < fishesCirculation.length; i++) {
    let fishC = fishesCirculation[i];
    fishC.move();
    fishC.wrap();
    fishC.display();

    turtle.checkHit(fishC);
  }

  // If turtle is hit by one of the fishes then it is game over
  if (!turtle.alive) {
    state = `dead`;
  }

  // If turtle reach the surface (top of canvas) then user have succeeded minigame2
  if (turtle.y < 0) {
    state = `success`;
  }
}