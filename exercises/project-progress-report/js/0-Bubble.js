class Bubble {
  // When a new bubble is made,it gets a random diameter x, y and speed
  constructor(image) {
    this.d = random(5, 100);
    this.x = random(0, windowWidth);
    this.y = windowHeight + this.d;
    this.speed = random(1, 4);
    this.image = image;
  }

  display() {
    image(this.image, this.x, this.y, this.d, this.d);
  }

  // Move each bubble object
  move() {
    // Move the bubble "up"
    this.y -= this.speed;

    // If the bubble's y pos is off the canvas, reset the bubble to start from the bottom of canvas at a random position and speed
    if (this.y < 0 - this.d) {
      this.y = windowHeight + this.d;
      this.x = random(0, windowWidth);
      this.speed = random(1, 4);
    }
  }
}