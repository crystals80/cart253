class Wall {

  constructor(w, h, y) {
    this.width = w;
    this.height = h;
    this.x1 = 10;
    this.y1 = 0;
    this.x2 = width - this.width / 2;
    this.y2 = 0;
  }

  move() {
    if (keyIsDown(DOWN_ARROW)) {
      this.y1 -= 10;
      this.y2 -= 10;
    } else if (keyIsDown(UP_ARROW)) {
      this.y1 += 10;
      this.y2 += 10;
    }
  }

  display() {
    push();
    fill(255)
    noStroke();
    rectMode(CENTER);
    rect(this.x1, this.y1, this.width, this.height);
    rect(this.x2, this.y2, this.width, this.height);
    pop();
  }
}