class Paddle {

  constructor(w, h, y) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height;

  }

  move() {
    this.x = mouseX;
  }

  display() {
    push();
    // Changing the paddle to a trampoline
    ellipseMode(CENTER);
    rectMode(CENTER);
    noStroke();
    // Trampoline's "feet"
    fill(127)
    // Left foot
    ellipse(this.x - 135, this.y + 15, 12, this.height);
    ellipse(this.x - 135, this.y + 43, 12);
    // Left-middle foot
    ellipse(this.x - 75, this.y + 12, 12, this.height);
    ellipse(this.x - 75, this.y + 40, 12);
    // Middle foot
    ellipse(this.x, this.y + 25, 12, this.height);
    ellipse(this.x, this.y + 53, 12);
    // Right foot
    ellipse(this.x + 135, this.y + 15, 12, this.height);
    ellipse(this.x + 135, this.y + 43, 12);
    // Right-middle foot
    ellipse(this.x + 75, this.y + 12, 12, this.height);
    ellipse(this.x + 75, this.y + 40, 12);
    // Trampoline's body
    fill(255)
    rect(this.x, this.y + 5, this.width, 20, 10);
    ellipse(this.x, this.y + 10, this.width, this.height);
    stroke(127);
    ellipse(this.x, this.y, this.width, this.height);
    noStroke();
    fill(127)
    ellipse(this.x, this.y, this.width - 75, this.height - 10);
    fill(255)
    ellipse(this.x, this.y, this.width - 175, this.height - 30);
    pop();
  }
}