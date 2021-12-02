/**
This code was taken from p5.js Examples — Flocking
Link: https://p5js.org/examples/hello-p5-flocking.html

It is a demonstration of Craig Reynolds' "Flocking" behavior.
Rules of this demonstration includes 3 aspects: Cohesion, Separation, Alignment.) From natureofcode.com.
**/

// Set up orca class for minigame3
class Orca {
  constructor(x, y, image) {
    this.size = 75;
    this.acceleration = createVector(0, 0);
    this.velocity = p5.Vector.random2D();
    this.position = createVector(x, y);
    this.r = 3.0; // Radius
    this.maxspeed = 3; // Maximum speed
    this.maxforce = 0.05; // Maximum steering force
    this.image = image;
  }

  run(orcas) {
    this.flock(orcas);
    this.update();
    this.borders();
    this.display();
  }

  // Forces go into acceleration
  applyForce(force) {
    this.acceleration.add(force);
  }

  // Accumulating a new acceleration each time based on three rules
  flock(orcas) {
    let sep = this.separate(orcas); // Separation
    let ali = this.align(orcas); // Alignment
    let coh = this.cohesion(orcas); // Cohesion
    // Arbitrarily weight these forces
    sep.mult(2.5);
    ali.mult(1.0);
    coh.mult(1.0);
    // Add the force vectors to acceleration
    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }

  // Method to update location
  update() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset acceleration to 0 each cycle
    this.acceleration.mult(0);
  }

  // A method that calculates and applies a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY
  seek(target) {
    let desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
    // Normalize desired and scale to maximum speed
    desired.normalize();
    desired.mult(this.maxspeed);
    // Steering = Desired minus Velocity
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); // Limit to maximum steering force
    return steer;
  }

  // Display orca on the canvas
  display() {
    image(this.image, this.position.x, this.position.y, this.size, this.size);
  }

  // Wrap-around
  borders() {
    if (this.position.x < -this.r) this.position.x = width - this.r;
    if (this.position.y < -this.r) this.position.y = height - this.r;
    if (this.position.x > width + this.r) this.position.x = +this.r;
    if (this.position.y > height + this.r) this.position.y = +this.r;
  }

  // SEPARATION
  // Method checks for nearby orcas and steers away
  separate(orcas) {
    let desiredseparation = 45;
    let steer = createVector(0, 0);
    let count = 0;
    // For every orca in the system, check if it's too close
    for (let i = 0; i < orcas.length; i++) {
      let d = p5.Vector.dist(this.position, orcas[i].position);
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if ((d > 0) && (d < desiredseparation)) {
        // Calculate vector pointing away from neighbor
        let diff = p5.Vector.sub(this.position, orcas[i].position);
        diff.normalize();
        diff.div(d); // Weight by distance
        steer.add(diff);
        count++; // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      steer.div(count);
    }

    // As long as the vector is greater than 0
    if (steer.mag() > 0) {
      // Implement Reynolds: Steering = Desired - Velocity
      steer.normalize();
      steer.mult(this.maxspeed);
      steer.sub(this.velocity);
      steer.limit(this.maxforce);
    }
    return steer;
  }

  // ALIGNMENT
  // For every nearby orca in the system, calculate the average velocity
  align(orcas) {
    let neighbordist = 50;
    let sum = createVector(0, 0);
    let count = 0;
    for (let i = 0; i < orcas.length; i++) {
      let d = p5.Vector.dist(this.position, orcas[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(orcas[i].velocity);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxspeed);
      let steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }

  // COHESION
  // For the average location (i.e. center) of all nearby orcas, calculate steering vector towards that location
  cohesion(orcas) {
    let neighbordist = 50;
    let sum = createVector(0, 0); // Start with empty vector to accumulate all locations
    let count = 0;
    for (let i = 0; i < orcas.length; i++) {
      let d = p5.Vector.dist(this.position, orcas[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(orcas[i].position); // Add location
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      return this.seek(sum); // Steer towards the location
    } else {
      return createVector(0, 0);
    }
  }
}