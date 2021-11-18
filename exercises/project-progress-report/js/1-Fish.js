class Fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;
    this.image = undefined;
  }

  // Allow fishs to move around
  move() {
    // Set up directions
    let direction = random(0, 1);
    if (direction < 0.05) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    // Move fish
    this.x += this.vx;
    this.y += this.vy;

    // Constrain fish to the canvas
    this.x = constrain(this.x, 50, width - 50);
    this.y = constrain(this.y, 50, height - 50);
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