class Angelfish extends Fish {
  // Set up angelfish by giving it an appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y);
    this.image = image;
  }

  display() {
    push();
    // Display the angelfish on the canvas
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}