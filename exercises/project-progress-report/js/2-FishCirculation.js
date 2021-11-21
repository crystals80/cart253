class FishCirculation {
  // Set up fishes by giving it a position, speed and undefined speed and appearance
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.size = 30;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
    this.image = undefined;
  }

  // Set fishes movement for circulation
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // Keep the fishes in the canvas
  wrap() {
    if (this.x > width) {
      this.x -= width - 30;
    } else if (this.x < 0) {
      this.x += width - 25;
    }
  }

  display() {
    // Fishes appearance will be determined in sub-classes
  }
}