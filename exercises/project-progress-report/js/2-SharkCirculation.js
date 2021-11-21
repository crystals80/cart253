class SharkCirculation extends FishCirculation {
  // Set up shark by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y);
    this.size = 175;
    this.speed = 1;
    this.image = image;
  }

  // Give appearance to shark
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}