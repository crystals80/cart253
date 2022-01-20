/**
Learning how to use arrays
Lam Ky Anh Do

Experimenting with arrays

********ISSUE: cant see the fishes unless clicked aka not showing at all...
*/

"use strict";

let school = [];
let schoolSize = 10; // equal to school.length

// Our fish
//let fish1, fish2, fish3, fish4; // replaced by array variable "school"

function setup() {
  createCanvas(600, 600);

  // Create 4 fish, positioned randomly
  // fish1 = createFish(random(0, width), random(0, height));
  // fish2 = createFish(random(0, width), random(0, height));
  // fish3 = createFish(random(0, width), random(0, height));
  // fish4 = createFish(random(0, width), random(0, height));

  // With the empty list variable, the above becomes the following
  // Since values are added, the variables with [] become "boxes"
  // Numbers inside [] are called "index of the array" & what follows it is called "element"
  // school[0] = createFish(random(0, width), random(0, height));
  // school[1] = createFish(random(0, width), random(0, height));
  // school[2] = createFish(random(0, width), random(0, height));
  // school[3] = createFish(random(0, width), random(0, height));

  // What we use for counting: for loops
  // The above become the following when you want it to grow
  for (let i = 0; i < schoolSize; i++) {
    // This code can replace the function mousePressed below
    //let = fish createFish(random(0,width), random(0,height));
    //school.push(fish);

    school[i] = createFish(random(0, width), random(0, height));
  }
}

// createFish(x,y)
// Cretae a new Javascript OBject describing a fish and return it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
  }
  return fish;
}

// Moves and display our fishes
function draw() {
  background(0);

  // moveFish(fish1);
  // moveFish(fish2);
  // moveFish(fish3);
  // moveFish(fish4);
  //
  // displayFish(fish1);
  // displayFish(fish2);
  // displayFish(fish3);
  // displayFish(fish4);

  // Again, the above becomes the following due to array empty list variable
  // moveFish(school[0]);
  // moveFish(school[1]);
  // moveFish(school[2]);
  // moveFish(school[3]);
  //
  // displayFish(school[0]);
  // displayFish(school[1]);
  // displayFish(school[2]);
  // displayFish(school[3]);

  // Again, the above becomes the following for a more neat code
  // What we use for counting: for loops
  for (let i = 0; i < school.length; i++) {
    let fish = school[i];
    moveFish(school[i]);
    displayFish(school[i]);
  }
}

// Chooses whetehr the provided fish changes direction and moves it
function moveFish(fish) {
  // Choose whetehr to chnage direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// Display the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

// Generate fish by clicks
function mousePressed() {
  let fish = createFish(mouseX, mouseY);
  // push here is different of push/pop
  school.push(fish);
}

// MORE ARRAYS

// mousePressed() checks whether a fish in the school was clicked
// and removes it if so
/*function mousePressed() {
  // Use a for loop to examine every fish in the school one by one
  for (let i = 0; i < school.length; i++) {
    // Store the current fish in the fish variable
    let fish = school[i];
    // Calculate the distance between the mouse position and the fish
    let d = dist(mouseX, mouseY, fish.x, fish.y);
    // If the distance means the mouse was clicked inside the fish
    if (d < fish.size / 2) {
      // Remove the fish using the splice() function which takes two arguments
      // - The index to start remove elements from (i in our case)
      // - The number of elements to remove from that position (just one for us)
      school.splice(i, 1);
      // Now that we've found our fish to remove, we don't want to continue
      // going through the loop, so we end it prematurely with break
      // This forces the for-loop to stop immediately
      break;
    }
  }
}*/