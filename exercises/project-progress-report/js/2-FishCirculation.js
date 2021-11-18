class FishCirculation {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.size = undefined;
    this.vx = 0;
    this.vy = 0;
    this.image = undefined;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  wrap() {
    if (this.x > width) {
      this.x -= width;
    } else if (this.x < 0) {
      this.x += width;
    }
  }

  display() {

  }
}