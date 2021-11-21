class SharkUser {
  // Set up shark by giving it a position, size and appearance
  constructor(x1, y1, image) {
    this.x = x1;
    this.y = y1;
    this.size = 125;
    this.image = image;
  }

  move() {
    // User movement
    this.x = mouseX;
    this.y = mouseY;
  }

  // Display user
  display() {
    push();
    // Display the fishes on the canvas
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}