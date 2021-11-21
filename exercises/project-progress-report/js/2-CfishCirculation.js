class CfishCirculation extends FishCirculation {
  constructor(x, y, image) {
    super(x, y);
    this.speed = 4;
    this.image = image;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}