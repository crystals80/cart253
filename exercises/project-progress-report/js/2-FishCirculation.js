class FishCirculation {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.size = 30;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
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