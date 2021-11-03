class Motorcycle extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 30;
    this.height = 20;
    this.speed = 10;
  }

  display() {
    push();
    rectMode(CENTER);
    fill(0, 255, 255);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}