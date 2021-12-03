// Set up parent fish circulation class for minigame2
class FishCirculation {
  // Set up fishes by giving it a position, speed and undefined speed and appearance
  constructor(xpos, ypos, image) { // STOP! THIS IS WHERE PIPPIN STARTED RUINGING EVERYTHING!
    this.x = xpos;
    this.y = ypos;
    this.size = 30;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }

  // Set fishes movement for circulation
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // Keep the fishes in the canvas
  wrap() {
    if (this.x > width) {
      this.x -= width;
    } else if (this.x < 0) {
      this.x += width;
    }
    if (this.y > height) {
      this.y -= height - 25;
    } else if (this.y < 0) {
      this.y += height - 25;
    }
  }

  display() {
    push();
    imageMode(CENTER);
    // Translate angelfish image
    translate(this.x, this.y);
    // If fish moves left, fish will face the left
    if (this.vx < 0) {
      scale(-1, 1);
      image(this.image, 0, 0);
    } else {
      // else fish faces the right moving to the right
      image(this.image, 0, 0);
    }
    pop();
  }
}

// Set up 1st subclass for fish circulation
class CfishCirculation extends FishCirculation {
  // Set up clownfish by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = 6;
  }

}

// Set up 2nd subclass for fish circulation
class AfishCirculation extends FishCirculation {
  // Set up angelfish by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = 2;
  }

  // Give appearance to angelfish

}

// Set up 3rd subclass for fish circulation
class MIFishCirculation extends FishCirculation {
  // Set up moorish idol fish by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = 4;
  }


}

// Set up 4th subclass for fish circulation
class SharkCirculation extends FishCirculation {
  // Set up shark by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y, image);
    this.size = 175;
    this.speed = 1;
  }


}