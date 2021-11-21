class TurtleUser {
  // Set up turtle by giving it a position, size, speed, appearance and life
  constructor(x2, y2, image) {
    this.x = x2;
    this.y = y2;
    this.size = 75;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.image = image;
    this.alive = true;
  }
  // Check if turtle/User is hit by a fish
  checkHit(fish) {
    if (this.x > fish.x - fish.width / 2 && this.x < fish.x + fish.width / 2 && this.y > fish.y - fish.height / 2 && this.y < fish.y + fish.height / 2) {
      this.alive = false;
    }
  }
  // Set up turtle's movement using arrows
  handleInput() {
    // Moving from right to left
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
    // Moving up and down
    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
  }

  // Set movements to turtle so user could can move how ever they want
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // Give an appearance to turtle
  display() {
    push();
    imageMode(CENTER);
    image(turtleImg, this.x, this.y, this.size, this.size);
    pop();
  }
}