class Shark {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.size = 125;
    this.image = image;
  }

  display() {
    push();
    // Display the fishes on the canvas
    imageMode(CENTER);
    image(this.currentImage, this.x, this.y, this.size, this.size);
    pop();
  }
}