class Shark {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
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