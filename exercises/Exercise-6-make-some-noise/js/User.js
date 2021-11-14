class User {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
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
    fill(200, 50, 50);
    noStroke();
    rect(this.x, this.y, this.size);
    fill(50, 200, 50);
    rect(this.x + 100, this.y - 50, this.size);
    fill(50, 50, 200);
    rect(this.x + 50, this.y + 100, this.size);
    fill(225, 225, 50);
    rect(this.x - 100, this.y + 50, this.size);
    fill(50, 225, 225);
    rect(this.x + -50, this.y - 100, this.size);
    pop();
  }
}