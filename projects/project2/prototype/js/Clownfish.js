class Clownfish extends SeaCreatures {
  constructor(x, y, image) {
    super(x, y);
    this.image = image;
  }

  display() {
    push();
    // Display the clownfishes on the canvas
    imageMode(CENTER);
    image(this.currentImage, this.x, this.y, this.size, this.size);
    pop();
  }
}