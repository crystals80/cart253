class MIFishCirculation extends FishCirculation {
  // Set up moorish idol fish by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y);
    this.speed = 2;
    this.image = image;
  }

  // Give appearance to moorish idol fish
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}