class AfishCirculation extends FishCirculation {
  // Set up angelfish by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y);
    this.speed = 2.5;
    this.image = image;
  }

  // Give appearance to angelfish
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}