class CfishCirculation extends FishCirculation {
  // Set up clownfish by giving it a speed and appearance as its other properties were already defined in the parent class 
  constructor(x, y, image) {
    super(x, y);
    this.speed = 4;
    this.image = image;
  }

  // Give appearance to clownfish
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}