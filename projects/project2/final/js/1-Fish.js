/********************************
Fish Class for minigame1
Lam Ky Anh Do

This js file contains the parent Fish class along with its specific children Fish classes (Clownfish, Angelfish and MoorishIdol classes). It shows its constructor, how it moves, how it is kept within the canvas and how it is displayed
********************************/

// Set up parent fish class for minigame1
class Fish {
  // Set up fishes by giving it a position, size, speed and appearance
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;
    this.image = image;
  }

  // Allow fishs to move around
  move() {
    // Set up directions
    let direction = random(0, 1);
    if (direction < 0.009) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    // Move fish
    this.x += this.vx;
    this.y += this.vy;

    // Constrain fish to the canvas
    this.x = constrain(this.x, 25, width - 25);
    this.y = constrain(this.y, 25, height - 25);
  }

  // Keep fishes within the canvas
  wrap() {
    if (this.x > width) {
      this.x -= width;
    } else if (this.x < 0) {
      this.x += width;
    }
    if (this.y > height) {
      this.y -= height - 10;
    } else if (this.y < 0) {
      this.y += height - 10;
    }
  }

  // Display the clownfish, angelfish and moorish idol fish on the canvas
  display() {
    push();
    imageMode(CENTER);
    // Translate clownfish image
    translate(this.x, this.y);
    // If fish moves left, fish will face the left
    if (this.vx < 0) {
      scale(-1, 1);
      image(this.image, 0, 0, this.size, this.size);
    } else {
      // else fish faces the right moving to the right
      image(this.image, 0, 0, this.size, this.size);
    }
    pop();
  }
}

// Set up 1st subclass
class Clownfish extends Fish {
  // Set up clownfish by giving it an appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y, image);
  }
}

// Set up 2nd subclass
class Angelfish extends Fish {
  // Set up angelfish by giving it an appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y, image);
  }
}

// Set up 3rd subclass
class MoorishIdol extends Fish {
  // Set up moorish idol fish by giving it an appearance as its other properties were already defined in the parent class
  constructor(x, y, image) {
    super(x, y, image);
  }
}