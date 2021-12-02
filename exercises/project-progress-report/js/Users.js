// Set up user class for minigame1
class MouseUser {
  // Set up shark by giving it a position, size and appearance
  constructor(x1, y1, image) {
    this.x = x1;
    this.y = y1;
    this.size = 125;
    this.image = image;
  }

  move() {
    // User movements
    this.x = mouseX;
    this.y = mouseY;

  }

  // Display user
  display() {
    let diffmousex = pmouseX - mouseX;
    if (diffmousex > 0) {
      push();
      // Display the fishes on the canvas
      imageMode(CENTER);
      translate(this.x, this.y)
      scale(-1, 1);
      image(this.image, 0, 0, this.size, this.size);
      pop();
    } else {
      push();
      // Display the fishes on the canvas
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.size, this.size);
      pop();
    }
  }
}

// Set up user class for minigame2
class ArrowUser {
  // Set up turtle by giving it a position, size, speed, appearance and life
  constructor(x2, y2, image) {
    this.x = x2;
    this.y = y2;
    this.size = 75;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.image = image;
    this.alive = true;
  }
  // Check if turtle/User is hit by a fish
  checkHit(fishC) {
    if (this.x > fishC.x - fishC.size / 3.5 && this.x < fishC.x + fishC.size / 3.5 && this.y > fishC.y - fishC.size / 3.5 && this.y < fishC.y + fishC.size / 3.5) {
      this.alive = false;
    }
  }
  // Set up turtle's movement using arrows
  handleInput() {
    // Moving from right to left
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
      // push();
      // imageMode(CENTER);
      // translate(this.x, this.y);
      // rotate(radians(90));
      // image(turtleImg, 0, 0, this.size, this.size);
      // pop();
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
      // push();
      // imageMode(CENTER);
      // translate(this.x, this.y);
      // rotate(radians(270));
      // image(turtleImg, 0, 0, this.size, this.size);
      // pop();
    } else {
      this.vx = 0;
    }
    // Moving up and down
    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
      // push();
      // imageMode(CENTER);
      // image(turtleImg, this.x, this.y, this.size, this.size);
      // pop();
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
      // push();
      // imageMode(CENTER);
      // translate(this.x, this.y);
      // rotate(radians(180));
      // image(turtleImg, 0, 0, this.size, this.size);
      // pop();
    } else {
      this.vy = 0;
    }
  }

  // Set movements to turtle so user could can move how ever they want
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // Give an appearance to turtle
  display() {
    // // If turtle moves left (keyboard left arrow is pressed), it faces the left
    // if (this.vx > 0) {
    //   push();
    //   imageMode(CENTER);
    //   translate(this.x, this.y);
    //   rotate(radians(90));
    //   image(turtleImg, 0, 0, this.size, this.size);
    //   pop();
    // } else if (this.vx < 0) {
    //   // If turtle moves right (keyboard right arrow is pressed), it faces the right
    //   push();
    //   imageMode(CENTER);
    //   translate(this.x, this.y);
    //   rotate(radians(270));
    //   image(turtleImg, 0, 0, this.size, this.size);
    //   pop();
    // } else {
    //   push();
    //   imageMode(CENTER);
    //   translate(this.x, this.y);
    //   rotate(radians(0));
    //   image(turtleImg, 0, 0, this.size, this.size);
    //   pop();
    // }
    //
    // // If turtle moves down (keyboard down arrow is pressed), it faces the down
    // if (this.vy < 0) {
    //   push();
    //   imageMode(CENTER);
    //   translate(this.x, this.y);
    //   rotate(radians(180));
    //   image(turtleImg, 0, 0, this.size, this.size);
    //   pop();
    // } else if (this.vy < 0) {
    //   // If turtle moves up (keyboard up arrow is pressed), it faces the up
    //   push();
    //   imageMode(CENTER);
    //   translate(this.x, this.y);
    //   rotate(radians(0));
    //   image(turtleImg, 0, 0, this.size, this.size);
    //   pop();
    // } else {
    // push();
    // imageMode(CENTER);
    // translate(this.x, this.y);
    // rotate(radians(0));
    // image(turtleImg, 0, 0, this.size, this.size);
    // pop();
    // }

    // If turtle moves left (keyboard left arrow is pressed), it faces the left
    if (this.vx > 0 && this.vy === 0) {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(radians(90));
      image(turtleImg, 0, 0, this.size, this.size);
      pop();
    } else if (this.vx < 0 && this.vy === 0) {
      // If turtle moves right (keyboard right arrow is pressed), it faces the right
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(radians(270));
      image(turtleImg, 0, 0, this.size, this.size);
      pop();
    } else if (this.vy > 0 && this.vx === 0) {
      // If turtle moves down (keyboard down arrow is pressed), it faces the down
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(radians(180));
      image(turtleImg, 0, 0, this.size, this.size);
      pop();
    } else if (this.vy < 0 && this.vx === 0) {
      // If turtle moves up (keyboard up arrow is pressed), it faces the up
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(radians(0));
      image(turtleImg, 0, 0, this.size, this.size);
      pop();
    } else {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(radians(0));
      image(turtleImg, 0, 0, this.size, this.size);
      pop();
    }
  }
}

// Set up user class for minigame3
class PenguinUser extends MouseUser {
  // Set up penguin by giving it a new size according to the parent class's position and appearance setup
  constructor(x1, y1, image) {
    super(x1, y1, image)
    this.size = 50;
  }
}