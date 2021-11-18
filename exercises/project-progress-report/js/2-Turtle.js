class Turtle {
  constructor(x2, y2, turtleImg) {
    this.x = x2;
    this.y = y2;
    this.size = 20;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.image = turtleImg;
    this.alive = true;
  }

  checkHit(fish) {
    if (this.x > fish.x - fish.width / 2 && this.x < fish.x + fish.width / 2 && this.y > fish.y - fish.height / 2 && this.y < fish.y + fish.height / 2) {
      this.alive = false;
    }
  }

  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  display() {
    push();
    imageMode(CENTER);
    image(turtleImg, this.x, this.y, this.size, this.size);
    pop();
  }
}