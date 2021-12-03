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
    // console.log(pmouseX - mouseX); // Debug previous mouseX - mouseX = negative value if move to the left, and positive value if move to the right
    // If cursor moves to the right and...
    if (diffmousex > 0) {
      // Display the shark looking to the right on the canvas
      push();
      imageMode(CENTER);
      translate(this.x, this.y)
      scale(-1, 1);
      image(this.image, 0, 0, this.size, this.size);
      pop();
    } else {
      // If not, cursor moves to the left and display the shark looking to the left on the canvas
      push();
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
    if (this.x > fishC.x - fishC.width / 2 && this.x < fishC.x + fishC.width / 2 && this.y > fishC.y - fishC.height / 2 && this.y < fishC.y + fishC.height / 2) {
      this.alive = false;
    }
  }
  // Set up turtle's movement using arrows
  handleInput() {
    // Moving from right to left
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
    // Moving up and down
    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
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
    // If turtle moves left (keyboard left arrow is pressed), it faces the left
    // if (turtle moves left and no movement on the y axis)
    if (this.vx > 0 && this.vy === 0) {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(radians(90)); // Rotate left in degrees
      image(turtleImg, 0, 0, this.size, this.size);
      pop();
    }
    // If turtle moves right (keyboard right arrow is pressed), it faces the right
    // if (turtle moves right and no movement on the y axis)
    else if (this.vx < 0 && this.vy === 0) {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(radians(270)); // Rotate right in degrees
      image(turtleImg, 0, 0, this.size, this.size);
      pop();
    }
    // If turtle moves down (keyboard down arrow is pressed), it faces the down
    // if (turtle moves down and no movement on the x axis)
    else if (this.vy > 0 && this.vx === 0) {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(radians(180)); // Rotate 2 times in degrees to face downward
      image(turtleImg, 0, 0, this.size, this.size);
      pop();
    }
    // If turtle moves up (keyboard up arrow is pressed), it faces the up
    // if (turtle moves up and no movement on the x axis)
    else if (this.vy < 0 && this.vx === 0) {
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(radians(0)); // No rotation needed, just have it there to prevent errors by having the image pretending to rotate
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
    this.size = 20;
    this.alive = true;
  }

  // Check if penguin/User is hit by orcas
  checkHit(orcas) {
    if (this.x > orcas.position.x - orcas.size / 3.5 && this.x < orcas.position.x + orcas.size / 3.5 && this.y > orcas.position.y - orcas.size / 3.5 && this.y < orcas.position.y + orcas.size / 3.5) {
      this.alive = false;
    }
  }

  // display() {
  //   let diffmousex = pmouseX - mouseX; // Redeclaring this variable for this display function in this sub-class
  //   let diffmousey = pmouseY - mouseY; // Same as diffmousex but for y axis
  //   if (diffmousey > 0 && diffmousex < 0) {
  //     push();
  //     // Display the penguin looking to the upper left on the canvas
  //     imageMode(CENTER);
  //     translate(this.x, this.y)
  //     rotate(radians(300));
  //     image(this.image, 0, 0, this.size, this.size);
  //     pop();
  //   } else if (diffmousey > 0 && diffmousex > 0) {
  //     push();
  //     // Display the penguin looking to the upper right on the canvas
  //     imageMode(CENTER);
  //     translate(this.x, this.y)
  //     rotate(radians(300));
  //     image(this.image, this.x, this.y, this.size, this.size);
  //     pop();
  //   } else if (diffmousey < 0 && diffmousex > 0) {
  //     push();
  //     // Display the penguin looking to the upper right on the canvas
  //     imageMode(CENTER);
  //     translate(this.x, this.y)
  //     scale(-1, 1);
  //     image(this.image, this.x, this.y, this.size, this.size);
  //     pop();
  //   } else {
  //     push();
  //     // Display the penguin looking to the upper right on the canvas
  //     imageMode(CENTER);
  //     image(this.image, this.x, this.y, this.size, this.size);
  //     pop();
  //   }
  // }
}