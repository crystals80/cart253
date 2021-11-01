class Wall {

  constructor(w, h, y) {
    this.width = w;
    this.height = h;
    this.x = width - this.width / 2;
    this.y = 0;

  }

  move() {
    if (keyIsDown(DOWN_ARROW)) {
      this.y -= 10;
    } else if (keyIsDown(UP_ARROW)) {
      this.y += 10;
    }
  }

  display() {
    push();
    fill(255)
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}