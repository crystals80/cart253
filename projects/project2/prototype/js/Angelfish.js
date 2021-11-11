class Angelfish extends SeaCreatures {
  constructor(x, y, image) {
    super(x, y);
    this.image = image;
  }

  display() {
    push();
    // Display the angelfishes on the canvas
    imageMode(CENTER);
    image(this.currentImage, this.x, this.y, this.size, this.size);
    pop();
  }
}