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

  bounce(paddle, wall) {
    // Bounce on trampoline
    if (this.x > paddle.x - paddle.width / 2 && this.x < paddle.x + paddle.width / 2 && this.y + this.size / 2 > paddle.y - paddle.height / 2 && this.y - this.size / 2 < paddle.y + paddle.height / 2) {
      // Bounce
      let dx = this.x - paddle.x;
      this.vx += map(dx, -paddle.width / 2, paddle.width / 2, -2, 2);

      this.vy = -this.vy;
      this.ay = 0;
      sfx();
    }
    // Bounce on side walls
    if (this.x > wall.x - wall.width / 2 && this.x < wall.x + wall.width / 2 && this.y + this.size / 2 > wall.y - wall.height / 2 && this.y - this.size / 2 < wall.y + wall.height / 2) {
      // Bounce
      let dx = this.x - wall.x;
      this.vx += map(dx, -wall.width / 2, wall.width / 2, -2, 2);

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
    if (this.score >= 750) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      textAlign(CENTER, CENTER);
      textSize(50);
      text(`CONGRATULATION! You passed the trial!`, width / 2, -75 + height / 2);
      fill(255)
      textSize(20);
      text(`Press SPACE to see prizes!`, width / 2, 50 + height / 2);
      textSize(14);
      text(`...Or stay to make a new high score!`, width / 2, 100 + height / 2);
      textSize(10);
      text(`DO NOT press BACKSPACE at all cost!!!`, width / 2, 125 + height / 2)
    }

    noStroke();
    fill(255);
    textAlign(LEFT, TOP);
    textSize(16);
    text(`Score: ` + this.score, width - 150, 25);
    pop();

    // Display balls
    push();
    fill(255, 0, 0);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}