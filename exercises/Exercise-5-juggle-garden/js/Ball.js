class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.active = true;
    this.score = 0;
  }

  gravity(force) {
    this.ay += force;
  }

  move() {
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x += this.vx;
    this.y += this.vy;

    if (this.y - this.size / 2 > height) {
      this.active = false;
    }
  }

  bounce(paddle) {

    if (this.x > paddle.x - paddle.width / 2 && this.x < paddle.x + paddle.width / 2 && this.y + this.size / 2 > paddle.y - paddle.height / 2 && this.y - this.size / 2 < paddle.y + paddle.height / 2) {
      // Bounce
      let dx = this.x - paddle.x;
      this.vx += map(dx, -paddle.width / 2, paddle.width / 2, -2, 2);

      this.vy = -this.vy;
      this.ay = 0;
      sfx();
    }
  }
  display() {

    // Show a growing score
    push();
    if (this.y < height) {
      this.score++;
    }
    if (this.score >= 800) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      textAlign(CENTER, CENTER);
      textSize(50);
      text(`CONGRATULATION! You passed the trial!`, width / 2, height / 2);
      fill(255)
      textSize(14);
      text(`Press SPACE to see prize!`, width / 2, 3 * height / 4);
      textSize(12);
      text(`...Or stay to make a new high score!`, width / 2, 25 + 3 * height / 4);
    }
    noStroke();
    fill(255);
    textAlign(LEFT, TOP);
    textSize(16);
    text(`Score: ` + this.score, width - 150, 25);
    pop();

    push();
    fill(255, 0, 0);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}