class CfishCirculation extends FishCirculation {
  constructor(x3, y3, image) {
    super(xpos, ypos);
    this.size = 30;
    this.speed = 2;
    this.image = image;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}