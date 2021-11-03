class Car extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 50;
    this.height = 20;
    this.speed = 10;
  }

  display() {
    push();
    rectMode(CENTER);
    fill(255, 200, 50);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}