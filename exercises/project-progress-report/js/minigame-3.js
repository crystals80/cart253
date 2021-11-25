function minigame3() {

  // Set up gradient background
  let c1, c2, n;
  c1 = color(63, 108, 191); // Light teal
  c2 = color(63, 198, 191); // light indigo

  for (let c = 0; c < height; c++) {
    n = map(c, 0, height, 0, 1);
    let newColor = lerpColor(c1, c2, n);
    stroke(newColor);
    line(0, c, width, c);
  }

  // Display user
  penguin.move();
  penguin.display();
}