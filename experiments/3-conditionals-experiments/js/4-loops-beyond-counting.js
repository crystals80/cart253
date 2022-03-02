/**
Experimenting with conditionals
Lam Ky Anh Do

*/

let circle1 = {
  x: undefined,
  y: undefined,
  size: 100,
};

let dangerZone = {
  x: 250,
  y: 250,
  size: 150,
};

function setup() {
  createCanvas(500, 500);

  circle1.x = random(0, width);
  circle1.y = random(0, height);

  let d = dist(circle1.x, circle1.y, dangerZone.x, dangerZone.y);
  while (d < circle1.size / 2 + dangerZone.size / 2) {
    circle1.x = random(0, width);
    circle1.y = random(0, height);
    d = dist(circle1.x, circle1.y, dangerZone.x, dangerZone.y);
  }
}

function draw() {

  fill(255);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);

  //Danger zone
  noFill();
  stroke(255, 0, 0);
  ellipse(dangerZone.x, dangerZone.y, dangerZone.size);
}