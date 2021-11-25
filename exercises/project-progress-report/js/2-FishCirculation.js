// Set up parent fish circulation class for minigame2
class FishCirculation {
  // Set up fishes by giving it a position, speed and undefined speed and appearance
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.size = 30;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
    this.image = undefined;
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
    // Fishes appearance will be determined in sub-classes
  }
}

// Set up 1st subclass for fish circulation
class CfishCirculation extends FishCirculation {
  // Set up clownfish by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y);
    this.speed = 6;
    this.image = image;
  }

  // Give appearance to clownfish
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}

// Set up 2nd subclass for fish circulation
class AfishCirculation extends FishCirculation {
  // Set up angelfish by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y);
    this.speed = 2;
    this.image = image;
  }

  // Give appearance to angelfish
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}

// Set up 3rd subclass for fish circulation
class MIFishCirculation extends FishCirculation {
  // Set up moorish idol fish by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y);
    this.speed = 4;
    this.image = image;
  }

  // Give appearance to moorish idol fish
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}

// Set up 4th subclass for fish circulation
class SharkCirculation extends FishCirculation {
  // Set up shark by giving it a speed and appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y);
    this.size = 175;
    this.speed = 1;
    this.image = image;
  }

  // Give appearance to shark
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    if (this.vx < 0) {
      scale(-1, 1);
      image(this.image, 0, 0, this.size, this.size);
    } else {
      image(this.image, 0, 0, this.size, this.size);
    }

    pop();
  }
}