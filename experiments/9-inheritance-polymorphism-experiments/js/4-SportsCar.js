class SportsCar extends Car {
  constructor(x, y) {
    // super() is constructor for parent class
    super(x, y);
    this.vx = 10;
  }

  display() {

    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 0, 255);
    rect(this.x, this.y, this.width, this.height);
    fill(0, 0, 255);
    rect(this.x, this.y - this.height / 10, this.width, this.height / 20);
    rect(this.x, this.y + this.height / 10, this.width, this.height / 20);
    pop();
  }
}