/**
Experimenting with conditionals
Lam Ky Anh Do

*/

let angle = 0;
let rectScale = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // Push and Pop saves the settings of a code/thing and then the next code/thing will be reset so that I don't need to manually re-type code and re-program it
  /*push();
  fill(255, 255, 0);
  stroke(0, 255, 255);
  strokeWeight(10);
  rect(100, 100, 100, 100);
  pop();

  push();
  fill(0, 0, 255);
  // See push/pop note above
  //stroke(255)
  //strokeWeight(1);
  rect(300, 100, 100, 100);
  pop();*/

  //Translation
  // WITHOUT push/pop
  /*fill(255, 255, 0);
  rect(0, 0, 100, 100);

  translate(200, 100);
  fill(0, 255, 0);
  rect(0, 0, 100, 100);

  translate(0, 200);
  fill(0, 255, 255);
  rect(0, 0, 100, 100);*/

  // WITH push/pop
  // By using push/pop,, you wil get a structure as if you just input the shapes w/o translating it. But by not pushing/popping, it also create an interesting structure. So in the end, push/pop allows to organize and reset code.
  /*push();
  fill(255, 255, 0);
  rect(0, 0, 100, 100);
  pop();
  push();
  translate(200, 100);
  fill(0, 255, 0);
  rect(0, 0, 100, 100);
  pop();
  push();
  translate(0, 200);
  fill(0, 255, 255);
  rect(0, 0, 100, 100);
  pop();*/

  //Rotation

  angle = angle + 0.01;
  rectScale = rectScale + 0.01;

  push();
  fill(255, 0, 0);
  rectMode(CENTER);
  //rotate is in radians <NO></NO>T degrees and it will translate on the same time
  //rotate(radians(45)); // Convert 45 degrees to radians
  //rotate(PI / 4);
  // So to prevent that:
  translate(width / 2, height / 2);
  rotate(angle);
  scale(.22);
  scale(rectScale);
  rect(0, 0, 100, 100);
  //rect(width / 2, height / 2, 100, 100);
  pop();









}