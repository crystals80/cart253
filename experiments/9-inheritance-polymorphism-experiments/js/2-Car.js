class Car extends Vehicle {
  constructor(x, y) {
    // super() is constructor for parent class
    super(x, y);
    this.width = 50;
    this.height = 20;
    this.vx = 5;
    this.drunkenness = 0.2;
  }

  move() {
    this.veer();
    // Overriding Method
    super.move();
  }

  veer() {
    let r = random();
    if (r < this.drunkenness) {
      this.vy = random(-5, 5);
    }
  }

  wrap() {
    super.wrap();
  }

  display() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}